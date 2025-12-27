export default function ATSScore({ score }) {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <div className="card-title">ATS Score</div>
      <div
        style={{
          fontSize: "56px",
          fontWeight: "bold",
          color: "#4ade80",
        }}
      >
        {score}%
      </div>
    </div>
  );
}
