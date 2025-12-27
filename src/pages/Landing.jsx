export default function Landing({ onStart }) {
  return (
    <div
  style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "80px 24px",
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

     <button className="hero-btn" onClick={onStart}>
  Analyze Resume
</button>
      <p
  style={{
    marginTop: "18px",
    fontSize: "14px",
    color: "#64748b",
  }}
>
  No sign-up required · Demo mode
</p>



    </div>
  );
}
