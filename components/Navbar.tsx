"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { apartments } from "@/lib/apartments";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        backgroundColor: scrolled ? "#111111" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,108,0.2)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "70px" : "90px",
          transition: "height 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#c9a86c",
                letterSpacing: "0.04em",
              }}
            >
              The Leisure&apos;s
            </span>
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.6rem",
                fontWeight: 400,
                color: "#c9c9c9",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                marginTop: "3px",
              }}
            >
              Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
          className="desktop-nav"
        >
          <NavLink href="/">HOME</NavLink>

          {/* Apartments Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/apartments"
              style={{
                color: "#e0d8c8",
                textDecoration: "none",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a86c")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#e0d8c8")}
            >
              APARTMENTS
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1L5 5L9 1" stroke="#c9a86c" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  marginTop: "18px",
                  backgroundColor: "#1c1c1c",
                  border: "1px solid rgba(201,168,108,0.25)",
                  minWidth: "240px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
                  zIndex: 999,
                }}
              >
                {apartments.map((apt) => (
                  <Link
                    key={apt.slug}
                    href={`/apartments/${apt.slug}`}
                    style={{
                      display: "block",
                      padding: "14px 24px",
                      color: "#d0c8b8",
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      letterSpacing: "0.06em",
                      borderBottom: "1px solid rgba(201,168,108,0.1)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,168,108,0.1)";
                      (e.currentTarget as HTMLElement).style.color = "#c9a86c";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "30px";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#d0c8b8";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "24px";
                    }}
                  >
                    <div style={{ fontWeight: 600 }}>{apt.name}</div>
                    <div style={{ fontSize: "0.7rem", color: "#888", marginTop: "2px" }}>{apt.area}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink href="/about">ABOUT US</NavLink>
          <NavLink href="/contact">CONTACT</NavLink>

          <Link
            href="/contact"
            style={{
              backgroundColor: "var(--gold, #c9a86c)",
              color: "#fff",
              padding: "10px 24px",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#a07840")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#c9a86c")}
          >
            ROOM INQUIRY
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "#c9a86c",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#111111",
            borderTop: "1px solid rgba(201,168,108,0.2)",
            padding: "24px 32px",
          }}
          className="mobile-menu"
        >
          {[
            { label: "HOME", href: "/" },
            { label: "APARTMENTS", href: "/apartments" },
            ...apartments.map((a) => ({ label: `  ${a.name}`, href: `/apartments/${a.slug}` })),
            { label: "ABOUT US", href: "/about" },
            { label: "CONTACT", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: item.label.startsWith("  ") ? "#888" : "#d0c8b8",
                padding: "12px 0",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                paddingLeft: item.label.startsWith("  ") ? "16px" : "0",
              }}
            >
              {item.label.trim()}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              marginTop: "16px",
              backgroundColor: "#c9a86c",
              color: "#fff",
              padding: "14px 24px",
              textAlign: "center",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textDecoration: "none",
            }}
          >
            ROOM INQUIRY
          </Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        color: "#e0d8c8",
        textDecoration: "none",
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c9a86c")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#e0d8c8")}
    >
      {children}
    </Link>
  );
}
