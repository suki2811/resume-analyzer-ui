import { useState } from "react";
import UploadCard from "../components/UploadCard";
import RoleSelector from "../components/RoleSelector";
import ResumeText from "../components/ResumeText";
import ATSScore from "../components/ATSScore";
import SkillRadar from "../components/SkillRadar";
import Suggestions from "../components/Suggestions";

const ROLE_SKILLS = {
  "Frontend Developer": ["HTML", "CSS", "JavaScript", "React", "Git"],
  "Backend Developer": ["Node", "Express", "SQL", "APIs", "Git"],
  "Full Stack Developer": ["JavaScript", "React", "Node", "SQL", "Git"],
  "Software Engineer": ["Data Structures", "Algorithms", "OOP", "Git"],
  "Data Analyst": ["Python", "SQL", "Excel", "Statistics"],
  "Machine Learning Engineer": ["Python", "Machine Learning", "NumPy", "Pandas"],
};

export default function Dashboard() {
  const [role, setRole] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [showResults, setShowResults] = useState(false);

  const requiredSkills = ROLE_SKILLS[role] || [];

  const foundSkills = requiredSkills.filter((skill) =>
    resumeText.toLowerCase().includes(skill.toLowerCase())
  );

  const missingSkills = requiredSkills.filter(
    (skill) => !foundSkills.includes(skill)
  );

  const atsScore =
    requiredSkills.length === 0
      ? 0
      : Math.round((foundSkills.length / requiredSkills.length) * 100);
  <div className="soft-divider" />


  return (
    <div className="dashboard">
      <div
  style={{
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "999px",
    background: "#eef2ff",
    color: "#4338ca",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "24px",
  }}
>
  Demo Mode · Frontend ATS Simulation
</div>

      <div className="section fade-up fade-delay-1">
        <UploadCard />
      </div>

      <div
        className="section fade-up fade-delay-2"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        <RoleSelector role={role} setRole={setRole} />
        <ResumeText resumeText={resumeText} setResumeText={setResumeText} />
      </div>

      <div className="section fade-up fade-delay-3" style={{ textAlign: "center" }}>
        {(!role || !resumeText) && (
  <p
    style={{
      marginTop: "20px",
      fontSize: "14px",
      color: "#64748b",
      textAlign: "center",
    }}
  >
    Select a role and paste resume text to get meaningful results
  </p>
)}

        <button className="hero-btn" onClick={() => setShowResults(true)}>
          Analyze Resume
        </button>
      </div>

      {showResults && (
        <>
          <div
            className="section fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
            }}
          >
            <ATSScore score={atsScore} />
            <SkillRadar
              foundSkills={foundSkills}
              missingSkills={missingSkills}
            />
          </div>

          <div className="section fade-up">
            <Suggestions role={role} missingSkills={missingSkills} />
          </div>
        </>
      )}
    </div>
  );
}
