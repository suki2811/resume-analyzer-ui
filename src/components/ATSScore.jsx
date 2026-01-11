import React from "react";

const ATSScore = ({ score = 20 }) => {
  const radius = 70;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="ats-card">
      <h3 className="card-title">ATS SCORE</h3>

      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        className="ats-svg"
      >
        {/* Background ring */}
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />

        {/* Progress ring */}
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke="#9ca3af"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 90 90)"
        />

        {/

