import React, { useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnUnderline,
  Separator,
  Toolbar,
  Editor,
  EditorProvider,
} from "react-simple-wysiwyg";

function RichTextEditor({ handleInput }) {
  const [value, setValue] = useState();

  const handleInputChange = (e) => {
    handleInput(e);
    setValue(e.target.value);
  };

  return (
    <div>
      <EditorProvider>
        <Editor
          name="workSummary"
          value={value}
          onChange={(e) => handleInputChange(e)}
        >
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <Separator />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;
