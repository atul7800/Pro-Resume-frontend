import React from "react";
import "./preview.css";

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
        <div key={index} className="experience-details mt-2">
          <h2 className="flex justify-between gap-2 text-sm font-bold">
            <span>{experience?.title}</span>
            <span>{experience?.companyName}</span>
          </h2>
          <h2 className="flex justify-between text-xs">
            {experience?.city}
            {experience?.city && experience?.state ? ", " : ""}
            {experience?.state}
            <span>
              {experience?.startDate}{" "}
              {experience?.startDate && experience?.endDate ? " to " : ""}
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </h2>
          {/* <p className="mt-1 text-xs">{experience?.workSummary}</p> */}
          <div
            className="experience-preview"
            style={{ listStyle: "disc" }}
            dangerouslySetInnerHTML={{ __html: experience?.workSummary }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
