export default function Landing({ onStart }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1
  style={{
    fontFamily: "Rubik Mono One, monospace",
    fontSize: "76px",
    lineHeight: "1.05",
    letterSpacing: "2px",
    marginBottom: "20px",
  }}
>
  Resume Analyzer
</h1>

      <p
  style={{
    fontFamily: "Sacramento, cursive",
    fontSize: "34px",
    color: "#475569",
    marginBottom: "60px",
  }}
>
  A calm way to understand your resume
</p>




      <p style={{ color: "#9ca3af", maxWidth: "600px" }}>
        Upload your resume and compare it against real job descriptions in
        seconds.
      </p>

      <button
        onClick={onStart}
        style={{
          marginTop: "40px",
          padding: "14px 32px",
          backgroundColor: "#4ade80",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Analyze Resume →
      </button>
    </div>
  );
}
