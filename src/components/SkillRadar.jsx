export default function SkillRadar({ foundSkills, missingSkills }) {
  return (
    <div className="card">
      <div
        style={{
          fontFamily: "Rubik Mono One, monospace",
          fontSize: "20px",
          marginBottom: "20px",
        }}
      >
        SKILL MATCH
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        {foundSkills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: "8px 16px",
              borderRadius: "999px",
              background: "#dcfce7",
              color: "#166534",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {skill} ✓
          </span>
        ))}

        {missingSkills.map((skill) => (
          <span
            key={skill}
            style={{
              padding: "8px 16px",
              borderRadius: "999px",
              background: "#fee2e2",
              color: "#991b1b",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {skill} ✕
          </span>
        ))}
      </div>
    </div>
  );
}
