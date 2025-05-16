import Header from "@/components/custom/Header";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "../../../service/ResumeInfoContext";
import ResumePreviewSection from "../../custom/ResumePreviewSection";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../service/GlobalApi";

export default function DownloadResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const { resumeId } = useParams();

  useEffect(() => {
    GetResumeInfo();
  }, []);
  const GetResumeInfo = () => {
    GlobalApi.GetResumeById(resumeId).then((resp) => {
      setResumeInfo(resp.data.data);
    });
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div id="no-print" className="print:hidden">
        <div className="mx-10 my-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-medium">
            Your AI-Generated Resume is Ready!{" "}
          </h2>
          <p className="text-center text-gray-400">
            You can now download your resume or share your unique resume link
            with friends, family, or recruiters.{" "}
          </p>
          <div className="my-10 flex justify-between px-44">
            <Button onClick={handleDownload}>Download</Button>

            {/* <RWebShare
              data={{
                text: "Hello Everyone, This is my resume please open url to see it",
                url:
                  import.meta.env.VITE_BASE_URL +
                  "/my-resume/" +
                  resumeId +
                  "/view",
                title:
                  resumeInfo?.firstName +
                  " " +
                  resumeInfo?.lastName +
                  " resume",
              }}
              onClick={() => console.log("shared successfully!")}
            >
              {" "}
              <Button>Share</Button>
            </RWebShare> */}
          </div>
        </div>
      </div>
      <div className="mx-10 my-10 md:mx-20 lg:mx-36">
        <div id="print-area" className="print:block">
          <ResumePreviewSection />
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
}
