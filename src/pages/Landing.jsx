export default function Landing({ onStart }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 24px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Rubik Mono One, monospace",
          fontSize: "80px",
          lineHeight: "1.05",
          letterSpacing: "2px",
          marginBottom: "24px",
        }}
      >
        Resume Analyzer
      </h1>

      <p
        style={{
          fontFamily: "Sacramento, cursive",
          fontSize: "36px",
          color: "#475569",
          marginBottom: "70px",
        }}
      >
        A calm way to understand your resume
      </p>

      <button className="hero-btn" onClick={onStart}>
        Analyze Resume
      </button>

      <p
        style={{
          marginTop: "22px",
          fontSize: "14px",
          color: "#64748b",
        }}
      >
        No sign-up required · Demo mode
      </p>
    </div>
  );
}
