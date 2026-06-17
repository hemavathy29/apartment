"use client";

import { useState } from "react";
import { apartments } from "@/lib/apartments";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    apartment: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-pad" style={{ backgroundColor: "#f8f6f0" }}>
      <div className="container-sm">
        <div className="grid-contact">
          {/* Left - Info */}
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
              Get In Touch
            </p>
            <h2
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 700,
                color: "#111111",
                lineHeight: 1.2,
                marginBottom: "24px",
              }}
            >
              Room Inquiry
            </h2>
            <div
              style={{
                width: "60px",
                height: "2px",
                backgroundColor: "#c9a86c",
                marginBottom: "32px",
              }}
            />
            <p
              style={{
                color: "#555",
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "48px",
              }}
            >
              Ready to experience the best in serviced apartment living? Reach out to us and our team will get back to
              you promptly with availability, pricing, and everything you need to know.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                }
                label="Phone"
                value={
                  <>
                    <a href="tel:9841647575" style={{ color: "#333", textDecoration: "none" }}>+91 98416 47575</a>
                    <br />
                    <a href="tel:7845994384" style={{ color: "#333", textDecoration: "none" }}>+91 78459 94384</a>
                  </>
                }
              />
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                label="Email"
                value={
                  <a href="mailto:info@theleisures.in" style={{ color: "#333", textDecoration: "none" }}>
                    info@theleisures.in
                  </a>
                }
              />
              <ContactItem
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                label="Locations"
                value="S Kolathur · Kovilambakkam · Thoraipakkam · Nanganallur"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "48px 40px",
              boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "rgba(201,168,108,0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a86c" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.5rem",
                    color: "#111",
                    marginBottom: "12px",
                  }}
                >
                  Thank You!
                </h3>
                <p style={{ color: "#666", lineHeight: 1.7 }}>
                  Your inquiry has been received. Our team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    fontSize: "1.4rem",
                    color: "#111",
                    marginBottom: "8px",
                  }}
                >
                  Send an Inquiry
                </h3>

                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                ].map((field) => (
                  <div key={field.key}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#444",
                        marginBottom: "8px",
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.key !== "phone"}
                      value={form[field.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        border: "1px solid #ddd",
                        fontSize: "0.9rem",
                        color: "#333",
                        outline: "none",
                        transition: "border-color 0.2s ease",
                        backgroundColor: "#fafafa",
                      }}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#c9a86c")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#ddd")}
                    />
                  </div>
                ))}

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#444",
                      marginBottom: "8px",
                    }}
                  >
                    Preferred Apartment
                  </label>
                  <select
                    value={form.apartment}
                    onChange={(e) => setForm({ ...form, apartment: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #ddd",
                      fontSize: "0.9rem",
                      color: form.apartment ? "#333" : "#999",
                      outline: "none",
                      backgroundColor: "#fafafa",
                      cursor: "pointer",
                    }}
                  >
                    <option value="">Select an apartment</option>
                    {apartments.map((apt) => (
                      <option key={apt.slug} value={apt.slug}>
                        {apt.name} — {apt.area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#444",
                      marginBottom: "8px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements, move-in date, duration of stay..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "1px solid #ddd",
                      fontSize: "0.9rem",
                      color: "#333",
                      outline: "none",
                      resize: "vertical",
                      backgroundColor: "#fafafa",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#c9a86c")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#ddd")}
                  />
                </div>

                <button type="submit" className="btn-gold" style={{ width: "100%", textAlign: "center" }}>
                  SUBMIT INQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div
        style={{
          width: "44px",
          height: "44px",
          backgroundColor: "rgba(201,168,108,0.1)",
          border: "1px solid rgba(201,168,108,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#c9a86c",
            marginBottom: "4px",
          }}
        >
          {label}
        </div>
        <div style={{ color: "#333", fontSize: "0.95rem", lineHeight: 1.6 }}>{value}</div>
      </div>
    </div>
  );
}
