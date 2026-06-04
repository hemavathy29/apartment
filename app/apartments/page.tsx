import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PropertyCardLarge } from "@/components/PropertyCard";
import { apartments } from "@/lib/apartments";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Apartments | Apartment Service Chennai",
  description: "Browse all our premium serviced apartments in Chennai — S Kolathur, Kovilambakkam, Thoraipakkam, and Nanganallur.",
};

export default function ApartmentsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section
          style={{
            backgroundColor: "#111111",
            paddingTop: "140px",
            paddingBottom: "80px",
            textAlign: "center",
            borderBottom: "1px solid rgba(201,168,108,0.15)",
          }}
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
            Our Properties
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#f0ece0",
              lineHeight: 1.2,
            }}
          >
            All Apartments
          </h1>
        </section>

        {/* Grid */}
        <section style={{ backgroundColor: "#f8f6f0", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "32px",
              }}
            >
              {apartments.map((apt) => (
                <PropertyCardLarge key={apt.slug} apt={apt} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
