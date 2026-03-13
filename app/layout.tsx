import "./globals.css";
import type { Metadata } from "next";
import Header from "./Header";

export const metadata: Metadata = {
  title: "BAOLAB - Denza B5 & B8 Accessories",
  description:
    "Premium retrofit-ready accessories for Denza B5 and B8 in Australia.",
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