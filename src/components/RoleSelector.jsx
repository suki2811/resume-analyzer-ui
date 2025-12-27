export default function RoleSelector({ role, setRole }) {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Data Analyst",
    "Machine Learning Engineer",
  ];

  return (
    <div className="card">
      <div className="card-title">Target Role</div>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          background: "#0b0f1a",
          color: "#e5e7eb",
          border: "1px solid #1f2937",
        }}
      >
        <option value="">Select role</option>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );
}
