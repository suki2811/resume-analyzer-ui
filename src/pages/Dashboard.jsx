import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";
import JobDescCard from "../components/JobDescCard";
import ATSScore from "../components/ATSScore";
import SkillRadar from "../components/SkillRadar";
import KeywordBars from "../components/KeywordBars";
import Suggestions from "../components/Suggestions";

export default function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <Navbar />

      {/* Upload Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <UploadCard />
        <JobDescCard />
      </div>

      {/* Results */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px",
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
    </div>
  );
}
