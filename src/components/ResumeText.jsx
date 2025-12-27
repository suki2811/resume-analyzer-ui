export default function ResumeText({ resumeText, setResumeText }) {
  return (
    <div className="card">
      <div className="card-title">Paste Resume Text</div>
      <textarea
        rows="8"
        placeholder="Paste your resume text here (skills, projects, experience)..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
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
