"use client";

import { useMemo, useState } from "react";

type VehicleKey = "all" | "b5" | "b8" | "d9" | "z9gt" | "n7";
type CategoryKey = "all" | "premium" | "camping" | "retrofit";

type Product = {
  id: string;
  name: string;
  vehicle: VehicleKey[];
  category: Exclude<CategoryKey, "all">;
  image: string;
  note: string;
  status: "Available" | "Coming Soon" | "Pre-Order";
  href: string;
};

export default function ProductsPage() {
  const vehicles = [
    { key: "all" as VehicleKey, label: "All" },
    { key: "b5" as VehicleKey, label: "B5" },
    { key: "b8" as VehicleKey, label: "B8" },
    { key: "d9" as VehicleKey, label: "D9" },
    { key: "z9gt" as VehicleKey, label: "Z9 GT" },
    { key: "n7" as VehicleKey, label: "N7" },
  ];

  const categories = [
    { key: "all" as CategoryKey, label: "All" },
    { key: "premium" as CategoryKey, label: "Premium Accessories" },
    { key: "camping" as CategoryKey, label: "Travel & Camping" },
    { key: "retrofit" as CategoryKey, label: "Retrofits" },
  ];

  const products: Product[] = useMemo(
    () => [
      {
        id: "b5-floor-mats",
        name: "Custom Floor Mats",
        vehicle: ["b5"],
        category: "premium",
        image: "/images/products/floor-mats.jpg",
        note: "Tailored fit for daily protection and easy cleaning.",
        status: "Available",
        href: "https://shop.baolab.au",
      },
      {
        id: "b5-trim-overlay",
        name: "Interior Trim Overlay Kit",
        vehicle: ["b5", "b8"],
        category: "premium",
        image: "/images/products/trim-overlay.jpg",
        note: "Reduce glossy piano black surfaces with a cleaner finish.",
        status: "Coming Soon",
        href: "https://shop.baolab.au",
      },
      {
        id: "roof-platform",
        name: "Custom Roof Platform",
        vehicle: ["b5", "b8"],
        category: "camping",
        image: "/images/products/roof-platform.jpg",
        note: "Vehicle-specific platform designed for travel and reduced wind noise.",
        status: "Coming Soon",
        href: "https://shop.baolab.au",
      },
      {
        id: "camping-mattress",
        name: "Camping Mattress",
        vehicle: ["b5", "b8", "d9"],
        category: "camping",
        image: "/images/products/camping-mattress.jpg",
        note: "Foldable in-car sleeping setup for road trips and overnight stops.",
        status: "Pre-Order",
        href: "https://shop.baolab.au",
      },
      {
        id: "dashcam-retrofit",
        name: "Dashcam Retrofit",
        vehicle: ["b5", "b8"],
        category: "retrofit",
        image: "/images/products/dashcam-retrofit.jpg",
        note: "Selected China-spec functionality restored through model-specific retrofits.",
        status: "Coming Soon",
        href: "https://shop.baolab.au",
      },
      {
        id: "internal-v2l",
        name: "Internal 220V V2L Socket",
        vehicle: ["b5", "b8"],
        category: "retrofit",
        image: "/images/products/v2l.jpg",
        note: "Advanced retrofit for selected supported models.",
        status: "Coming Soon",
        href: "https://shop.baolab.au",
      },
      {
        id: "d9-storage",
        name: "Boot Storage System",
        vehicle: ["d9", "b5", "b8"],
        category: "camping",
        image: "/images/products/storage.jpg",
        note: "Modular storage for cleaner packing and easier access.",
        status: "Pre-Order",
        href: "https://shop.baolab.au",
      },
      {
        id: "screen-protection",
        name: "Screen Protection Kit",
        vehicle: ["b5", "b8", "d9", "z9gt", "n7"],
        category: "premium",
        image: "/images/products/screen-protection.jpg",
        note: "Clean fit screen protection for daily use.",
        status: "Available",
        href: "https://shop.baolab.au",
      },
    ],
    []
  );

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleKey>("all");
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");

  const filteredProducts = products.filter((product) => {
    const vehicleMatch =
      selectedVehicle === "all" || product.vehicle.includes(selectedVehicle);

    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;

    return vehicleMatch && categoryMatch;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BaoLab Denza Accessories",
    description: "Premium aftermarket accessories for Denza B5, B8, D9, Z9 GT, and N7",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.note,
        url: p.href,
        brand: { "@type": "Brand", name: "BaoLab" },
        category: p.category,
      },
    })),
  };

  return (
    <div className="products-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section container">
        <div className="section-head">
          <h1 className="products-title">Accessories</h1>
          <p>
            Browse premium accessories, travel gear and selected retrofits
            curated for Denza owners in Australia.
          </p>
        </div>

        <div className="filter-block">
          <div className="filter-group">
            <div className="filter-label">Vehicle</div>
            <div className="filter-row">
              {vehicles.map((vehicle) => (
                <button
                  key={vehicle.key}
                  className={`filter-chip ${
                    selectedVehicle === vehicle.key ? "active" : ""
                  }`}
                  onClick={() => setSelectedVehicle(vehicle.key)}
                  type="button"
                >
                  {vehicle.label}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <div className="filter-label">Category</div>
            <div className="filter-row">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className={`filter-chip ${
                    selectedCategory === category.key ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category.key)}
                  type="button"
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <a
              key={product.id}
              className="product-card"
              href={product.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="product-image-wrap">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />
                <div className={`product-status status-${product.status.toLowerCase().replace(" ", "-")}`}>
                  {product.status}
                </div>
              </div>

              <div className="product-body">
                <h3>{product.name}</h3>
                <p>{product.note}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}