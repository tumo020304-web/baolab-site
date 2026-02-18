import "./globals.css";
import type { Metadata } from "next";

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
        <header className="header">
          <div className="container nav">
            <div className="logo">BAOLAB</div>
            <nav>
              <a href="/">Home</a>
              <a href="/products">Products</a>
              <a href="/compatibility">Compatibility</a>
              <a href="/shipping">Shipping</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container">
            © {new Date().getFullYear()} BAOLAB · Australia
          </div>
        </footer>
      </body>
    </html>
  );
}
