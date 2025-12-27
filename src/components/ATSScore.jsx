import { useEffect, useState } from "react";

export default function ATSScore({ score }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i >= score) {
        i = score;
        clearInterval(interval);
      }
      setProgress(i);
    }, 12);
  }, [score]);

  return (
    <div className="card" style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "Rubik Mono One, monospace",
          fontSize: "20px",
          marginBottom: "20px",
        }}
      >
        ATS SCORE
      </div>

      <div
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: `conic-gradient(#6366f1 ${progress * 3.6}deg, #e5e7eb 0deg)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "32px",
            fontWeight: "600",
            color: "#4f46e5",
          }}
        >
          {progress}%
        </div>
      </div>

      <p
        style={{
          marginTop: "18px",
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        Match with selected role
      </p>
    </div>
  );
}
