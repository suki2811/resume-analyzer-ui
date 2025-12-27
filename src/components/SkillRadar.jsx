export default function SkillRadar({ foundSkills, missingSkills }) {
  return (
    <div className="card">
      <div className="card-title">Skill Match</div>

      {foundSkills.map((skill) => (
        <div key={skill} style={{ color: "#4ade80" }}>
          {skill} ✔
        </div>
      ))}

      {missingSkills.map((skill) => (
        <div
          key={skill}
          style={{
            color: "#ef4444",
            background: "#1f2937",
            padding: "6px 10px",
            borderRadius: "8px",
            marginTop: "6px",
          }}
        >
          {skill} ✘ (Missing)
        </div>
      ))}
    </div>
  );
}
