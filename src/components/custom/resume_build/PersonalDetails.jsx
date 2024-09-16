import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GlobalApi from "@/service/GlobalApi";
import { ResumeInfoContext } from "@/service/ResumeInfoContext";
import React, { useContext, useState } from "react";
import { Form, useParams } from "react-router-dom";

function PersonalDetails({ enableNext }) {
  // context to save the data
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [formData, setFormData] = useState();

  const onSave = (e) => {
    e.preventDefault();
    enableNext(true);

    // updating on strapi backend
    const data = {
      data: formData,
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

  const handleInputChange = (e) => {
    enableNext(false);
    const { name, value } = e.target;

    // for local (context API)
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });

    // for strapi backend
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="h-ful mt-5 rounded-md border-t-4 border-t-primary p-5 shadow-md">
        <h2 className="text-xl font-bold">Personal Details</h2>

        <Form onSubmit={onSave}>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">First Name</label>
              <Input onChange={handleInputChange} name="firstName" required />
            </div>
            <div>
              <label className="text-sm">Last Name</label>
              <Input onChange={handleInputChange} name="lastName" required />
            </div>
            <div className="col-span-2">
              <label className="text-sm">Job Title</label>
              <Input onChange={handleInputChange} required name="jobTitle" />
            </div>
            <div className="col-span-2">
              <label className="text-sm">Address</label>
              <Input onChange={handleInputChange} required name="address" />
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <Input onChange={handleInputChange} required name="phone" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <Input onChange={handleInputChange} required name="email" />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-end">
            <Button onChange={handleInputChange} type="submit">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default PersonalDetails;
