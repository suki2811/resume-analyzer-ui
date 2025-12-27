export default function JobDescCard() {
  return (
    <div className="card">
      <div className="card-title">Job Description</div>
      <textarea
        placeholder="Paste job description here..."
        rows="6"
        style={{
          width: "100%",
          background: "#0b0f1a",
          color: "#e5e7eb",
          border: "1px solid #1f2937",
          borderRadius: "10px",
          padding: "12px",
        }}
      />
    </div>
  );
}
