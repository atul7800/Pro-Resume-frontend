import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetailsPreview from "./preview/PersonalDetailsPreview";

function ResumePreviewSection() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  console.log(resumeInfo?.firstName);
  return (
    <div
      className="h-full border-t-[20px] p-14 shadow-lg"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Personal details */}
      <PersonalDetailsPreview resumeInfo={resumeInfo} />
      {/* Summary */}
      {/* Professional experience */}
      {/* Educational details */}
      {/* Skills */}
    </div>
  );
}

export default ResumePreviewSection;
