import { useState } from "react";
import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";
import JobDescCard from "../components/JobDescCard";
import ATSScore from "../components/ATSScore";
import SkillRadar from "../components/SkillRadar";
import KeywordBars from "../components/KeywordBars";
import Suggestions from "../components/Suggestions";

export default function Dashboard() {
  const [showResults, setShowResults] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
      <Navbar />

      {/* Upload Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          marginTop: "30px",
        }}
      >
        <UploadCard />
        <JobDescCard />
      </div>

      {/* Analyze Button */}
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

      {/* Results Section */}
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
            <ATSScore score={78} />
            <SkillRadar />
          </div>

          <div style={{ marginTop: "30px" }}>
            <KeywordBars />
          </div>

          <div style={{ marginTop: "30px" }}>
            <Suggestions />
          </div>
        </>
      )}
    </div>
  );
}
