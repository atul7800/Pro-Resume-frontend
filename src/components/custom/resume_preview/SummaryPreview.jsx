import React, { useContext } from "react";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";

function SummaryPreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const resumeInfoData = resumeInfo?.attributes;
  return (
    <div>
      <p style={{ fontSize: "16px", textAlign: "justify" }} className="text-sm">
        {resumeInfoData?.summary}
      </p>
    </div>
  );
}

export default SummaryPreview;
