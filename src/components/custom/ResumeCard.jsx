import { NotebookIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function ResumeCard({ resume, index }) {
  return (
    <Link to={"/dashboard/resume/" + resume.attributes.resumeId + "/edit"}>
      <div className="flex h-[280px] cursor-pointer items-center justify-center rounded-lg border border-primary bg-secondary p-14 shadow-primary transition-all hover:scale-105 hover:shadow-md">
        <p>{resume.attributes.resumeTitle}</p>
      </div>
    </Link>
  );
}

export default ResumeCard;
