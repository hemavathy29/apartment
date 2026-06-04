export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "#111111",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-playfair), serif",
          fontSize: "1.6rem",
          fontWeight: 700,
          color: "#c9a86c",
          letterSpacing: "0.1em",
          marginBottom: "32px",
        }}
      >
        APARTMENT SERVICE
      </div>
      <div
        style={{
          width: "180px",
          height: "2px",
          backgroundColor: "rgba(201,168,108,0.2)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            backgroundColor: "#c9a86c",
            animation: "loadBar 1.2s ease-in-out infinite",
          }}
        />
      </div>
      <style>{`
        @keyframes loadBar {
          0%   { width: 0%; left: 0%; }
          50%  { width: 70%; left: 15%; }
          100% { width: 0%; left: 100%; }
        }
      `}</style>
    </div>
  );
}
