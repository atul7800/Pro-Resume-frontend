import React from "react";

function PersonalDetailsPreview({ resumeInfo }) {
  return (
    <div>
      <h2
        className="text-center text-xl font-bold"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {resumeInfo?.jobTitle}
      </h2>
      <h2 className="text-center text-xs font-normal">{resumeInfo?.address}</h2>
      <div className="mt-2 flex justify-between">
        <h2 className="text-xs font-normal">{resumeInfo?.phone}</h2>
        <h2 className="text-xs font-normal">{resumeInfo?.email}</h2>
      </div>
      <hr
        className="mb-2 mt-1 border-[1.7px]"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
    </div>
  );
}

export default PersonalDetailsPreview;
