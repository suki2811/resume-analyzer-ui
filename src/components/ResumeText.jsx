export default function ResumeText({ resumeText, setResumeText }) {
  return (
    <div className="card">
      <div className="card-title">Paste Resume Text</div>

      <textarea
        rows="9"
        placeholder="Paste skills, experience, projects, tools, etc."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      />
    </div>
  );
}
