import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dummy from "@/data/dummy";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import ResumeBuildSection from "./ResumeBuildSection";
import ResumePreviewSection from "./ResumePreviewSection";

function EditResume() {
  const params = useParams();

  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    setResumeInfo(dummy);
  }, []);

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2">
        {/* From Build Section */}
        <ResumeBuildSection />
        {/* Form Preview */}
        <ResumePreviewSection />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
