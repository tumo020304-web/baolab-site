export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section className="hero">

  <div className="hero-image">
    <img src="/images/hero.jpg" alt="Denza vehicle" />
    <div className="hero-overlay"></div>
  </div>

  <div className="hero-content container">
    <h1>
      Premium Accessories <br /> for Denza Owners
    </h1>

    <p>
      From daily essentials to overland builds,
      Baolab curates OEM-fit accessories engineered
      for modern electric mobility.
    </p>

    <div style={{ marginTop: 40 }}>
      <a className="primary-btn" href="/products">
        Explore Accessories
      </a>

      <a
        className="secondary-btn"
        href="/compatibility"
        style={{ marginLeft: 20 }}
      >
        View Compatibility
      </a>
    </div>
  </div>

</section>



      {/* THREE PILLARS */}
      <section className="section container">
        <div className="grid-3">

          <div className="pillar">
            <h3>Premium Essentials</h3>
            <p>
              Custom-fit floor mats, trim overlays, protection kits,
              and practical upgrades designed for everyday use.
            </p>
          </div>

          <div className="pillar">
            <h3>Expedition Accessories</h3>
            <p>
              Roof platforms, storage builds, camping integrations
              and road-trip equipment built for Australian terrain.
            </p>
          </div>

          <div className="pillar">
            <h3>Advanced Retrofits</h3>
            <p>
              China-spec integrations including dashcam systems,
              V2L upgrades, lighting and display enhancements.
            </p>
          </div>

        </div>
      </section>

      {/* USE CASE SECTION */}
      <section className="section container">
        <h2>Built for Every Driving Scenario</h2>

        <div className="grid-3" style={{ marginTop: 60 }}>

          <div className="card">
            <h3>Urban Daily</h3>
            <p>Protection, storage, and comfort upgrades.</p>
          </div>

          <div className="card">
            <h3>Weekend Roadtrip</h3>
            <p>Roof systems, lighting and modular storage.</p>
          </div>

          <div className="card">
            <h3>Full Overland Build</h3>
            <p>Recovery gear, camping systems and structural upgrades.</p>
          </div>

        </div>
      </section>


      <section className="section container">
  <h2>Why Baolab</h2>

  <div className="grid-3" style={{ marginTop: 50 }}>

    <div>
      <h3 style={{ marginBottom: 10 }}>Curated Quality</h3>
      <p style={{ color: "rgba(255,255,255,0.6)" }}>
        No low-grade marketplace products. Every accessory is
        selected for fit, durability and integration.
      </p>
    </div>

    <div>
      <h3 style={{ marginBottom: 10 }}>Model-Specific Fit</h3>
      <p style={{ color: "rgba(255,255,255,0.6)" }}>
        Designed specifically for Denza B5 & B8 platforms,
        not universal compromises.
      </p>
    </div>

    <div>
      <h3 style={{ marginBottom: 10 }}>Australian Focused</h3>
      <p style={{ color: "rgba(255,255,255,0.6)" }}>
        Built around Australian driving conditions,
        road trips and outdoor lifestyle.
      </p>
    </div>

  </div>
</section>


    </div>
  );
}
