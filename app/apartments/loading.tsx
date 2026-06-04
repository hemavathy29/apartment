export default function Loading() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f6f0", paddingTop: "90px" }}>
      {/* Header skeleton */}
      <div style={{ backgroundColor: "#111", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ width: "120px", height: "12px", backgroundColor: "rgba(201,168,108,0.3)", margin: "0 auto 20px", borderRadius: "2px" }} />
        <div style={{ width: "280px", height: "40px", backgroundColor: "rgba(255,255,255,0.08)", margin: "0 auto", borderRadius: "2px" }} />
      </div>
      {/* Cards skeleton */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ backgroundColor: "#fff", border: "1px solid #e8e4dc", overflow: "hidden" }}>
              <div style={{ height: "240px", backgroundColor: "#e8e4dc", animation: "pulse 1.5s ease-in-out infinite" }} />
              <div style={{ padding: "28px" }}>
                <div style={{ height: "10px", width: "80px", backgroundColor: "#e8e4dc", marginBottom: "14px", borderRadius: "2px" }} />
                <div style={{ height: "22px", width: "180px", backgroundColor: "#ddd", marginBottom: "12px", borderRadius: "2px" }} />
                <div style={{ height: "10px", width: "100%", backgroundColor: "#eee", marginBottom: "8px", borderRadius: "2px" }} />
                <div style={{ height: "10px", width: "80%", backgroundColor: "#eee", borderRadius: "2px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
    </div>
  );
}
