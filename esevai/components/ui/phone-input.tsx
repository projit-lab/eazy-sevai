"use client";

import * as React from "react";
import { Input } from "./input";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange"> {
  value?: string;
  onValueChange?: (value: string) => void;
  onVerify?: (phone: string, otp: string) => Promise<boolean>;
  showVerification?: boolean;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, value, onValueChange, onVerify, showVerification = true, ...props }, ref) => {
    const [phone, setPhone] = React.useState(value || "");
    const [otp, setOtp] = React.useState("");
    const [isOtpSent, setIsOtpSent] = React.useState(false);
    const [isVerified, setIsVerified] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/\D/g, "").slice(0, 10);
      setPhone(newValue);
      onValueChange?.(newValue);
      setIsOtpSent(false);
      setIsVerified(false);
      setError("");
    };

    const handleSendOtp = async () => {
      if (phone.length !== 10) {
        setError("Please enter a valid 10-digit mobile number");
        return;
      }

      setIsLoading(true);
      setError("");

      try {
        // Simulate OTP sending (replace with actual API call)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsOtpSent(true);
      } catch (err) {
        setError("Failed to send OTP. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    const handleVerifyOtp = async () => {
      if (otp.length !== 6) {
        setError("Please enter a valid 6-digit OTP");
        return;
      }

      setIsLoading(true);
      setError("");

      try {
        const verified = onVerify ? await onVerify(phone, otp) : true;
        if (verified) {
          setIsVerified(true);
        } else {
          setError("Invalid OTP. Please try again.");
        }
      } catch (err) {
        setError("Verification failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="space-y-3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              +91
            </span>
            <Input
              ref={ref}
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className={cn("pl-12", className)}
              placeholder="Mobile Number"
              disabled={isVerified || isLoading}
              {...props}
            />
          </div>
          {showVerification && !isVerified && (
            <Button
              type="button"
              onClick={handleSendOtp}
              disabled={phone.length !== 10 || isOtpSent || isLoading}
              variant="outline"
            >
              {isLoading ? "Sending..." : isOtpSent ? "Resend OTP" : "Send OTP"}
            </Button>
          )}
        </div>

        {showVerification && isOtpSent && !isVerified && (
          <div className="flex gap-2">
            <Input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              disabled={isLoading}
            />
            <Button
              type="button"
              onClick={handleVerifyOtp}
              disabled={otp.length !== 6 || isLoading}
            >
              {isLoading ? "Verifying..." : "Verify"}
            </Button>
          </div>
        )}

        {isVerified && (
          <p className="text-sm text-green-600">✓ Phone number verified</p>
        )}

        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };


