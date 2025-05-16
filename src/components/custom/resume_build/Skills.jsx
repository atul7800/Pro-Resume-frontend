import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import { LoaderPinwheel } from "lucide-react";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import GlobalApi from "@/service/GlobalApi";
import { useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function Skills() {
  const { resumeId } = useParams();
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const formField = {
    name: "",
    rating: 0,
  };

  const [skillsList, setSkillsList] = useState(
    resumeInfo?.attributes?.skill?.length > 0
      ? resumeInfo.attributes.skill
      : [formField],
  );

  useEffect(() => {
    //resumeInfo && setSkillsList(resumeInfo?.skills);
    skillsList &&
      setResumeInfo({
        ...resumeInfo,
        attributes: {
          ...resumeInfo.attributes,
          ["skill"]: skillsList,
        },
      });
    console.log("SkillList updated : ", skillsList);
  }, [skillsList]);

  const handleChange = (index, name, value) => {
    const newEntries = [...skillsList];

    newEntries[index][name] = value;
    setSkillsList(newEntries);
  };

  const AddNewSkills = () => {
    setSkillsList([...skillsList, formField]);
  };
  const RemoveSkills = () => {
    setSkillsList((skillsList) => skillsList.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        skill: skillsList.map((skill) => ({
          __component: "skill.skill",
          ...skill,
        })),
      },
    };

    GlobalApi.UpdateResumeDetails(resumeId, data).then(
      (resp) => {
        setLoading(false);
        enableNext(true);
      },
      (error) => {
        console.log("Skill section error : ", error);
        setLoading(false);
      },
    );
  };

  useEffect(() => {
    skillsList &&
      setResumeInfo({
        ...resumeInfo,
        attributes: {
          ...resumeInfo.attributes,
          ["skill"]: skillsList,
        },
      });
  }, [skillsList]);

  return (
    <div className="mt-10 rounded-lg border-t-4 border-t-primary p-5 shadow-lg">
      <h2 className="text-lg font-bold">Skills</h2>
      <p>Add Your top professional key skills</p>

      <div>
        {skillsList?.length > 0 ? (
          skillsList.map((item, index) => (
            <div className="mb-2 flex justify-between rounded-lg border p-3">
              <div>
                <label className="text-xs">Name</label>
                <Input
                  className="w-full"
                  defaultValue={item.name}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </div>
              <Rating
                style={{ maxWidth: 120 }}
                value={item.rating}
                onChange={(v) => handleChange(index, "rating", v)}
              />
            </div>
          ))
        ) : (
          <h2>Skills</h2>
        )}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewSkills}
            className="text-primary"
          >
            {" "}
            + Add More Skill
          </Button>
          <Button
            variant="outline"
            onClick={RemoveSkills}
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
