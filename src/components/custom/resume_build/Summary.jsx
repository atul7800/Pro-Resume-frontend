import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import GlobalApi from "@/service/GlobalApi";

function Summary({ enableNext, isNextEnabled }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState("");
  const params = useParams();

  useEffect(() => {
    summary &&
      setResumeInfo({
        ...resumeInfo,
        summary: summary,
      });
  }, [summary]);

  const onSave = (e) => {
    e.preventDefault();
    enableNext(true);

    // updating on strapi backend
    const data = {
      data: {
        summary: summary,
      },
    };

    GlobalApi.UpdateResumeDetails(params?.resumeId, data).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  return (
    <div>
      <div className="h-ful mt-5 rounded-md border-t-4 border-t-primary p-5 pt-3 shadow-md">
        <h2 className="text-xl font-bold">Summary</h2>
        <Form onSubmit={onSave} className="mt-4">
          <div className="flex items-end justify-between">
            <label>Add summary</label>
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary"
            >
              Generate with AI
            </Button>
          </div>
          <Textarea
            onChange={(e) => {
              setSummary(e.target.value);
              enableNext(false);
            }}
            className="mt-3 max-h-[300px] min-h-[150px]"
          />

          <div className="flex items-center justify-end">
            <Button disabled={isNextEnabled} type="submit" className="mt-4">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Summary;
