export default function IntroSection() {
  return (
    <section
      style={{
        backgroundColor: "#111111",
        padding: "100px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p
          style={{
            color: "#c9a86c",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Our Philosophy
        </p>

        <h2
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            color: "#f0ece0",
            lineHeight: 1.3,
            marginBottom: "32px",
          }}
        >
          The things that remain with us are those that are{" "}
          <em style={{ color: "#c9a86c" }}>unique</em> and evoke{" "}
          <em style={{ color: "#c9a86c" }}>powerful emotions.</em>
        </h2>

        <div
          style={{
            width: "60px",
            height: "1px",
            backgroundColor: "#c9a86c",
            margin: "0 auto 32px",
          }}
        />

        <p
          style={{
            color: "#888",
            fontSize: "1rem",
            lineHeight: 1.9,
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          At Apartment Service, we believe that a truly exceptional living space does more than provide shelter — it
          creates memories. Each of our properties across Chennai is thoughtfully crafted to deliver comfort,
          elegance, and a feeling of home from the very first moment you walk in.
        </p>
      </div>
    </section>
  );
}
