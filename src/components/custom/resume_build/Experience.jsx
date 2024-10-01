import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderPinwheel } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import RichTextEditor from "../reusable/RichTextEditor";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";

function Experience({ enableNext, isNextEnabled }) {
  //const [isLoading, setIsLoading] = useState(false);

  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const formField = {
    title: "",
    companyName: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    workSummary: "",
  };

  const [experienceList, setExperienceList] = useState([formField]);

  const handleRichTextChange = (index, e) => {
    enableNext(false);

    const newEntry = [...experienceList];
    const { name, value } = e.target;
    newEntry[index][name] = value;
    setExperienceList(newEntry);
  };

  const handleInputChange = (index, e) => {
    enableNext(false);

    const newEntry = [...experienceList];
    const { name, value } = e.target;
    newEntry[index][name] = value;
    setExperienceList(newEntry);
  };

  useEffect(() => {
    experienceList &&
      setResumeInfo({ ...resumeInfo, ["experiences"]: experienceList });
    console.log(resumeInfo);
  }, [experienceList]);

  const onSave = (e) => {
    e.preventDefault();
    enableNext(true);
  };

  const addMoreExperience = () => {
    setExperienceList([...experienceList, formField]);
  };

  const removeExperience = () => {
    setExperienceList(experienceList.slice(0, -1));
  };

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
                  onChange={(e) => handleInputChange(index, e)}
                  type="date"
                  className="placeholder-gray-200"
                  required
                />
              </div>

              <div className="col-span-2">
                <label className="text-sm">Work Summary</label>
                <RichTextEditor
                  handleInput={(e) => handleRichTextChange(index, e)}
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

            <Button disabled={isNextEnabled} type="submit">
              Save
              {/* {isLoading ? <LoaderPinwheel className="animate-spin" /> : "Save"} */}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Experience;
