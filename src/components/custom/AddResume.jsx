import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "../../service/GlobalApi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useUser } from "@clerk/clerk-react";

function AddResume() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const onCreate = () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        resumeTitle: resumeTitle,
        resumeId: uuid,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
      },
    };

    GlobalApi.CreateNewResume(data).then(
      (response) => {
        console.log(response);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      },
    );
  };

  return (
    <div>
      <div
        onClick={() => setIsDialogOpen(true)}
        className="hover:sca flex h-[280px] cursor-pointer items-center justify-center rounded-lg border border-dashed bg-secondary p-10 transition-all hover:shadow-md"
      >
        <PlusSquare />
      </div>
      {/* Dialog popup */}
      <Dialog open={isDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new resume</DialogTitle>
            <DialogDescription>
              <input
                className="my-2 h-[30px] w-full resize-none px-2 py-1"
                type="text"
                placeholder="Enter your resume title"
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>
            <div className="flex justify-end gap-5">
              <Button onClick={() => setIsDialogOpen(false)} variant="ghost">
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => onCreate()}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddResume;
