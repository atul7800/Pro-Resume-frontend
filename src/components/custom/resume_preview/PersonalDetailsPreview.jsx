import React, { useContext } from "react";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";

function PersonalDetailsPreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const resumeInfoData = resumeInfo?.attributes;
  return (
    <div>
      <h2
        className="text-center text-xl font-bold"
        style={{ color: resumeInfoData?.themeColor }}
      >
        {resumeInfoData?.firstName} {resumeInfoData?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {resumeInfoData?.jobTitle}
      </h2>
      <h2 className="text-center text-xs font-normal">
        {resumeInfoData?.address}
      </h2>
      <div className="mt-2 flex justify-between">
        <h2 className="text-xs font-normal">{resumeInfoData?.phone}</h2>
        <h2 className="text-xs font-normal">{resumeInfoData?.email}</h2>
      </div>
      <hr
        className="mb-2 mt-1 border-[1.7px]"
        style={{ borderColor: resumeInfoData?.themeColor }}
      />
    </div>
  );
}

export default PersonalDetailsPreview;
