import React from "react";

function SkillsPreview({ resumeInfo }) {
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
        {resumeInfo?.skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3">
            <h2 className="text-sm">
              <span style={{ whiteSpace: "nowrap" }}>{skill?.name}</span>
            </h2>
            <div className="h-4 w-[120px] bg-gray-200">
              <div
                className="flex h-4 items-center justify-center text-[10px] font-thin text-white"
                style={{
                  width: skill?.rating + "%",
                  backgroundColor: resumeInfo?.themeColor,
                }}
              >
                {skill?.rating + "%"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
