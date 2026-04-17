import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";

export const metadata: Metadata = {
  title: "BaoLab — Premium Denza Accessories Australia",
  description:
    "Premium aftermarket accessories for Denza B5, B8, D9, Z9 GT, and N7. Quality tested, shipped from China. Free shipping over $99.",
  metadataBase: new URL("https://baolab.au"),
  openGraph: {
    title: "BaoLab — Premium Denza Accessories Australia",
    description:
      "Premium aftermarket accessories for Denza B5, B8, D9, Z9 GT, and N7.",
    url: "https://baolab.au",
    siteName: "BaoLab",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-brand">
              <div className="logo">BAOLAB</div>
              <p className="footer-desc">
                Premium accessories designed for Denza owners across Australia.
              </p>
            </div>

            <div className="footer-disclaimer">
              <p>
                Baolab is an independent aftermarket accessories retailer and is
                not affiliated with, endorsed by, or associated with Denza, BYD,
                or any of their subsidiaries. All trademarks and vehicle names
                are the property of their respective owners and are used for
                compatibility reference only.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}