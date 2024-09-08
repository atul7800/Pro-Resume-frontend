import AddResume from "@/components/custom/AddResume";
import React from "react";

function Dashboard() {
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="text-3xl font-bold">My Resume</h2>
      <p>Create you next resume using AI</p>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <AddResume />
      </div>
    </div>
  );
}

export default Dashboard;
