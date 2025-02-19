import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleAnalytics, usePageViews, event } from "nextjs-google-analytics";
import type { NextWebVitalsMetric } from "next/app";

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function MyApp({ Component, pageProps }: AppProps) {
  usePageViews();

  return (
    <>
      <GoogleAnalytics gaMeasurementId={"G-1BG86PJWQ4"} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
