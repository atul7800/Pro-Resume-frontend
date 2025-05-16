import React, { useContext } from "react";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import "./preview.css";
import dummy from "@/data/dummy";

function ExperiencePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
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
      {resumeInfo?.attributes?.experiences.map((experience, index) => (
        <div key={index} className="experience-details mt-2">
          <h2 className="flex justify-between gap-2 text-lg font-bold">
            <span>{experience?.title}</span>
            <span>{experience?.companyName}</span>
          </h2>
          <h2
            className="flex justify-between text-sm font-medium italic"
            style={{ color: "#707070" }}
          >
            {experience?.city}
            {experience?.city && experience?.state ? ", " : ""}
            {experience?.state}
            <span>
              {experience?.startDate}
              {" to "}
              {experience?.endDate}
              {/* {experience?.startDate && experience?.endDate ? " to " : ""} */}
              {/* {experience?.currentlyWorking ? "Present" : experience?.endDate} */}
            </span>
          </h2>
          {/* <p className="mt-1 text-xs">{experience?.workSummary}</p> */}
          <div
            className="experience-preview"
            style={{ listStyle: "disc", fontSize: "16px" }}
            dangerouslySetInnerHTML={{ __html: experience?.workSummary }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
