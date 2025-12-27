export default function SkillRadar({ foundSkills, missingSkills }) {
  return (
    <div className="card">
      <div className="section-heading">Skill Alignment</div>

      {foundSkills.map((skill) => (
        <div key={skill} style={{ color: "#16a34a", marginBottom: "6px" }}>
          {skill} ✔
        </div>
      ))}

      {missingSkills.map((skill) => (
        <div
          key={skill}
          style={{
            color: "#dc2626",
            background: "#f1f5f9",
            padding: "8px 12px",
            borderRadius: "10px",
            marginTop: "8px",
          }}
        >
          {skill} ✘ Missing
        </div>
      ))}
    </div>
  );
}
