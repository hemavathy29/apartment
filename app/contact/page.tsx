import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { apartments } from "@/lib/apartments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Apartment Service Chennai",
  description: "Get in touch with Apartment Service for room inquiries, availability, and bookings across our Chennai properties.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section
          className="page-header"
          style={{ backgroundColor: "#111111", borderBottom: "1px solid rgba(201,168,108,0.15)" }}
        >
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
            We&apos;d Love to Hear From You
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#f0ece0",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Contact Us
          </h1>
          <p style={{ color: "#777", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            Reach out to inquire about availability, pricing, or anything else. Our team responds promptly.
          </p>
        </section>

        {/* Quick Contact Bar */}
        <section style={{ backgroundColor: "#1c1c1c", padding: "28px 24px" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div className="quick-contact-bar">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                ),
                label: "+91 98416 47575",
                sub: "+91 78459 94384",
                href: "tel:9841647575",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "info@theleisures.in",
                sub: "We reply within 24 hours",
                href: "mailto:info@theleisures.in",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(201,168,108,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: "#d0c8b8", fontSize: "0.9rem", fontWeight: 600 }}>{item.label}</div>
                  <div style={{ color: "#666", fontSize: "0.78rem" }}>{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <ContactSection />

        {/* Locations */}
        <section style={{ backgroundColor: "#111111", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "56px" }}>
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
                Find Us
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#f0ece0",
                }}
              >
                Our Locations
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "2px",
                backgroundColor: "rgba(201,168,108,0.1)",
              }}
            >
              {apartments.map((apt) => (
                <div key={apt.slug} style={{ backgroundColor: "#1c1c1c", padding: "36px 28px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid rgba(201,168,108,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#f0ece0",
                      marginBottom: "8px",
                    }}
                  >
                    {apt.name}
                  </h3>
                  <p style={{ color: "#c9a86c", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "12px" }}>
                    {apt.area}, Chennai
                  </p>
                  <p style={{ color: "#777", fontSize: "0.85rem", lineHeight: 1.6 }}>{apt.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
