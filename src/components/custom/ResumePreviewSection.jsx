import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import React, { useContext } from "react";
import PersonalDetailsPreview from "./resume_preview/PersonalDetailsPreview";
import SummaryPreview from "./resume_preview/SummaryPreview";
import ExperiencePreview from "./resume_preview/ExperiencePreview";
import EducationPreview from "./resume_preview/EducationPreview";
import SkillsPreview from "./resume_preview/SkillsPreview";

function ResumePreviewSection() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div
      className="h-full border-t-[20px] p-14 shadow-lg"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Personal details */}
      <PersonalDetailsPreview resumeInfo={resumeInfo} />
      {/* Summary */}
      <SummaryPreview resumeInfo={resumeInfo} />
      {/* Professional experience */}
      <ExperiencePreview resumeInfo={resumeInfo} />
      {/* Educational details */}
      <EducationPreview resumeInfo={resumeInfo} />
      {/* Skills */}
      <SkillsPreview resumeInfo={resumeInfo} />
    </div>
  );
}

export default ResumePreviewSection;
