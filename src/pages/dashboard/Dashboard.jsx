import AddResume from "@/components/custom/AddResume";
import ResumeCard from "@/components/custom/ResumeCard";
import GlobalApi from "@/service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetUserResumeList();
  }, [user]);

  const GetUserResumeList = () => {
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress).then(
      (response) => {
        setResumeList(response.data.data);
      },
      (error) => {
        console.log(error);
      },
    );
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="text-3xl font-bold">My Resume</h2>
      <p>Create you next resume using AI</p>
      <div className="mt-10 grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
        <AddResume resumeList={resumeList} />
        {resumeList.length > 0 &&
          resumeList.map((resume, index) => (
            <ResumeCard key={index} resume={resume} index={index} />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
