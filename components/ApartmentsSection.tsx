"use client";

import Link from "next/link";
import { apartments } from "@/lib/apartments";

export default function ApartmentsSection() {
  return (
    <section style={{ backgroundColor: "#111111", padding: "100px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "60px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p
              style={{
                color: "#c9a86c",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Our Properties
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: "#f0ece0",
                lineHeight: 1.2,
              }}
            >
              Our Apartments
            </h2>
          </div>
          <Link
            href="/apartments"
            className="btn-outline-gold"
            style={{ whiteSpace: "nowrap" }}
          >
            VIEW ALL
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {apartments.map((apt) => (
            <Link
              key={apt.slug}
              href={`/apartments/${apt.slug}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  overflow: "hidden",
                  backgroundColor: "#1c1c1c",
                  border: "1px solid rgba(201,168,108,0.1)",
                  transition: "border-color 0.3s ease, transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201,168,108,0.5)";
                  el.style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201,168,108,0.1)";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Image */}
                <div
                  style={{
                    height: "240px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={apt.image}
                    alt={apt.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.06)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: "28px 28px 32px" }}>
                  <p
                    style={{
                      color: "#c9a86c",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    {apt.area}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#f0ece0",
                      marginBottom: "10px",
                      lineHeight: 1.2,
                    }}
                  >
                    {apt.name}
                  </h3>
                  <p
                    style={{
                      color: "#888",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      marginBottom: "20px",
                    }}
                  >
                    {apt.tagline}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginBottom: "24px",
                      flexWrap: "wrap",
                    }}
                  >
                    {[
                      { label: apt.bedrooms, icon: "🛏" },
                      { label: `${apt.bathrooms} Bath`, icon: "🚿" },
                      { label: apt.size, icon: "📐" },
                    ].map((item) => (
                      <span
                        key={item.label}
                        style={{
                          fontSize: "0.72rem",
                          color: "#aaa",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {item.icon} {item.label}
                      </span>
                    ))}
                  </div>

                  <span
                    style={{
                      color: "#c9a86c",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    VIEW DETAILS
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
