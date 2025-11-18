"use client";

import { use, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Loader2, Wallet } from "lucide-react";
import { SERVICES } from "@/lib/services";

declare global {
  interface Window {
    Razorpay: any;
  }
}

function PaymentContent({
  searchParams,
}: {
  searchParams: Promise<{ applicationId?: string; serviceId?: string }>;
}) {
  const params = use(searchParams);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  const applicationId = params.applicationId;
  const serviceId = params.serviceId;

  const service = SERVICES.find((s) => s.id === serviceId);
  const amount = service?.fee || 0;
  const serviceName = service?.name || "Service";

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    script.onerror = () => setError("Failed to load payment gateway");
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!applicationId || !serviceId) {
      setError("Invalid payment details");
    }
  }, [applicationId, serviceId]);

  const handleRazorpayPayment = async () => {
    if (!razorpayLoaded) {
      setError("Payment system is loading. Please wait...");
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log('💳 Creating payment order for:', applicationId);
      
      // Create payment order
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicationId,
          amount,
          serviceName,
          gateway: "razorpay",
          userData: {
            name: "User",
            email: "user@example.com",
            phone: "9999999999",
          },
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Payment creation failed");
      }

      console.log('✅ Payment order created:', data.orderId);

      // Initialize Razorpay
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        order_id: data.orderId,
        name: "e-Sevai",
        description: serviceName,
        handler: async function (response: any) {
          console.log("✅ Payment successful:", response);
          
          try {
            console.log('📤 Sending complete application data to n8n...');
            
            // Get application data from localStorage
            const applicationDataStr = localStorage.getItem('pendingApplication');
            let applicationData = null;
            
            if (applicationDataStr) {
              applicationData = JSON.parse(applicationDataStr);
              console.log('📦 Retrieved application data from localStorage');
            } else {
              console.warn('⚠️ No application data found in localStorage');
            }
            
            // Send complete data with payment info to n8n
            const paymentWebhook = 'https://n8n.srv1068626.hstgr.cloud/webhook/payment-confirmation';
            
            const completeData = {
              // Payment info
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              paymentSignature: response.razorpay_signature,
              paymentStatus: 'paid',
              paymentDate: new Date().toISOString(),
              
              // Application data (if available)
              applicationId: applicationData?.applicationId || applicationId,
              serviceId: applicationData?.serviceId || serviceId,
              serviceName: applicationData?.serviceName || serviceName,
              userData: applicationData?.userData || {},
              formData: applicationData?.formData || {},
              timestamp: applicationData?.timestamp || new Date().toISOString(),
            };
            
            console.log('📦 Complete data being sent:', completeData);
            
            const n8nResponse = await fetch(paymentWebhook, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(completeData),
            });

            const responseText = await n8nResponse.text();
            console.log('📨 n8n response status:', n8nResponse.status);
            console.log('📨 n8n response body:', responseText);

            if (n8nResponse.ok) {
              console.log('✅ Application submitted successfully to n8n');
              // Clear localStorage after successful submission
              localStorage.removeItem('pendingApplication');
              console.log('🗑️ Cleared localStorage');
            } else {
              console.error('❌ n8n responded with error:', responseText);
            }
            
          } catch (error) {
            console.error('❌ Error sending data to n8n:', error);
            // Don't fail the payment flow - user already paid
          }
          
          // Redirect to thank you page
          console.log('🎉 Redirecting to thank you page');
          router.push(`/thank-you?ref=${applicationId}&payment=success`);
        },
        prefill: {
          name: "User",
          email: "user@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#047857",
        },
        modal: {
          ondismiss: function () {
            console.log('❌ Payment cancelled by user');
            setLoading(false);
            setError("Payment cancelled. Please try again.");
          },
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response: any) {
        console.error('❌ Payment failed:', response.error);
        setLoading(false);
        setError("Payment failed: " + response.error.description);
      });

      console.log('🚀 Opening Razorpay checkout');
      rzp.open();
    } catch (err) {
      console.error('❌ Payment error:', err);
      setError(err instanceof Error ? err.message : "Payment failed");
      setLoading(false);
    }
  };

  if (error && !applicationId) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card className="border-red-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <CardTitle>Payment Error</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-red-600">{error}</p>
            <Button onClick={() => router.back()} className="mt-4">
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Complete Payment</CardTitle>
          <CardDescription>Application ID: {applicationId}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <strong>{serviceName}</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Service Fee:</span>
              <span className="text-2xl font-bold text-green-600">₹{amount}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * Government fees will be paid separately through official portals
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
              {error}
            </div>
          )}

          {!razorpayLoaded && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700 flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading payment gateway...</span>
            </div>
          )}

          <Button
            onClick={handleRazorpayPayment}
            disabled={loading || !razorpayLoaded}
            className="w-full"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Wallet className="mr-2 h-5 w-5" />
                Pay ₹{amount} with Razorpay
              </>
            )}
          </Button>

          <p className="text-xs text-center text-gray-500">
            Secure payment powered by Razorpay
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function PaymentPage({
  searchParams,
}: {
  searchParams: Promise<{ applicationId?: string; serviceId?: string }>;
}) {
  return <PaymentContent searchParams={searchParams} />;
}