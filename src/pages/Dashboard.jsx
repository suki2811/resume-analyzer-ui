import { useState } from "react";
import Navbar from "../components/Navbar";
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

  return (
    <div style={{ padding: "30px" }}>
      <Navbar />

      <div style={{ marginTop: "30px" }}>
        <UploadCard />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginTop: "24px",
        }}
      >
        <RoleSelector role={role} setRole={setRole} />
        <ResumeText resumeText={resumeText} setResumeText={setResumeText} />
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={() => setShowResults(true)}
          style={{
            padding: "14px 36px",
            background: "#4ade80",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Analyze Resume
        </button>
      </div>

      {showResults && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            <ATSScore score={atsScore} />
            <SkillRadar
              foundSkills={foundSkills}
              missingSkills={missingSkills}
            />
          </div>

          <div style={{ marginTop: "30px" }}>
            <Suggestions role={role} missingSkills={missingSkills} />
          </div>
        </>
      )}
    </div>
  );
}
