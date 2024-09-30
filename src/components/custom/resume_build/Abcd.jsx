import { Button } from "@/components/ui/button";
import React from "react";
import { Form } from "react-router-dom";

function Abcd({ enableNext, isNextEnabled }) {
  // const onSave = (e) => {
  //   e.preventDefault();
  //   enableNext(true);
  // };

  const onSave = (e) => {
    e.preventDefault();
    enableNext(true);
  };

  return (
    <div>
      <Form onSubmit={onSave}>
        <h2>ABCD</h2>
        <div className="mt-5 flex items-center justify-end">
          <Button disabled={isNextEnabled} type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Abcd;
