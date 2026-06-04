"use client";

import Link from "next/link";
import type { Apartment } from "@/lib/apartments";

export function PropertyCard({ apt }: { apt: Apartment }) {
  return (
    <Link href={`/apartments/${apt.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          backgroundColor: "#fff",
          overflow: "hidden",
          border: "1px solid #e8e4dc",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-4px)";
          el.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        <div style={{ height: "180px", overflow: "hidden" }}>
          <img
            src={apt.image}
            alt={apt.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ padding: "20px 24px 24px" }}>
          <p
            style={{
              color: "#c9a86c",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            {apt.area}
          </p>
          <h3
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#111",
              marginBottom: "6px",
            }}
          >
            {apt.name}
          </h3>
          <p style={{ color: "#888", fontSize: "0.82rem" }}>{apt.tagline}</p>
        </div>
      </div>
    </Link>
  );
}

export function PropertyCardLarge({ apt }: { apt: Apartment }) {
  return (
    <Link href={`/apartments/${apt.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          backgroundColor: "#ffffff",
          overflow: "hidden",
          boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          border: "1px solid rgba(201,168,108,0.1)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(-6px)";
          el.style.boxShadow = "0 16px 40px rgba(0,0,0,0.12)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)";
        }}
      >
        <div style={{ height: "260px", overflow: "hidden" }}>
          <img
            src={apt.image}
            alt={apt.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ padding: "32px" }}>
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
            {apt.location}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#111",
              marginBottom: "12px",
            }}
          >
            {apt.name}
          </h2>
          <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "24px" }}>
            {apt.description.slice(0, 140)}...
          </p>
          <div style={{ display: "flex", gap: "20px", marginBottom: "28px" }}>
            {[
              { v: apt.bedrooms, l: "Bedrooms" },
              { v: apt.size, l: "Size" },
            ].map((item) => (
              <div key={item.l}>
                <div
                  style={{
                    color: "#c9a86c",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "2px",
                  }}
                >
                  {item.l}
                </div>
                <div style={{ color: "#333", fontWeight: 600, fontSize: "0.9rem" }}>{item.v}</div>
              </div>
            ))}
          </div>
          <span
            style={{
              color: "#c9a86c",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            VIEW DETAILS →
          </span>
        </div>
      </div>
    </Link>
  );
}
