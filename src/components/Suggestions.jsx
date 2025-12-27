export default function Suggestions({ role, missingSkills }) {
  return (
    <div className="card">
      <div className="card-title">Suggestions for {role}</div>

      {missingSkills.length === 0 ? (
        <p style={{ color: "#4ade80" }}>
          Your resume already matches this role very well.
        </p>
      ) : (
        <ul style={{ color: "#9ca3af" }}>
          {missingSkills.map((skill) => (
            <li key={skill}>
              Consider adding <b>{skill}</b> through projects or coursework.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
