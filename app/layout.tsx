import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Churn Email Forensics — Track which emails trigger cancellations",
  description: "Correlates email campaigns with subscription cancellations to identify churn-inducing messaging. Built for SaaS founders and growth teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8e0c7ec9-664e-4568-be8f-87dff6cbeae6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
