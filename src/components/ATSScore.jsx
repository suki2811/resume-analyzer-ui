export default function ATSScore({ score }) {
  return (
    <div
      style={{
        background: "#161a22",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h3>ATS Score</h3>
      <div style={{ fontSize: "48px", color: "#4ade80" }}>{score}%</div>
    </div>
  );
}
