import React from "react";

function ResumeCard({ resumeTitle, index }) {
  return (
    <div>
      <p>{resumeTitle}</p>
      <p>{index}</p>
    </div>
  );
}

export default ResumeCard;
