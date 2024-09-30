import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderPinwheel } from "lucide-react";
import React from "react";
import { Form } from "react-router-dom";

function Experience({ enableNext, isNextEnabled }) {
  //const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = () => {
    enableNext(false);
    console.log("Handle input field");
  };

  const onSave = (e) => {
    e.preventDefault();
    enableNext(true);
  };

  return (
    <div>
      <div className="h-ful mt-5 rounded-md border-t-4 border-t-primary p-5 pt-3 shadow-md">
        <h2 className="text-xl font-bold">Experience</h2>
        <Form onSubmit={onSave}>
          <div className="mt-4 grid grid-cols-2 gap-4 rounded-md border p-5">
            <div>
              <label>Title</label>
              <Input
                name="title"
                onChange={handleInputChange}
                placeholder="E.g. Software Engineer"
                className="placeholder-gray-200"
              />
            </div>

            <div>
              <label>Company Name</label>
              <Input
                name="companyName"
                onChange={handleInputChange}
                placeholder="E.g. Xyz"
                className="placeholder-gray-200"
              />
            </div>

            <div>
              <label>City</label>
              <Input
                name="city"
                onChange={handleInputChange}
                placeholder="E.g. Bengaluru"
                className="placeholder-gray-200"
              />
            </div>

            <div>
              <label>State</label>
              <Input
                name="state"
                onChange={handleInputChange}
                placeholder="E.g. Karnataka"
                className="placeholder-gray-200"
              />
            </div>

            <div>
              <label>Start Date</label>
              <Input
                name="startDate"
                onChange={handleInputChange}
                type="date"
                className="placeholder-gray-200"
              />
            </div>

            <div>
              <label>End Date</label>
              <Input
                name="endDate"
                onChange={handleInputChange}
                type="date"
                className="placeholder-gray-200"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <Button
              type="button"
              variant="outline"
              className="border-primary text-primary"
            >
              + Add
            </Button>
            <Button
              disabled={isNextEnabled}
              onChange={handleInputChange}
              type="submit"
            >
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
