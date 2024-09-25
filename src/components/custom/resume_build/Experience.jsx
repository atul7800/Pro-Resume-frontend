import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderPinwheel } from "lucide-react";
import React from "react";
import { Form } from "react-router-dom";

function Experience() {
  //const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = () => {
    console.log("Handle input field");
  };

  return (
    <div>
      <div className="h-ful mt-5 rounded-md border-t-4 border-t-primary p-5 pt-3 shadow-md">
        <h2 className="text-xl font-bold">Experience</h2>
        <Form>
          <div className="mt-4 grid grid-cols-2 rounded-md border p-5">
            <div className="">
              <label className="text-sm">Title</label>
              <Input
                name="title"
                onChange={handleInputChange}
                placeholder="Software Engineer"
                className="placeholder-gray-200"
                required
              />
            </div>
          </div>
          <div>
            <Button variant="outline" className="border-primary text-primary">
              + Add More Experience
            </Button>
            <Button>
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
