import React from "react";
import PersonalDetails from "./resume_build/PersonalDetails";
import { LayoutGrid, LucideMoveLeft, LucideMoveRight } from "lucide-react";
import { Button } from "../ui/button";

function ResumeBuildSection() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Button variant="outline" className="flex gap-2" size="sm">
          <LayoutGrid /> Theme
        </Button>
        <div className="flex items-center justify-between gap-2">
          <Button size="sm">
            <LucideMoveLeft />
          </Button>
          <Button className="flex gap-2" size="sm">
            Next <LucideMoveRight />
          </Button>
        </div>
      </div>
      {/* Personal details */}
      <PersonalDetails />
      {/* Summary */}
      {/* Professional experience */}
      {/* Educational details */}
      {/* Skills */}
    </div>
  );
}

export default ResumeBuildSection;
