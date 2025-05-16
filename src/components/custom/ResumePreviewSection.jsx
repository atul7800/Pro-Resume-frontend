import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetailsPreview from "./resume_preview/PersonalDetailsPreview";
import SummaryPreview from "./resume_preview/SummaryPreview";
import ExperiencePreview from "./resume_preview/ExperiencePreview";
import EducationPreview from "./resume_preview/EducationPreview";
import SkillsPreview from "./resume_preview/SkillsPreview";
import dummy from "@/data/dummy";

function ResumePreviewSection() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="h-full border-t-[20px] p-14 shadow-lg"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Personal details */}
      <PersonalDetailsPreview />
      {/* Summary */}
      <SummaryPreview />
      {/* Professional experience */}
      <ExperiencePreview />
      {/* Educational details */}
      <EducationPreview />
      {/* Skills */}
      <SkillsPreview resumeInfo={dummy} />
    </div>
  );
}

export default ResumePreviewSection;
