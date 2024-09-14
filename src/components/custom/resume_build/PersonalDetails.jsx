import { Input } from "@/components/ui/input";
import React from "react";
import { Form } from "react-router-dom";

function PersonalDetails() {
  return (
    <div>
      <div className="h-ful mt-5 rounded-md border-t-4 border-t-primary p-5 shadow-md">
        <h2 className="text-xl font-bold">Personal Details</h2>
        <h2>Get started with the basic information</h2>

        <Form>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm">First Name</label>
              <Input name="firstName" required />
            </div>
            <div>
              <label className="text-sm">Last Name</label>
              <Input name="lastName" required />
            </div>
            <div className="col-span-2">
              <label className="text-sm">Job Title</label>
              <Input required name="jobTitle" />
            </div>
            <div className="col-span-2">
              <label className="text-sm">Address</label>
              <Input required name="address" />
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <Input required name="phone" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <Input required name="email" />
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default PersonalDetails;
