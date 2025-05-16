import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, LoaderPinwheel } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import RichTextEditor from "../reusable/RichTextEditor";
import GlobalApi from "@/service/GlobalApi";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";

function Experience({ enableNext, isNextEnabled }) {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const resumeInfoData = resumeInfo?.attributes;
  const formField = {
    title: "",
    companyName: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    workSummary: "",
  };

  const [experienceList, setExperienceList] = useState(
    resumeInfoData?.experiences?.length > 0
      ? resumeInfoData?.experiences
      : [formField],
  );

  useEffect(() => {
    // for local (context API)
    experienceList &&
      setResumeInfo({
        ...resumeInfo,
        attributes: {
          ...resumeInfo.attributes,
          ["experiences"]: experienceList,
        },
      });
  }, [experienceList]);

  const handleRichTextChange = (index, nameAndValue) => {
    enableNext(false);

    const newEntry = [...experienceList];
    const { name, value } = nameAndValue;
    newEntry[index][name] = value;
    setExperienceList(newEntry);
  };

  const handleInputChange = (index, e) => {
    enableNext(false);

    let { name, value } = e.target;

    if (name === "startDate" || name === "endDate") {
      const [year, month, day] = value.split("-");
      const formattedDate = `${day}-${month}-${year}`;
      value = formattedDate;
    }

    // Why can’t we directly work on experienceList?
    /* In React, state should be treated as immutable, meaning that it should not be modified    directly. Directly mutating the state (like experienceList) can lead to subtle bugs, such as React not re-rendering the component because it doesn't detect that the state has changed.
    If you were to directly modify experienceList, React would not recognize the changes since the reference to the array itself hasn't changed. React relies on changes to references of state objects to trigger a re-render. This is why you create a new copy, make changes to the copy, and then update the state with this new array. */
    const newEntry = [...experienceList];
    newEntry[index][name] = value;
    setExperienceList(newEntry);
  };

  const onSave = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const data = {
      data: {
        experiences: experienceList.map((exp) => ({
          __component: "experiences.experiences",
          ...exp,
        })),
      },
    };

    GlobalApi.UpdateResumeDetails(params?.resumeId, data).then(
      (response) => {
        console.log(response);
        enableNext(true);
        setIsLoading(false);
      },
      (error) => {
        console.log(error);
        setIsLoading(false);
      },
    );
  };

  const addMoreExperience = () => {
    setExperienceList([...experienceList, formField]);
  };

  const removeExperience = () => {
    setExperienceList(experienceList.slice(0, -1));
  };

  function convertToInputDateFormat(dateStr) {
    if (!dateStr) return "";

    const [day, month, year] = dateStr.split("-");
    return `${year}-${month}-${day}`; // "2025-05-11"
  }

  return (
    <div>
      <div className="h-ful mt-5 rounded-md border-t-4 border-t-primary p-5 pt-3 shadow-md">
        <h2 className="text-xl font-bold">Experience</h2>
        <Form onSubmit={onSave}>
          {experienceList.map((experience, index) => (
            <div
              key={index}
              className={`mt-4 grid grid-cols-2 gap-4 rounded-md border p-5 ${index != experienceList.length - 1 && "mb-7"}`}
            >
              <div>
                <label className="text-sm">Title</label>
                <Input
                  name="title"
                  value={experience.title}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="E.g. Software Engineer"
                  className="placeholder-gray-200"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Company Name</label>
                <Input
                  name="companyName"
                  value={experience.companyName}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="E.g. Xyz"
                  className="placeholder-gray-200"
                  required
                />
              </div>

              <div>
                <label className="text-sm">City</label>
                <Input
                  name="city"
                  value={experience.city}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="E.g. Bengaluru"
                  className="placeholder-gray-200"
                  required
                />
              </div>

              <div>
                <label className="text-sm">State</label>
                <Input
                  name="state"
                  value={experience.state}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="E.g. Karnataka"
                  className="placeholder-gray-200"
                  required
                />
              </div>

              <div>
                <label className="text-sm">Start Date</label>
                <Input
                  name="startDate"
                  value={convertToInputDateFormat(experience.startDate)}
                  onChange={(e) => handleInputChange(index, e)}
                  type="date"
                  className="placeholder-gray-200"
                  required
                />
              </div>

              <div>
                <label className="text-sm">End Date</label>
                <Input
                  name="endDate"
                  value={convertToInputDateFormat(experience.endDate)}
                  onChange={(e) => handleInputChange(index, e)}
                  type="date"
                  className="placeholder-gray-200"
                  required
                />
              </div>

              <div className="col-span-2">
                <RichTextEditor
                  index={index}
                  handleInput={(e) => handleRichTextChange(index, e)}
                  value={experience.workSummary}
                />
              </div>
            </div>
          ))}

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center justify-between gap-5">
              <Button
                onClick={() => addMoreExperience()}
                type="button"
                variant="outline"
                className="border-primary text-primary"
              >
                + Add More
              </Button>
              <Button
                onClick={() => removeExperience()}
                type="button"
                variant="outline"
                className="border-primary text-primary"
              >
                - Remove
              </Button>
            </div>

            <Button disabled={isNextEnabled || isLoading} type="submit">
              {isLoading ? <LoaderPinwheel className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Experience;
