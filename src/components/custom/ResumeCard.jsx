import { Download } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ResumeCard({ resume, index }) {
  return (
    <div className="flex h-[280px] cursor-pointer flex-col justify-center rounded-lg bg-gradient-to-b from-pink-100 via-purple-200 to-blue-200 p-2 shadow-primary transition-all hover:scale-105 hover:shadow-md">
      <div className="flex justify-end">
        <Link to={"/dashboard/resume/" + resume.id + "/resume-download"}>
          <Download />
        </Link>
      </div>
      <Link
        className="flex h-full items-center justify-center"
        to={"/dashboard/resume/" + resume.id + "/edit"}
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <img src="/cv.png" width={80} height={80} />
          <p className="text-lg font-semibold">
            {resume.attributes.resumeTitle}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ResumeCard;
