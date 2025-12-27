export default function ResumeText({ resumeText, setResumeText }) {
  return (
    <div className="card">
      <div className="section-heading">Resume Content</div>

      <div className="section-subtext">
        Paste skills, experience, projects, tools
      </div>

      <textarea
        rows="9"
        placeholder="Example: React developer with experience in..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      />
    </div>
  );
}

