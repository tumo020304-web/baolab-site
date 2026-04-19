import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping — BaoLab",
  description:
    "Shipping information for BaoLab — premium Denza & BYD accessories delivered Australia-wide.",
};

export default function Shipping() {
  return (
    <section className="section">
      <div className="container">
        <h1>Shipping</h1>
        <p style={{ color: "rgba(255,255,255,0.5)", marginTop: 8 }}>
          Premium accessories, delivered to your door.
        </p>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>Delivery</h2>
          <table>
            <tbody>
              <tr><td>Shipping coverage</td><td>Australia-wide</td></tr>
              <tr><td>Processing time</td><td>1–2 business days</td></tr>
              <tr><td>Delivery time</td><td>5–7 business days</td></tr>
              <tr><td>Free shipping</td><td>Orders over $99</td></tr>
              <tr><td>Tracking</td><td>Provided on all orders</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>How It Works</h2>
          <ol style={{ color: "rgba(255,255,255,0.7)", lineHeight: 2, paddingLeft: 20 }}>
            <li>Place your order on <a href="https://shop.baolab.au">shop.baolab.au</a></li>
            <li>We process and dispatch within 1–2 business days</li>
            <li>You receive a tracking number via email</li>
            <li>Your accessories arrive within 5–7 business days</li>
          </ol>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>Important Notes</h2>
          <ul style={{ color: "rgba(255,255,255,0.7)", lineHeight: 2, paddingLeft: 20 }}>
            <li>Delivery times are estimates and may vary during peak periods</li>
            <li>A signature may be required for high-value orders</li>
            <li>We currently ship within Australia only — international shipping coming soon</li>
            <li>Remote or regional areas may take an additional 2–3 business days</li>
          </ul>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>Returns & Exchanges</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
            We want you to be completely satisfied with your purchase. If a product doesn&apos;t fit
            or meet your expectations, contact us within 30 days of delivery. Items must be unused,
            in original packaging, and in resalable condition. Return shipping costs are the
            responsibility of the buyer unless the item is faulty or incorrect.
          </p>
        </div>

        <div style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 20, marginBottom: 16 }}>Need Help?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
            For delivery questions, returns, or order tracking, email us at{" "}
            <a href="mailto:hello@baolab.au">hello@baolab.au</a> — we respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
