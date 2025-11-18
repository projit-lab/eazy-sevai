"use client";

import { GoogleAnalytics } from "./google-analytics";
import { MetaPixel } from "./meta-pixel";

export function AnalyticsProvider() {
  return (
    <>
      <GoogleAnalytics />
      <MetaPixel />
    </>
  );
}


