"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { apartments } from "@/lib/apartments";

const slides = apartments.map((a) => ({
  image: a.image,
  name: a.name,
  location: a.location,
  slug: a.slug,
  tagline: a.tagline,
}));

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.slug}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease",
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* Background image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: i === current ? "scale(1.04)" : "scale(1)",
              transition: "transform 6s ease",
            }}
          />
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
          paddingTop: "90px",
        }}
      >
        <div
          key={current}
          style={{
            animation: "fadeInUp 0.8s ease forwards",
          }}
        >
          <p
            style={{
              color: "#c9a86c",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Premium Serviced Apartments · Chennai
          </p>

          <h1
            style={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "8px",
              letterSpacing: "0.01em",
            }}
          >
            {slides[current].name}
          </h1>

          <p
            style={{
              color: "#c9a86c",
              fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontWeight: 400,
            }}
          >
            {slides[current].location}
          </p>

          <p
            style={{
              color: "#d0c8b8",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontStyle: "italic",
              fontFamily: "var(--font-playfair), serif",
              marginBottom: "44px",
              maxWidth: "540px",
              margin: "0 auto 44px",
            }}
          >
            {slides[current].tagline}
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`/apartments/${slides[current].slug}`} className="btn-gold">
              VIEW APARTMENT
            </Link>
            <Link href="/apartments" className="btn-outline-gold" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.5)" }}>
              VIEW ALL
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          gap: "12px",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "32px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor: i === current ? "#c9a86c" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s ease",
              padding: 0,
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="hero-arrow"
        style={{ left: "24px" }}
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="hero-arrow"
        style={{ right: "24px" }}
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Slide counter */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          right: "40px",
          zIndex: 20,
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
        }}
      >
        <span style={{ color: "#c9a86c", fontSize: "1rem" }}>{String(current + 1).padStart(2, "0")}</span>
        {" / "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
