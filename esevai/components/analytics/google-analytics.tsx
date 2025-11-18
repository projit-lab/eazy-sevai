"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { ANALYTICS_IDS } from "@/lib/constants";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (ANALYTICS_IDS.ga4 && typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", ANALYTICS_IDS.ga4, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
      });
    }
  }, [pathname, searchParams]);

  if (!ANALYTICS_IDS.ga4) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_IDS.ga4}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_IDS.ga4}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Helper functions for event tracking
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag && ANALYTICS_IDS.ga4) {
    (window as any).gtag("config", ANALYTICS_IDS.ga4, {
      page_path: url,
    });
  }
};

// Common event tracking helpers
export const trackServiceView = (serviceId: string, serviceName: string) => {
  trackEvent("view_service", {
    service_id: serviceId,
    service_name: serviceName,
  });
};

export const trackFormStart = (serviceId: string) => {
  trackEvent("begin_application", {
    service_id: serviceId,
  });
};

export const trackFormSubmit = (serviceId: string, applicationId: string) => {
  trackEvent("submit_application", {
    service_id: serviceId,
    application_id: applicationId,
  });
};

export const trackPaymentInitiate = (
  serviceId: string,
  amount: number,
  applicationId: string
) => {
  trackEvent("begin_checkout", {
    service_id: serviceId,
    value: amount,
    currency: "INR",
    application_id: applicationId,
  });
};

export const trackPaymentSuccess = (
  serviceId: string,
  amount: number,
  applicationId: string,
  transactionId: string
) => {
  trackEvent("purchase", {
    transaction_id: transactionId,
    value: amount,
    currency: "INR",
    service_id: serviceId,
    application_id: applicationId,
  });
};

export const trackInquiry = (subject: string) => {
  trackEvent("contact_inquiry", {
    inquiry_type: subject,
  });
};


