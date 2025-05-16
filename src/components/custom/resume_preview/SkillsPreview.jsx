import React, { useContext } from "react";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";

function SkillsPreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div className="mt-7">
      <h2
        className="text-center text-lg font-bold"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <hr
        className="mt-1 border-[1px]"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
      <div className="mt-2 grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
        {resumeInfo?.attributes?.skill?.length > 0 ? (
          resumeInfo?.attributes?.skill.map((skill, index) => (
            <div key={index} className="flex items-center gap-3">
              <h2 className="text-sm">
                <span style={{ whiteSpace: "nowrap" }}>{skill?.name}</span>
              </h2>
              <div className="h-4 w-[120px] overflow-hidden border border-black bg-white">
                <div
                  className="flex h-4 items-center justify-center py-1 text-[12px] text-white print:bg-black"
                  style={{
                    width: skill?.rating * 20 + "%",
                    backgroundColor: "black",
                  }}
                >
                  {skill?.rating * 20 + "%"}
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>Skills</h2>
        )}
      </div>
    </div>
  );
}

export default SkillsPreview;
