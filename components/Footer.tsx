"use client";

import Link from "next/link";
import { apartments } from "@/lib/apartments";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(201,168,108,0.15)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px 40px" }}>
        <div className="grid-footer">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src="/logo.jpeg"
                  alt="The Leisure's Pvt.Ltd."
                  style={{ height: "52px", width: "auto", display: "block" }}
                />
              </div>
            </div>
            <p
              style={{
                color: "#666",
                fontSize: "0.9rem",
                lineHeight: 1.8,
                marginBottom: "28px",
                maxWidth: "280px",
              }}
            >
              Premium serviced apartments across Chennai's finest neighbourhoods. Luxury living, tailored for you.
            </p>
          </div>

          {/* Apartments */}
          <div>
            <h4
              style={{
                color: "#c9a86c",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Apartments
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {apartments.map((apt) => (
                <li key={apt.slug}>
                  <Link
                    href={`/apartments/${apt.slug}`}
                    style={{
                      color: "#777",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c9a86c")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#777")}
                  >
                    {apt.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "#c9a86c",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Home", href: "/" },
                { label: "All Apartments", href: "/apartments" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#777",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c9a86c")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#777")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: "#c9a86c",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <div style={{ color: "#555", fontSize: "0.72rem", letterSpacing: "0.1em", marginBottom: "4px" }}>PHONE</div>
                <a href="tel:9841647575" style={{ color: "#aaa", fontSize: "0.88rem", textDecoration: "none", display: "block" }}>
                  +91 98416 47575
                </a>
                <a href="tel:7845994384" style={{ color: "#aaa", fontSize: "0.88rem", textDecoration: "none", display: "block" }}>
                  +91 78459 94384
                </a>
                <a href="mailto:info@theleisures.in" style={{ color: "#aaa", fontSize: "0.88rem", textDecoration: "none", display: "block", marginTop: "4px" }}>
                  info@theleisures.in
                </a>
              </div>
              <div>
                <div style={{ color: "#555", fontSize: "0.72rem", letterSpacing: "0.1em", marginBottom: "4px" }}>LOCATIONS</div>
                <div style={{ color: "#aaa", fontSize: "0.85rem", lineHeight: 1.7 }}>
                  Chennai, Tamil Nadu
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)", marginBottom: "32px" }} />

        {/* Bottom */}
        <div className="footer-bottom">
          <p style={{ color: "#444", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} The Leisure&apos;s Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
