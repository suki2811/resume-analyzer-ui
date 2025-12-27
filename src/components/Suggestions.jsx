export default function Suggestions({ role, missingSkills }) {
  return (
    <div className="card">
      <div
        style={{
          fontFamily: "Rubik Mono One, monospace",
          fontSize: "20px",
          marginBottom: "20px",
        }}
      >
        SUGGESTIONS
      </div>

      <p style={{ color: "#475569", marginBottom: "16px" }}>
        Suggestions for <b>{role}</b>
      </p>

      {missingSkills.length === 0 ? (
        <p style={{ color: "#16a34a" }}>
          Your resume already aligns very well with this role.
        </p>
      ) : (
        <ul style={{ paddingLeft: "18px", color: "#475569" }}>
          {missingSkills.map((skill) => (
            <li key={skill} style={{ marginBottom: "10px" }}>
              Add <b>{skill}</b> via projects, internships, or coursework
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
