import React from "react";
import { useParams } from "react-router-dom";

function EditResume() {
  const params = useParams();
  console.log(params);
  return <div>Edit Resume</div>;
}

export default EditResume;
