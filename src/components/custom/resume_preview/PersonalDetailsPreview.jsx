import React, { useContext } from "react";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import { Phone, Mail } from "lucide-react";

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
      <h2
        style={{ color: "#707070" }}
        className="text-center text-sm font-medium italic"
      >
        {resumeInfoData?.address}
      </h2>
      <div
        style={{ color: "#707070" }}
        className="mt-5 flex justify-between italic"
      >
        <h2 className="flex items-center gap-1 text-sm font-medium">
          <span>
            <Phone size={14} />
          </span>
          {resumeInfoData?.phone}
        </h2>
        <h2 className="flex items-center gap-1 text-sm font-medium">
          <span>
            <Mail size={14} />
          </span>
          {resumeInfoData?.email}
        </h2>
      </div>
      <hr
        className="mb-2 mt-1 border-[1.7px]"
        style={{ borderColor: resumeInfoData?.themeColor }}
      />
    </div>
  );
}

export default PersonalDetailsPreview;
