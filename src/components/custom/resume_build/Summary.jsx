import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import GlobalApi from "@/service/GlobalApi";
import { Brain, LoaderPinwheel } from "lucide-react";
import { geminiChatSession } from "@/service/Gemini";

function Summary({ enableNext, isNextEnabled }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState(resumeInfo?.attributes?.summary || "");
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const prompt =
    "Job Title: {jobTitle}, Genrate a 35-40 words lengthy summary for the given job title to put in resume. Give only 1 answer not multiple.";

  useEffect(() => {
    summary &&
      setResumeInfo({
        ...resumeInfo,
        attributes: {
          ...resumeInfo.attributes,
          summary: summary,
        },
      });
  }, [summary]);

  const GenerateSummaryUsingAI = async () => {
    setIsLoading(true);
    const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
    const result = await geminiChatSession.sendMessage(PROMPT);
    setSummary(result.response.candidates[0].content.parts[0].text);
    setIsLoading(false);
  };

  const onSave = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // updating on strapi backend
    const data = {
      data: {
        summary: summary,
      },
    };

    GlobalApi.UpdateResumeDetails(params?.resumeId, data).then(
      (response) => {
        enableNext(true);
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
      },
    );
  };

  return (
    <div>
      <div className="h-ful mt-5 rounded-md border-t-4 border-t-primary p-5 pt-3 shadow-md">
        <h2 className="text-xl font-bold">Summary</h2>
        <Form onSubmit={onSave} className="mt-4">
          <div className="flex items-end justify-between">
            <label className="text-sm">Add summary</label>
            <Button
              onClick={() => GenerateSummaryUsingAI()}
              type="button"
              variant="outline"
              size="sm"
              className="flex items-center justify-between gap-2 border-primary text-primary"
            >
              <Brain className="h-[20px] w-[20px]" />
              Generate with AI
            </Button>
          </div>
          <Textarea
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
              enableNext(false);
            }}
            className="mt-3 max-h-[300px] min-h-[150px] resize-none"
          />

          <div className="flex items-center justify-end">
            <Button
              disabled={isNextEnabled || isLoading}
              type="submit"
              className="mt-4"
            >
              {isLoading ? <LoaderPinwheel className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Summary;
