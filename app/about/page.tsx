import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PropertyCard } from "@/components/PropertyCard";
import { apartments } from "@/lib/apartments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Apartment Service Chennai",
  description: "Learn about Apartment Service — our story, our mission, and our commitment to premium serviced living in Chennai.",
};

const stats = [
  { value: "4", label: "Prime Locations" },
  { value: "100+", label: "Happy Guests" },
  { value: "5★", label: "Service Standard" },
  { value: "24/7", label: "Guest Support" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          style={{
            position: "relative",
            height: "60vh",
            minHeight: "400px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))",
            }}
          />
          <div style={{ position: "relative", zIndex: 10, padding: "0 24px", paddingTop: "90px" }}>
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
              Our Story
            </p>
            <h1
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(2.2rem, 6vw, 4rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
              }}
            >
              About Apartment Service
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="section-pad" style={{ backgroundColor: "#ffffff" }}>
          <div className="container-sm grid-2col">
            <div>
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
                Who We Are
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#111",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                Chennai&apos;s Premier Serviced Apartment Provider
              </h2>
              <div style={{ width: "60px", height: "2px", backgroundColor: "#c9a86c", marginBottom: "28px" }} />
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.9, marginBottom: "20px" }}>
                Apartment Service was founded with a singular vision: to redefine what it means to live away from home. We
                believe that every guest deserves more than just a place to sleep — they deserve a space that feels curated,
                comfortable, and genuinely theirs.
              </p>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.9, marginBottom: "20px" }}>
                With four premium properties across Chennai&apos;s most vibrant neighbourhoods, we bring together
                exceptional design, unbeatable locations, and personalised service to create a living experience unlike
                any other.
              </p>
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.9 }}>
                Whether you&apos;re a corporate professional on an extended assignment, a family in transition, or simply
                someone who appreciates the finer things in life — Apartment Service is your home in Chennai.
              </p>
            </div>

            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80"
                alt="Premium apartment interior"
                style={{ width: "100%", height: "460px", objectFit: "cover" }}
              />
              <div
                className="story-badge"
                style={{
                  backgroundColor: "#c9a86c",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  4
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "8px",
                  }}
                >
                  Prime Locations
                  <br />
                  in Chennai
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-pad-sm" style={{ backgroundColor: "#111111" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div className="grid-stats">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: "#111",
                    padding: "48px 24px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "3rem",
                      fontWeight: 700,
                      color: "#c9a86c",
                      lineHeight: 1,
                      marginBottom: "12px",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      color: "#888",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Properties */}
        <section style={{ backgroundColor: "#f8f6f0", padding: "100px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
                Our Portfolio
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#111",
                }}
              >
                Four Exceptional Properties
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
              {apartments.map((apt) => (
                <PropertyCard key={apt.slug} apt={apt} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            backgroundColor: "#111111",
            padding: "80px 24px",
            textAlign: "center",
            borderTop: "1px solid rgba(201,168,108,0.15)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 700,
              color: "#f0ece0",
              marginBottom: "20px",
            }}
          >
            Ready to Experience Premium Living?
          </h2>
          <p style={{ color: "#888", fontSize: "1rem", marginBottom: "40px", maxWidth: "500px", margin: "0 auto 40px" }}>
            Browse our apartments and find your perfect Chennai home today.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/apartments" className="btn-gold">VIEW APARTMENTS</Link>
            <Link href="/contact" className="btn-outline-gold">CONTACT US</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
