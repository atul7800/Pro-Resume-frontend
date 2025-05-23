import React, { useState } from "react";
import PersonalDetails from "./resume_build/PersonalDetails";
import { LayoutGrid, LucideMoveLeft, LucideMoveRight } from "lucide-react";
import { Button } from "../ui/button";
import Summary from "./resume_build/Summary";
import Experience from "./resume_build/Experience";
import Abcd from "./resume_build/Abcd";
import Education from "./resume_build/Education";
import Skills from "./resume_build/Skills";
import Dashboard from "@/pages/dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

function ResumeBuildSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between">
        <Button variant="outline" className="flex gap-2" size="sm">
          <LayoutGrid /> Theme
        </Button>
        <div className="flex items-center justify-between gap-2">
          {activeFormIndex > 1 ? (
            <Button
              onClick={() => {
                if (activeFormIndex) {
                  if (activeFormIndex) {
                    setActiveFormIndex(activeFormIndex - 1);
                    setIsNextEnabled(true);
                  }
                }
              }}
              size="sm"
            >
              <LucideMoveLeft />
            </Button>
          ) : null}

          <Button
            disabled={!isNextEnabled}
            onClick={() => {
              setActiveFormIndex(activeFormIndex + 1);
              setIsNextEnabled(false);
            }}
            className="flex gap-2"
            size="sm"
          >
            Next <LucideMoveRight />
          </Button>
        </div>
      </div>
      {activeFormIndex == 1 ? (
        <PersonalDetails
          enableNext={(value) => setIsNextEnabled(value)}
          isNextEnabled={isNextEnabled}
        />
      ) : activeFormIndex == 2 ? (
        <Summary
          enableNext={(value) => setIsNextEnabled(value)}
          isNextEnabled={isNextEnabled}
        />
      ) : activeFormIndex == 3 ? (
        <Experience
          enableNext={(value) => setIsNextEnabled(value)}
          isNextEnabled={isNextEnabled}
        />
      ) : activeFormIndex == 4 ? (
        <Education
          enableNext={(value) => setIsNextEnabled(value)}
          isNextEnabled={isNextEnabled}
        />
      ) : activeFormIndex == 5 ? (
        <Skills
          enableNext={(value) => setIsNextEnabled(value)}
          isNextEnabled={isNextEnabled}
        />
      ) : activeFormIndex == 6 ? (
        navigate("/dashboard")
      ) : null}

      {/* {activeFormIndex == 1 ? (
        <Summary
          enableNext={(value) => setIsNextEnabled(value)}
          isNextEnabled={isNextEnabled}
        />
      ) : null} */}

      {/* Summary */}
      {/* Professional experience */}
      {/* Educational details */}
      {/* Skills */}
    </div>
  );
}

export default ResumeBuildSection;
