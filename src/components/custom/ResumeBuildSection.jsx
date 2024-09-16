import React, { useState } from "react";
import PersonalDetails from "./resume_build/PersonalDetails";
import { LayoutGrid, LucideMoveLeft, LucideMoveRight } from "lucide-react";
import { Button } from "../ui/button";

function ResumeBuildSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between">
        <Button variant="outline" className="flex gap-2" size="sm">
          <LayoutGrid /> Theme
        </Button>
        <div className="flex items-center justify-between gap-2">
          {activeFormIndex > 1 ? (
            <Button
              onClick={() =>
                activeFormIndex && setActiveFormIndex(activeFormIndex - 1)
              }
              size="sm"
            >
              <LucideMoveLeft />
            </Button>
          ) : null}

          <Button
            disabled={!isNextEnabled}
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
            className="flex gap-2"
            size="sm"
          >
            Next <LucideMoveRight />
          </Button>
        </div>
      </div>
      {/* Personal details */}
      <PersonalDetails enableNext={(value) => setIsNextEnabled(value)} />
      {/* Summary */}
      {/* Professional experience */}
      {/* Educational details */}
      {/* Skills */}
    </div>
  );
}

export default ResumeBuildSection;
