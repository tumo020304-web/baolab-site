"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="container nav">
        <a href="/" className="logo">
          BAOLAB
        </a>

        <nav className="main-nav">
          <a href="https://shop.baolab.au">Products</a>
          <a href="/compatibility">Compatibility</a>
          <a href="/shipping">Shipping</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}