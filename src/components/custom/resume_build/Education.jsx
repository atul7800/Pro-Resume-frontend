import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import { LoaderPinwheel } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "@/service/GlobalApi";

function Education({ enableNext, isNextEnabled }) {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const resumeInfoData = resumeInfo?.attributes;
  const params = useParams();
  const formField = {
    universityName: "",
    degree: "",
    cgpa: 0,
    startDate: "",
    endDate: "",
    description: "",
  };

  const [educationalList, setEducationalList] = useState(
    resumeInfo?.attributes?.education?.length > 0
      ? resumeInfo.attributes.education
      : [formField],
  );

  useEffect(() => {
    educationalList &&
      setResumeInfo({
        ...resumeInfo,
        attributes: {
          ...resumeInfo.attributes,
          ["education"]: educationalList,
        },
      });
  }, [educationalList]);

  // const handleChange = (event, index) => {
  //   const newEntries = educationalList.slice();
  //   const { name, value } = event.target;
  //   newEntries[index][name] = value;
  //   setEducationalList(newEntries);
  // };

  const handleChange = (event, index) => {
    const newEntries = [...educationalList];
    const { name, value } = event.target;

    newEntries[index][name] = name === "cgpa" ? parseFloat(value) || "" : value;
    setEducationalList(newEntries);
  };

  const AddNewEducation = () => {
    setEducationalList([...educationalList, formField]);
  };

  const RemoveEducation = () => {
    setEducationalList((educationalList) => educationalList.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        education: educationalList.map((edu) => ({
          __component: "education.education",
          ...edu,
        })),
      },
    };

    GlobalApi.UpdateResumeDetails(params?.resumeId, data).then(
      (response) => {
        setLoading(false);
        enableNext(true);
      },
      (error) => {
        console.log("Education section error : ", error);
        setLoading(false);
      },
    );
  };

  return (
    <div className="mt-10 rounded-lg border-t-4 border-t-primary p-5 shadow-lg">
      <h2 className="text-lg font-bold">Education</h2>
      <div>
        {educationalList ? (
          educationalList.map((item, index) => (
            <div>
              <div className="my-5 grid grid-cols-2 gap-3 rounded-lg border p-3">
                <div className="col-span-2">
                  <label>University Name</label>
                  <Input
                    name="universityName"
                    onChange={(e) => handleChange(e, index)}
                    value={item?.universityName || ""}
                  />
                </div>
                <div>
                  <label>Degree</label>
                  <Input
                    name="degree"
                    onChange={(e) => handleChange(e, index)}
                    value={item?.degree || ""}
                  />
                </div>
                <div>
                  <label>CGPA</label>
                  <Input
                    type="number"
                    name="cgpa"
                    onChange={(e) => handleChange(e, index)}
                    value={item?.cgpa ?? ""}
                  />
                </div>
                <div>
                  <label>Start Date</label>
                  <Input
                    type="date"
                    name="startDate"
                    onChange={(e) => handleChange(e, index)}
                    value={item?.startDate || ""}
                  />
                </div>
                <div>
                  <label>End Date</label>
                  <Input
                    type="date"
                    name="endDate"
                    onChange={(e) => handleChange(e, index)}
                    value={item?.endDate || ""}
                  />
                </div>
                {/* <div className="col-span-2">
                  <label>Description</label>
                  <Textarea
                    name="description"
                    onChange={(e) => handleChange(e, index)}
                    value={item?.description || ""}
                  />
                </div> */}
              </div>
            </div>
          ))
        ) : (
          <h4>Education</h4>
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => AddNewEducation()}
            className="text-primary"
          >
            {" "}
            + Add More Education
          </Button>
          <Button
            variant="outline"
            onClick={RemoveEducation}
            className="text-primary"
          >
            {" "}
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={() => onSave()}>
          {loading ? <LoaderPinwheel className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Education;
