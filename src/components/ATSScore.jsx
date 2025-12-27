iimport { useEffect, useState } from "react";

export default function ATSScore({ score }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start >= score) {
        start = score;
        clearInterval(interval);
      }
      setProgress(start);
    }, 12);
  }, [score]);

  return (
    <div className="card">
      <div className="section-heading">ATS Match Score</div>

      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `conic-gradient(#6366f1 ${progress * 3.6}deg, #e5e7eb 0deg)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "24px auto",
        }}
      >
        <div
          style={{
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: "600",
            color: "#4f46e5",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
