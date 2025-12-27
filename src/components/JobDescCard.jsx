export default function JobDescCard() {
  return (
    <div
      style={{
        background: "#161a22",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h3>Job Description</h3>
      <textarea
        placeholder="Paste job description here..."
        rows="6"
        style={{
          width: "100%",
          marginTop: "10px",
          background: "#0f1115",
          color: "#e5e7eb",
          border: "1px solid #1f2937",
          borderRadius: "8px",
          padding: "10px",
        }}
      />
    </div>
  );
}
