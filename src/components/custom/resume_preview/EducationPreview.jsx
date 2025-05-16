import React, { useContext } from "react";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";

function EducationPreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
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
      {resumeInfo?.attributes?.education?.length > 0 ? (
        resumeInfo?.attributes?.education.map((education, index) => (
          <div key={index} className="mt-2">
            <h2 className="flex justify-between">
              {education?.universityName}
              <span>
                {education?.startDate} - {education?.endDate}
              </span>
            </h2>
            <h2 className="flex justify-between text-sm font-bold">
              {education?.degree}
              <span>
                {education?.cgpa} {"CGPA"}
              </span>
            </h2>
          </div>
        ))
      ) : (
        <h2>Education list</h2>
      )}
    </div>
  );
}

export default EducationPreview;
