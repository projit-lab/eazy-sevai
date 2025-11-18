"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { ANALYTICS_IDS } from "@/lib/constants";

export function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (ANALYTICS_IDS.metaPixel && typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  if (!ANALYTICS_IDS.metaPixel) {
    return null;
  }

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${ANALYTICS_IDS.metaPixel}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${ANALYTICS_IDS.metaPixel}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

// Helper functions for Meta Pixel event tracking
export const trackMetaEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", eventName, eventParams);
  }
};

// Common Meta Pixel event tracking helpers
export const trackMetaViewContent = (
  contentName: string,
  contentCategory: string,
  value?: number
) => {
  trackMetaEvent("ViewContent", {
    content_name: contentName,
    content_category: contentCategory,
    value: value,
    currency: "INR",
  });
};

export const trackMetaLead = (serviceId: string) => {
  trackMetaEvent("Lead", {
    content_name: serviceId,
    content_category: "service_application",
  });
};

export const trackMetaInitiateCheckout = (
  serviceId: string,
  value: number
) => {
  trackMetaEvent("InitiateCheckout", {
    content_name: serviceId,
    value: value,
    currency: "INR",
  });
};

export const trackMetaPurchase = (
  serviceId: string,
  value: number,
  transactionId: string
) => {
  trackMetaEvent("Purchase", {
    content_name: serviceId,
    value: value,
    currency: "INR",
    transaction_id: transactionId,
  });
};

export const trackMetaContact = () => {
  trackMetaEvent("Contact", {
    content_category: "inquiry",
  });
};

export const trackMetaSearch = (searchQuery: string) => {
  trackMetaEvent("Search", {
    search_string: searchQuery,
  });
};


