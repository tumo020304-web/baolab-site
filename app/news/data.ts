export interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  related?: { slug: string; title: string }[];
  content: string; // HTML
}

export const articles: Article[] = [
  {
    slug: "z9gt-melbourne-debut",
    title:
      "Denza Z9 GT Debuts at the 2026 Melbourne Motor Show — 850kW, 0–100 in 2.7s",
    date: "2026-04-09",
    category: "Launch",
    excerpt:
      "BYD's luxury division confirms the all-electric Z9 GT grand tourer for Australia, with deliveries expected Q3 2026. The first Denza to feature Blade Battery 2.0 and Flash Ultra Charging.",
    related: [
      { slug: "flash-charge-blade-battery", title: "Flash Ultra Charging & Blade Battery 2.0" },
      { slug: "denza-b5-b8-launch", title: "Denza B5 & B8: The Brand Arrives in Australia" },
    ],
    content: `
<p>The Denza Z9 GT made its Australian debut at the 2026 Melbourne International Motor Show, and it's nothing short of a statement. BYD's premium sub-brand is aiming squarely at the Porsche Taycan with an all-electric grand tourer that produces a staggering <strong>850kW</strong> from three electric motors and sprints from 0–100 km/h in just <strong>2.7 seconds</strong>.</p>

<h2>What is the Z9 GT?</h2>
<p>The Z9 GT is a luxury electric shooting brake — think of it as a sleek wagon meets supercar. It's built on BYD's e-Platform 3.0 Evo architecture and is the first Denza model to use the company's next-generation <strong>Blade Battery 2.0</strong> with Flash Ultra Charging capability.</p>

<p>Denza Australia Chief Operating Officer Mark Harland said at the reveal: <em>"Australia is a market that demands performance without compromise, and the Z9 GT has been engineered to meet or exceed expectations. It proves that electrification can deliver not just efficiency, but exhilarating performance, extraordinary safety and genuine long-distance usability."</em></p>

<h2>Powertrain & Performance</h2>
<p>The Z9 GT uses a tri-motor setup — one motor on the front axle and two on the rear — producing a combined 850kW. This gives it a claimed 0–100 km/h time of 2.7 seconds, which puts it in serious supercar territory. For context, the Porsche Taycan Turbo S does 0–100 in 2.8 seconds.</p>

<table>
<tr><th>Spec</th><th>Denza Z9 GT</th></tr>
<tr><td>Motor layout</td><td>Tri-motor (1 front, 2 rear)</td></tr>
<tr><td>System output</td><td>850kW</td></tr>
<tr><td>0–100 km/h</td><td>2.7 seconds</td></tr>
<tr><td>Battery</td><td>122.5kWh Blade Battery 2.0</td></tr>
<tr><td>Range (CLTC)</td><td>1,036 km</td></tr>
<tr><td>DC fast charge</td><td>10–97% in 9 minutes (1500kW)</td></tr>
<tr><td>Suspension</td><td>Air suspension</td></tr>
<tr><td>Price (expected)</td><td>Under $181,000 (vs Porsche Taycan)</td></tr>
</table>

<h2>Range & Charging</h2>
<p>The Z9 GT will ship with the large 122.5kWh battery, giving it a CLTC-rated range of <strong>1,036 km</strong>. Real-world range should be around 800+ km — still exceptional for an electric vehicle.</p>

<p>But the headline feature is <strong>Flash Ultra Charging</strong>. Using Blade Battery 2.0 technology, the Z9 GT supports up to 1500kW DC charging — nearly four times Australia's current fastest public charger (400kW). Denza claims a 10–97% charge in just <strong>nine minutes</strong>. That's shorter than a typical petrol fill-up when you factor in queueing at the servo.</p>

<p><em>Read more: <a href="/news/flash-charge-blade-battery">Flash Ultra Charging & Blade Battery 2.0 — What It Means for Australia</a></em></p>

<h2>Interior & Technology</h2>
<p>Inside, the Z9 GT is packed with luxury features:</p>
<ul>
<li>Nappa leather upholstery with massaging and ventilated seats</li>
<li>50-inch augmented reality head-up display</li>
<li>Premium sound system</li>
<li>Built-in fridge</li>
<li>128-colour ambient lighting</li>
<li>Air suspension for a plush, wafting ride</li>
</ul>

<h2>When Can You Get One?</h2>
<p>Denza has confirmed Australian deliveries will commence in <strong>Q3 2026</strong> (July–September). Pricing hasn't been announced yet, but it's expected to significantly undercut the Porsche Taycan's $181,000 starting price while offering more power, more range, and faster charging.</p>

<p>The Z9 GT will be the fourth Denza model in Australia, following the B5, B8, and D9. It's also the brand's first fully electric vehicle for the local market.</p>

<p><em>Read more: <a href="/news/denza-b5-b8-launch">Denza B5 & B8: How the Brand Arrived in Australia</a></em></p>
`,
  },
  {
    slug: "flash-charge-blade-battery",
    title:
      "Flash Ultra Charging & Blade Battery 2.0 — What It Means for Australia",
    date: "2026-04-10",
    category: "Technology",
    excerpt:
      "BYD's next-gen Blade Battery 2.0 supports 1500kW DC charging — nearly four times Australia's fastest public chargers. The Z9 GT will be the first model to feature it locally.",
    related: [
      { slug: "z9gt-melbourne-debut", title: "Denza Z9 GT Debuts at Melbourne Motor Show" },
      { slug: "denza-b5-b8-launch", title: "Denza B5 & B8: The Brand Arrives in Australia" },
    ],
    content: `
<p>When Denza revealed the Z9 GT at the 2026 Melbourne Motor Show, the car's 850kW output and 2.7-second 0–100 time grabbed the headlines. But underneath all that performance is an even bigger story: <strong>Blade Battery 2.0</strong> and <strong>Flash Ultra Charging</strong>.</p>

<h2>What is Blade Battery 2.0?</h2>
<p>BYD's original Blade Battery, introduced in 2020, was already a game-changer. It used lithium iron phosphate (LFP) chemistry arranged in long, thin cells — like blades — that could pass a nail penetration test without catching fire. This made it one of the safest EV battery designs on the market.</p>

<p>Blade Battery 2.0 builds on that foundation with significant improvements:</p>
<ul>
<li><strong>Higher energy density</strong> — more range per kilogram of battery</li>
<li><strong>Faster charging speeds</strong> — up to 1500kW DC, compared to ~150kW for the original</li>
<li><strong>Improved thermal management</strong> — better heat dissipation during fast charging</li>
<li><strong>Longer cycle life</strong> — designed to last beyond 4,000 charge cycles</li>
</ul>

<h2>Flash Ultra Charging: 10–97% in 9 Minutes</h2>
<p>The headline number is almost unbelievable: <strong>10% to 97% in nine minutes</strong>. To put that in perspective:</p>

<table>
<tr><th>Charger type</th><th>Max speed</th><th>Time for ~87% charge</th></tr>
<tr><td>Standard home AC</td><td>7–11kW</td><td>8–12 hours</td></tr>
<tr><td>Current fast DC (Australia)</td><td>50–350kW</td><td>30–60 minutes</td></tr>
<tr><td>Flash Ultra Charging</td><td>1500kW</td><td>~9 minutes</td></tr>
</table>

<p>Nine minutes. That's less time than it takes to order and collect a flat white at your local café.</p>

<h2>But Can Australia Even Support This?</h2>
<p>Here's the catch — Australia's current fastest public chargers top out at around <strong>350–400kW</strong>. So you won't be getting 1500kW charging at your local servo any time soon. However, the Z9 GT's battery is backward compatible with all existing CCS2 chargers. You'll just charge at whatever speed the charger supports.</p>

<p>The good news: charging infrastructure in Australia is rapidly expanding. The federal government's National Electric Vehicle Strategy includes funding for ultra-fast charging corridors along major highways. And companies like Chargefox, Evie Networks, and Tesla are all rolling out faster chargers.</p>

<p>Even at 350kW, the Z9 GT's 122.5kWh battery would charge from 10–80% in roughly 20–25 minutes — still faster than most EVs on sale today.</p>

<h2>Why This Matters</h2>
<p>Range anxiety and charging time are the two biggest barriers to EV adoption in Australia. Blade Battery 2.0 and Flash Ultra Charging address both head-on. With 1000+ km of range and the ability to top up in under 10 minutes (when infrastructure catches up), the Z9 GT removes almost every excuse for not going electric.</p>

<p>The Z9 GT will be the first Denza in Australia to feature this technology. Expect it to trickle down to future BYD and Denza models over the next 12–24 months.</p>

<p><em>Read more: <a href="/news/z9gt-melbourne-debut">Denza Z9 GT Debuts at Melbourne Motor Show</a></em></p>
`,
  },
  {
    slug: "denza-b5-b8-launch",
    title:
      "Denza B5 & B8: How BYD's Luxury Brand Arrived in Australia",
    date: "2026-02-15",
    category: "Launch",
    excerpt:
      "Denza launched in Australia with two rugged plug-in hybrid SUVs — the B5 and B8. Featuring DiSus-P adjustable suspension, DMO 4×4 architecture, and serious off-road credentials, they're unlike anything else in the market.",
    related: [
      { slug: "z9gt-melbourne-debut", title: "Denza Z9 GT Confirmed for Australia" },
      { slug: "denza-d9-electric-mpv", title: "Denza D9: The Electric People Mover" },
    ],
    content: `
<p>In early 2026, BYD officially launched its premium sub-brand <strong>Denza</strong> in Australia with two models that nobody expected: not sleek city EVs, but rugged, body-on-frame plug-in hybrid 4×4 SUVs. The <strong>Denza B5</strong> and <strong>B8</strong> arrived as direct challengers to the Toyota LandCruiser, Nissan Patrol, and Jeep Wrangler — but with a high-tech electrified twist.</p>

<h2>What is Denza?</h2>
<p>Denza (腾势) is BYD's premium brand, positioned above BYD's mainstream models. Think of it like Lexus is to Toyota, or Genesis is to Hyundai. While BYD focuses on accessible electric vehicles, Denza targets the luxury and performance segments.</p>

<p>The brand launched in China in 2010 as a joint venture with Mercedes-Benz (then Daimler). BYD took full control in 2024 and has since turned it into one of China's fastest-growing premium brands, selling over 126,000 vehicles in China in 2025.</p>

<h2>The Denza B8: Flagship Off-Roader</h2>
<p>The B8 is the bigger, more capable of the two. It's a full-size body-on-frame SUV with serious off-road hardware:</p>

<table>
<tr><th>Spec</th><th>Denza B8</th></tr>
<tr><td>Engine</td><td>2.0L turbo-petrol 4-cylinder</td></tr>
<tr><td>Engine output</td><td>145kW / 350Nm</td></tr>
<tr><td>Front motor</td><td>200kW / 360Nm</td></tr>
<tr><td>Rear motor</td><td>300kW / 400Nm</td></tr>
<tr><td>System output</td><td>425kW / 760Nm</td></tr>
<tr><td>Battery</td><td>36.8kWh LFP (Blade Battery)</td></tr>
<tr><td>Electric range</td><td>100–115km</td></tr>
<tr><td>0–100 km/h</td><td>4.8 seconds</td></tr>
<tr><td>Fuel economy</td><td>2.0L/100km (charged)</td></tr>
<tr><td>Towing</td><td>3,500kg braked</td></tr>
<tr><td>Wading depth</td><td>890mm</td></tr>
<tr><td>Ground clearance</td><td>310mm</td></tr>
<tr><td>Seats</td><td>6 or 7</td></tr>
<tr><td>Price</td><td>$91,000 – $97,990 +ORC</td></tr>
</table>

<h3>DiSus-P: The Secret Weapon</h3>
<p>One of the B8's standout features is <strong>DiSus-P</strong> (Dual Intelligent Suspension System — Predictive). This is BYD's proprietary adjustable hydraulic suspension system that gives the B8 abilities that rival vehicles costing twice the price:</p>
<ul>
<li><strong>Adjustable ride height</strong> — raise for off-road clearance (up to 310mm), lower for highway efficiency</li>
<li><strong>Variable damping stiffness</strong> — soft for comfort, firm for sporty driving or towing</li>
<li><strong>Active body control</strong> — reduces body roll in corners and nose dive under braking</li>
<li><strong>Water wading mode</strong> — raises the body to its maximum height for deep water crossings (890mm wading depth)</li>
</ul>
<p>DiSus-P uses hydraulic cylinders at each corner of the vehicle, controlled by sensors that read the road surface 500 times per second. It can individually adjust each wheel's damping in real time, giving the B8 a ride quality that belies its body-on-frame construction.</p>

<h3>DMO: Dual Motor Off-road</h3>
<p>The B8 uses BYD's <strong>DMO (Dual Motor Off-road)</strong> platform — a purpose-built architecture for rugged plug-in hybrid 4×4 vehicles. Unlike a traditional 4WD with a transfer case and driveshafts, DMO uses electric motors for each axle:</p>
<ul>
<li>200kW front motor drives the front axle</li>
<li>300kW rear motor drives the rear axle</li>
<li>The 2.0L turbo engine acts as a range extender and can also directly power the wheels at highway speeds</li>
<li>Rear mechanical differential lock (electrically actuated) is standard</li>
<li>Front locking differential is available on the 6-seat variant</li>
</ul>

<h3>Terrain Modes</h3>
<p>The B8 offers an extensive suite of drive and terrain modes:</p>
<ul>
<li><strong>On-road:</strong> Comfort, Eco, Sport</li>
<li><strong>Off-road:</strong> Rock, Snow, Sand, Mountain, Mud, Wading</li>
<li><strong>Special:</strong> Racing, Creep, Leopard Turn (tight turning), Towing, Anti-Skid</li>
</ul>

<h3>Interior & Practicality</h3>
<p>The B8 is available as a 6-seater ($97,990) or 7-seater ($91,000). Both feature:</p>
<ul>
<li>Nappa leather seats with heating, ventilation, and massage</li>
<li>15.6-inch rotating touchscreen (portrait/landscape)</li>
<li>Head-up display</li>
<li>Vehicle-to-Load (V2L) — power appliances from the car</li>
<li>Soft-close doors</li>
<li>Full-size spare tyre</li>
<li>3,500kg braked towing capacity</li>
<li>5-star ANCAP safety rating</li>
</ul>

<h2>The Denza B5: Compact Adventure SUV</h2>
<p>The B5 is the smaller, more affordable sibling. It shares the same DMO platform and DiSus-P suspension but in a more compact, lifestyle-oriented package aimed at younger buyers and outdoor enthusiasts.</p>

<p>While the B8 competes with LandCruiser and Patrol, the B5 targets vehicles like the Toyota Fortuner, Isuzu MU-X, and Jeep Wrangler — but with plug-in hybrid efficiency and significantly more power.</p>

<h2>What This Means for Australia</h2>
<p>The B5 and B8 represent something genuinely new in the Australian market: body-on-frame 4×4 SUVs that can also be daily commuters on pure electric power. With 100–115km of electric range, most Australian daily commutes can be done without using a drop of petrol. But when you want to go off-road or tow a caravan, the petrol engine and electric motors provide serious combined grunt.</p>

<p>The 5-star ANCAP rating for the B8 was also a significant milestone, addressing one of the common concerns about Chinese-brand vehicles in Australia.</p>

<p><em>Read more: <a href="/news/z9gt-melbourne-debut">Denza Z9 GT Confirmed for Australia</a></em></p>
`,
  },
  {
    slug: "denza-d9-electric-mpv",
    title:
      "Denza D9: The Luxury Electric People Mover Coming to Australia",
    date: "2026-03-20",
    category: "Launch",
    excerpt:
      "The Denza D9 is a premium electric people mover that competes with the Kia Carnival and Volkswagen Multivan — but with electric power, six captain's chairs, and luxury car refinement.",
    related: [
      { slug: "denza-b5-b8-launch", title: "Denza B5 & B8: The Brand Arrives in Australia" },
      { slug: "z9gt-melbourne-debut", title: "Denza Z9 GT Confirmed for Australia" },
    ],
    content: `
<p>While the B5 and B8 grabbed attention as rugged off-roaders, Denza's third Australian model targets a very different buyer: the <strong>Denza D9</strong> is a luxury electric people mover designed to replace the traditional family van with something far more refined.</p>

<h2>What is the D9?</h2>
<p>The D9 is a large, all-electric MPV (multi-purpose vehicle) that seats up to seven passengers. In China, it's been a massive hit — outselling the Toyota Alphard and becoming the best-selling premium MPV in the country. Now it's heading to Australia.</p>

<p>Think of it as a Kia Carnival or Volkswagen Multivan, but with the refinement of a Mercedes S-Class and the powertrain of an electric car.</p>

<h2>Design & Comfort</h2>
<p>The D9 is built for passengers, not drivers (though the driver's seat is plenty comfortable too). The key selling point is the second row:</p>
<ul>
<li>Two individual captain's chairs with electric adjustment</li>
<li>Heating, ventilation, and full massage function</li>
<li>Extendable leg rests (airline-style)</li>
<li>Individual entertainment screens</li>
<li>Retractable tables</li>
<li>Privacy curtains</li>
</ul>

<p>The third row isn't an afterthought either — it offers genuine adult-sized legroom, unlike most SUVs where the third row is only suitable for children.</p>

<h2>Powertrain</h2>
<p>The D9 for Australia is expected to feature:</p>
<table>
<tr><th>Spec</th><th>Denza D9</th></tr>
<tr><td>Platform</td><td>e-Platform 3.0</td></tr>
<tr><td>Battery</td><td>103kWh LFP (Blade Battery)</td></tr>
<tr><td>Range</td><td>600+ km (CLTC)</td></tr>
<tr><td>Drive</td><td>Front-wheel drive / AWD variants</td></tr>
<tr><td>Charging</td><td>DC fast charging supported</td></tr>
</table>

<h2>Who is it For?</h2>
<p>The D9 targets families who want space and luxury without the fuel bills of a V6 people mover. It's also ideal for:</p>
<ul>
<li><strong>Executive transport</strong> — airport transfers, corporate shuttles</li>
<li><strong>Rideshare/luxury hire</strong> — premium passenger experience</li>
<li><strong>Large families</strong> — genuine 7-seat comfort with electric efficiency</li>
<li><strong>Accessibility</strong> — flat floor, wide sliding doors, low step-in height</li>
</ul>

<h2>The Australian MPV Market</h2>
<p>Australia's people mover market has been dominated by the Kia Carnival for years, with the Volkswagen Multivan and Hyundai Staria offering alternatives. The D9 brings something none of them offer: full electric power combined with luxury-car levels of refinement.</p>

<p>Pricing hasn't been confirmed yet, but given the B8 tops out at $97,990, expect the D9 to sit in a similar bracket. That would make it competitive with a loaded Kia Carnival Hybrid or entry-level Volkswagen Multivan — but with significantly more technology and a fully electric driving experience.</p>

<p>The D9 is Denza's third model in Australia and demonstrates the brand's intent to cover multiple segments, from rugged off-roaders to luxury family transport.</p>

<p><em>Read more: <a href="/news/denza-b5-b8-launch">Denza B5 & B8: How the Brand Arrived in Australia</a></em></p>
`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
