import React from "react";

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="mt-7">
      <h2
        className="text-center text-lg font-bold"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr
        className="mt-1 border-[1px]"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
      {resumeInfo?.experiences.map((experience, index) => (
        <div key={index} className="mt-2">
          <h2 className="text-sm font-bold">{experience?.title}</h2>
          <h2 className="flex justify-between text-xs">
            {experience?.companyName}, {experience?.city}, {experience?.state}
            <span>
              {experience?.startDate} -{" "}
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </h2>
          <p className="mt-1 text-xs">{experience?.workSummery}</p>
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
