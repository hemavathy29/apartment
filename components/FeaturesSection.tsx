"use client";

const features = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "WORTH",
    subtitle: "Emotional Interior Design",
    description:
      "Every room is curated to feel like a five-star hotel — from the selection of furniture to the placement of each item. We design spaces that inspire, comfort, and leave a lasting impression.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="1.5">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      </svg>
    ),
    title: "LOCATION",
    subtitle: "Prime City Addresses",
    description:
      "Our apartments are situated in Chennai's most sought-after neighbourhoods — S Kolathur, Kovilambakkam, Thoraipakkam OMR, and Nanganallur — offering seamless access to business hubs, transport, and the best the city has to offer.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "SUPPORT",
    subtitle: "Dedicated Guest Services",
    description:
      "Our responsive support team is available around the clock to assist with every need — from maintenance to personalised requests. We pride ourselves on fast response times and tailored solutions for every guest.",
  },
];

export default function FeaturesSection() {
  return (
    <section style={{ backgroundColor: "#f8f6f0", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <p
            style={{
              color: "#c9a86c",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Why Choose Us
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#111111",
              lineHeight: 1.2,
            }}
          >
            The Three Pillars of Excellence
          </h2>
        </div>

        <div className="grid-features">
          {features.map((feature, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#ffffff",
                padding: "56px 40px",
                borderBottom: "3px solid transparent",
                transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderBottomColor = "#c9a86c";
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderBottomColor = "transparent";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ marginBottom: "24px" }}>{feature.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#111111",
                  marginBottom: "6px",
                  letterSpacing: "0.04em",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: "#c9a86c",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {feature.subtitle}
              </p>
              <p style={{ color: "#666666", fontSize: "0.95rem", lineHeight: 1.8 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
