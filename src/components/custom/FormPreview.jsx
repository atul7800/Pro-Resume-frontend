import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import React, { useContext } from "react";

function FormPreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  return (
    <div>
      {/* Personal details */}
      {/* Summary */}
      {/* Professional experience */}
      {/* Educational details */}
      {/* Skills */}
      Form Preview
    </div>
  );
}

export default FormPreview;
