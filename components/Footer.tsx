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
                  fontFamily: "var(--font-playfair), serif",
                  fontSize: "1.6rem",
                  fontWeight: 700,
                  color: "#c9a86c",
                  letterSpacing: "0.06em",
                  lineHeight: 1,
                }}
              >
                APARTMENT
              </div>
              <div
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  color: "#666",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                SERVICE
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
            <div style={{ display: "flex", gap: "12px" }}>
              <SocialLink href="#" label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </SocialLink>
              <SocialLink href="#" label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </SocialLink>
              <SocialLink href="#" label="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </SocialLink>
            </div>
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
                <a href="tel:9962237575" style={{ color: "#aaa", fontSize: "0.88rem", textDecoration: "none", display: "block" }}>
                  +91 99622 37575
                </a>
                <a href="tel:9344555155" style={{ color: "#aaa", fontSize: "0.88rem", textDecoration: "none", display: "block" }}>
                  +91 93445 55155
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
            © {new Date().getFullYear()} Apartment Service. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {["Privacy Policy", "Terms of Use", "Accommodation Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{ color: "#444", textDecoration: "none", fontSize: "0.78rem", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c9a86c")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#444")}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      style={{
        width: "38px",
        height: "38px",
        border: "1px solid rgba(201,168,108,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#777",
        textDecoration: "none",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#c9a86c";
        (e.currentTarget as HTMLElement).style.color = "#c9a86c";
        (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,168,108,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,108,0.3)";
        (e.currentTarget as HTMLElement).style.color = "#777";
        (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
      }}
    >
      {children}
    </a>
  );
}
