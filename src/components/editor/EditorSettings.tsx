import { EditorSettingsTypes } from "@/utils/types";
import React from "react";
import { FaCheck } from "react-icons/fa";

interface Props {
  settings: EditorSettingsTypes;
  onChange: <T extends keyof EditorSettingsTypes>(target: { [K in T]: EditorSettingsTypes[K] }) => void;
}

const EditorSettings = ({ settings, onChange }: Props) => {
  return (
    <div className="p-4 border-2 border-primary-color flex flex-col lg:flex-row gap-6">
      <InputCheck checked={settings.allowOverlength} onChange={(e) => onChange({ allowOverlength: e.target.checked })} name="allow-overlength" aria-label="Allow overlength" />
      <InputCheck
        checked={settings.coloredTextBackground}
        onChange={(e) => onChange({ coloredTextBackground: e.target.checked })}
        name="color-text"
        aria-label="Colored text background"
      />
    </div>
  );
};

const InputCheck = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className="flex gap-2 justify-between items-center select-none">
      {props["aria-label"]}
      <div className="flex justify-center items-center min-w-6 min-h-6 border-2 border-primary-color cursor-pointer hover:border-text-color">
        {props.checked && <FaCheck className="text-green-600" />}
        <input className="hidden" type="checkbox" {...props} />
      </div>
    </label>
  );
};

export default EditorSettings;
