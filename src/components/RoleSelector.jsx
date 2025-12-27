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
      <div className="section-heading">Target Role</div>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select the role you are applying for</option>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    </div>
  );
}
