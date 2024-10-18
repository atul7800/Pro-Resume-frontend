import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { GenerateSummaryUsingAI } from "../../../service/CommonFunctions";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";

import { Brain, Loader, LoaderCircle, LoaderPinwheel } from "lucide-react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnUnderline,
  Separator,
  Toolbar,
  Editor,
  EditorProvider,
} from "react-simple-wysiwyg";

function RichTextEditor({ index, handleInput }) {
  const prompt =
    "Job Title: {jobTitle}, based on the job title generate a generic summary for my resume in 3-4 lines. Give only 1 answer not multiple.";

  const [experienceValue, setExperienceValue] = useState();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    handleInput(e);
    const { value } = e;

    setExperienceValue(value);
  };

  const GenerateWorkSummaryUsingAI = async (index) => {
    setIsLoading(true);
    const workSummary = await GenerateSummaryUsingAI(
      resumeInfo?.experiences[index].title,
      prompt,
    );
    const wSummary = { name: "workSummary", value: workSummary };
    handleInputChange(wSummary);
    setIsLoading(false);
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <label className="text-sm">Work Summary</label>
        <Button
          onClick={() => GenerateWorkSummaryUsingAI(index)}
          type="button"
          variant="outline"
          size="sm"
          className="flex items-center justify-between gap-2 border-primary text-primary"
        >
          {isLoading ? (
            <LoaderPinwheel className="animate-spin" />
          ) : (
            <>
              <Brain className="h-[20px] w-[20px]" /> Generate with AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          name="workSummary"
          value={experienceValue}
          onChange={(e) => handleInputChange(e.target)}
          disabled={isLoading}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <Separator />
          </Toolbar>
          {isLoading && <LoaderCircle className="animate-spin" />}
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
