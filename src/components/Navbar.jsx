export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "24px",
        borderBottom: "1px solid #1f2937",
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "700" }}>
        Resume Analyzer
      </div>

      <div style={{ color: "#9ca3af", fontSize: "14px" }}>
        Demo ATS Platform
      </div>
    </div>
  );
}
