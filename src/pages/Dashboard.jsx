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
    <div className="dashboard">

      {/* Upload */}
      <div className="section">
        <UploadCard />
      </div>

      {/* Role + Resume */}
      <div className="section grid-2">
        <RoleSelector role={role} setRole={setRole} />
        <ResumeText resumeText={resumeText} setResumeText={setResumeText} />
      </div>

      {/* Analyze */}
      <div className="section analyze-section">
        {(!role || !resumeText) && (
          <p className="helper-text">
            Select a role and paste resume text to get meaningful results
          </p>
        )}

        <button className="hero-btn" onClick={() => setShowResults(true)}>
          Analyze Resume
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <>
          <div className="section grid-2">
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
