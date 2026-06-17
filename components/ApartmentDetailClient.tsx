"use client";

import { useState } from "react";
import Link from "next/link";
import type { Apartment } from "@/lib/apartments";
import { apartments } from "@/lib/apartments";

export default function ApartmentDetailClient({ apt }: { apt: Apartment }) {
  const [activeImage, setActiveImage] = useState(0);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const otherApartments = apartments.filter((a) => a.slug !== apt.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", height: "70vh", minHeight: "500px", overflow: "hidden" }}>
        <img
          src={apt.gallery[activeImage]}
          alt={apt.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.5s ease" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Thumbnails */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
            zIndex: 10,
          }}
        >
          {apt.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              style={{
                width: "64px",
                height: "44px",
                border: i === activeImage ? "2px solid #c9a86c" : "2px solid rgba(255,255,255,0.3)",
                padding: 0,
                cursor: "pointer",
                overflow: "hidden",
                opacity: i === activeImage ? 1 : 0.6,
                transition: "all 0.3s ease",
              }}
            >
              <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </button>
          ))}
        </div>

        {/* Title overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "140px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            zIndex: 10,
            width: "100%",
            padding: "0 24px",
          }}
        >
          <p style={{ color: "#c9a86c", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "12px" }}>
            {apt.location}
          </p>
          <h1 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, marginBottom: "8px" }}>
            {apt.name}
          </h1>
          <p style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", color: "#d0c8b8", fontStyle: "italic" }}>
            {apt.tagline}
          </p>
        </div>
      </section>

      {/* Detail Body */}
      <section className="section-pad-sm" style={{ backgroundColor: "#ffffff" }}>
        <div className="container-sm">
          <div className="grid-detail">
            {/* Left */}
            <div>
              <p style={{ color: "#c9a86c", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "16px" }}>
                About This Property
              </p>
              <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "2rem", fontWeight: 700, color: "#111", marginBottom: "24px", lineHeight: 1.2 }}>
                {apt.name}
              </h2>
              <div style={{ width: "60px", height: "2px", backgroundColor: "#c9a86c", marginBottom: "28px" }} />
              <p style={{ color: "#555", fontSize: "1rem", lineHeight: 1.9, marginBottom: "48px" }}>{apt.description}</p>

              {/* Specs */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "#e8e4dc", border: "1px solid #e8e4dc", marginBottom: "48px" }}>
                {[
                  { label: "Bedrooms", value: apt.bedrooms },
                  { label: "Bathrooms", value: `${apt.bathrooms} Bath` },
                  { label: "Size", value: apt.size },
                ].map((item) => (
                  <div key={item.label} style={{ backgroundColor: "#f8f6f0", padding: "24px", textAlign: "center" }}>
                    <div style={{ color: "#c9a86c", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>
                      {item.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", fontWeight: 700, color: "#111" }}>{item.value}</div>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.3rem", fontWeight: 700, color: "#111", marginBottom: "20px" }}>Amenities</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "12px", marginBottom: "48px" }}>
                {apt.amenities.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", backgroundColor: "#f8f6f0", border: "1px solid #e8e4dc", fontSize: "0.85rem", color: "#444" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>

              {/* Features */}
              <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.3rem", fontWeight: 700, color: "#111", marginBottom: "20px" }}>Property Features</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {apt.features.map((f) => (
                  <span key={f} style={{ padding: "8px 20px", border: "1px solid rgba(201,168,108,0.4)", color: "#c9a86c", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Sticky Card */}
            <div className="detail-sidebar">
              <div style={{ backgroundColor: "#111111", padding: "40px 32px", border: "1px solid rgba(201,168,108,0.2)" }}>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.3rem", fontWeight: 700, color: "#f0ece0", marginBottom: "8px" }}>
                  Interested in this property?
                </h3>
                <p style={{ color: "#888", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "28px" }}>
                  Contact us to check availability and get a personalised quote.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {[
                    { tel: "9841647575", label: "+91 98416 47575" },
                    { tel: "7845994384", label: "+91 78459 94384" },
                  ].map((p) => (
                    <a key={p.tel} href={`tel:${p.tel}`} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#d0c8b8", textDecoration: "none", fontSize: "0.9rem", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      {p.label}
                    </a>
                  ))}
                </div>
                <button onClick={() => setInquiryOpen(true)} className="btn-gold" style={{ width: "100%", textAlign: "center" }}>
                  SEND INQUIRY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      {inquiryOpen && (
        <div
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.7)", zIndex: 2000, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
          onClick={() => setInquiryOpen(false)}
        >
          <div
            style={{ backgroundColor: "#fff", padding: "48px", maxWidth: "520px", width: "100%", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setInquiryOpen(false)} style={{ position: "absolute", top: "16px", right: "16px", background: "none", border: "none", cursor: "pointer", color: "#999", fontSize: "1.2rem" }}>✕</button>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px", color: "#c9a86c" }}>✓</div>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", marginBottom: "12px" }}>Inquiry Sent!</h3>
                <p style={{ color: "#666" }}>We&apos;ll contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.5rem", fontWeight: 700, color: "#111", marginBottom: "8px" }}>
                  Inquire: {apt.name}
                </h3>
                <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "28px" }}>{apt.location}</p>
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { key: "name", label: "Full Name", type: "text" },
                    { key: "email", label: "Email", type: "email" },
                    { key: "phone", label: "Phone", type: "tel" },
                  ].map((f) => (
                    <input key={f.key} type={f.type} placeholder={f.label} required value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      style={{ padding: "12px 16px", border: "1px solid #ddd", fontSize: "0.9rem", outline: "none", width: "100%" }}
                    />
                  ))}
                  <textarea rows={3} placeholder="Your message or requirements..." value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ padding: "12px 16px", border: "1px solid #ddd", fontSize: "0.9rem", outline: "none", resize: "vertical", fontFamily: "inherit" }}
                  />
                  <button type="submit" className="btn-gold" style={{ width: "100%", textAlign: "center" }}>SUBMIT</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Other Apartments */}
      <section style={{ backgroundColor: "#f8f6f0", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.8rem", fontWeight: 700, color: "#111", marginBottom: "40px" }}>
            Other Properties
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {otherApartments.map((a) => (
              <Link key={a.slug} href={`/apartments/${a.slug}`} style={{ textDecoration: "none" }}>
                <div
                  style={{ overflow: "hidden", backgroundColor: "#fff", border: "1px solid #e8e4dc", transition: "transform 0.3s, box-shadow 0.3s" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 30px rgba(0,0,0,0.1)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
                >
                  <div style={{ height: "180px", overflow: "hidden" }}>
                    <img src={a.image} alt={a.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <p style={{ color: "#c9a86c", fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "6px" }}>{a.area}</p>
                    <h3 style={{ fontFamily: "var(--font-playfair), serif", fontSize: "1.1rem", fontWeight: 700, color: "#111" }}>{a.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
