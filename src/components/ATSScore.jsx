import { useEffect, useState } from "react";

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
    }, 15);
  }, [score]);

  return (
    <div className="card" style={{ textAlign: "center" }}>
      <div className="card-title">ATS Score</div>

      <div
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: `conic-gradient(#4ade80 ${progress * 3.6}deg, #1f2937 0deg)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "#0b0f1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#4ade80",
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
}
