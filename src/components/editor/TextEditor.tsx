"use client";
import React, { useState } from "react";
import Textarea from "./Textarea";
import SelectLimit from "./SelectLimit";
import Counter from "./Counter";
import EditorSettings from "./EditorSettings";
import { EditorSettingsTypes } from "@/utils/types";

const TextEditor = () => {
  const [currentLimit, setCurrentLimit] = useState<number | null>(280);
  const [text, setText] = useState("");
  const [editorSettings, setEditorSettings] = useState<EditorSettingsTypes>({ allowOverlength: false, coloredTextBackground: true });

  return (
    <div className="flex flex-col p-4 max-w-screen-lg mx-auto gap-4">
      <h2 className="text-2xl">Enter your text below</h2>
      <Textarea value={text} settings={editorSettings} onChange={(value) => setText(value)} limit={currentLimit} />
      <div className="flex flex-col gap-4">
        <SelectLimit onChange={(value) => setCurrentLimit(value)} />
        <Counter text={text} />
        <EditorSettings settings={editorSettings} onChange={(target) => setEditorSettings({ ...editorSettings, ...target })} />
      </div>
    </div>
  );
};

export default TextEditor;
