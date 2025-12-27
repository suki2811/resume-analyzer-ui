export default function Suggestions({ role, missingSkills }) {
  return (
    <div className="card">
      <div className="section-heading">Improvement Suggestions</div>

      {missingSkills.length === 0 ? (
        <p style={{ color: "#16a34a" }}>
          Your resume aligns well with the selected role.
        </p>
      ) : (
        <ul>
          {missingSkills.map((skill) => (
            <li key={skill}>
              Strengthen <b>{skill}</b> through projects or coursework.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
