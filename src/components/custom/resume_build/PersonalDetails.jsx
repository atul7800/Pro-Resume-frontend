import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlobalApi from "@/service/GlobalApi";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import { LoaderPinwheel } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";

function PersonalDetails({ enableNext, isNextEnabled }) {
  // context to save the data
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onSave = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // updating on strapi backend
    const data = {
      data: formData || resumeInfo?.attributes,
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

  const handleInputChange = (e) => {
    enableNext(false);
    const { name, value } = e.target;

    // for local (context API)
    setResumeInfo({
      ...resumeInfo,
      attributes: {
        ...resumeInfo.attributes,
        [name]: value,
      },
    });

    // for strapi backend
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="h-ful mt-5 rounded-md border-t-4 border-t-primary p-5 pt-3 shadow-md">
        <h2 className="text-xl font-bold">Personal Details</h2>

        <Form onSubmit={onSave}>
          <div className="mt-4 grid grid-cols-2 gap-4 rounded-md border p-5">
            <div>
              <label className="text-sm">First Name</label>
              <Input
                defaultValue={resumeInfo?.attributes?.firstName}
                onChange={handleInputChange}
                name="firstName"
                required
              />
            </div>
            <div>
              <label className="text-sm">Last Name</label>
              <Input
                defaultValue={resumeInfo?.attributes?.lastName}
                onChange={handleInputChange}
                name="lastName"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="text-sm">Job Title</label>
              <Input
                defaultValue={resumeInfo?.attributes?.jobTitle}
                onChange={handleInputChange}
                required
                name="jobTitle"
              />
            </div>
            <div className="col-span-2">
              <label className="text-sm">Address</label>
              <Input
                defaultValue={resumeInfo?.attributes?.address}
                onChange={handleInputChange}
                required
                name="address"
              />
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <Input
                defaultValue={resumeInfo?.attributes?.phone}
                onChange={handleInputChange}
                required
                name="phone"
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <Input
                defaultValue={resumeInfo?.attributes?.email}
                onChange={handleInputChange}
                required
                name="email"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-end">
            <Button disabled={isNextEnabled || isLoading} type="submit">
              {isLoading ? <LoaderPinwheel className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default PersonalDetails;
