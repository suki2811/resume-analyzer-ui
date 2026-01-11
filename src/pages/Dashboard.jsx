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

  return (
    <div className="app-container dashboard">
      {/* Demo badge */}
      <div className="demo-badge">
        Demo Mode · Frontend ATS Simulation
      </div>

      {/* Upload */}
      <div className="section">
        <UploadCard />
      </div>

      {/* Role + Resume */}
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

      <div className="section input-grid">
        <RoleSelector role={role} setRole={setRole} />
        <ResumeText resumeText={resumeText} setResumeText={setResumeText} />
      </div>

      {/* Analyze */}
      <div className="section analyze-wrapper">
        {(!role || !resumeText) && (
          <p className="helper-text">
            Select a role and paste resume text to get meaningful results
          </p>
        )}

        <button
          className="analyze-btn"
          onClick={() => setShowResults(true)}
        >
          Analyze Resume
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <>
          <div className="section results-grid">
            <ATSScore score={atsScore} />
            <SkillRadar
              foundSkills={foundSkills}
              missingSkills={missingSkills}
            />
          </div>

          <div className="section">
            <Suggestions role={role} missingSkills={missingSkills} />
          </div>
        </>
      )}
    </div>
  );
}
