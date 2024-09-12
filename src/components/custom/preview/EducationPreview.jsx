import React from "react";

function EducationPreview({ resumeInfo }) {
  return (
    <div className="mt-7">
      <h2
        className="text-center text-lg font-bold"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education
      </h2>
      <hr
        className="mt-1 border-[1px]"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
      {resumeInfo?.educations.map((education, index) => (
        <div key={index} className="mt-2">
          <h2 className="text-sm font-bold">{education?.universityName}</h2>
          <h2 className="flex justify-between text-xs">
            {education?.degree} in {education?.major}
            <span>
              {education?.startDate} - {education?.endDate}
            </span>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default EducationPreview;
