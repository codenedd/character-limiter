"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const options = [
  { icon: <FaTwitter />, label: "Twitter Post", value: "280" },
  { icon: <FaTwitter />, label: "Twitter Post (premium)", value: "25000" },
  { icon: <FaFacebook />, label: "Facebook Post", value: "63206" },
  { icon: <FaInstagram />, label: "Instagram Post", value: "2200" },
  { icon: <FaDiscord />, label: "Discord Message", value: "2000" },
  { label: "Custom Limit", value: "custom" },
];

interface Props {
  onChange: (value: number) => void;
}

const SelectLimit = ({ onChange }: Props) => {
  const [selectValue, setSelectValue] = useState(options[0]);
  const [selectOpen, setSelectOpen] = useState(false);
  const [customLimit, setCustomLimit] = useState(100);

  function setNewSelectedValue(index: number) {
    setSelectValue(options[index]);
    setSelectOpen(false);
    onChange(options[index].value === "custom" ? customLimit : Number(options[index].value));
  }

  function setNewCustomLimit(customLimit: number) {
    setCustomLimit(customLimit);
    onChange(customLimit);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <div
          onClick={() => setSelectOpen(!selectOpen)}
          className="flex justify-between select-none items-center p-4 border-2 border-primary-color cursor-pointer hover:border-secondary-color"
        >
          <span className="flex items-center gap-2">
            <span className="text-2xl">{selectValue.icon}</span> {selectValue.label}
          </span>
          <IoMdArrowDropdown className="text-lg transition-all" style={{ transform: selectOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
        </div>
        {selectOpen && (
          <div className="border-2 bg-background-color border-primary-color absolute top-16 w-full max-h-64 overflow-auto">
            {options.map((option, index) => (
              <span onClick={() => setNewSelectedValue(index)} key={index} id={`${index}`} className="flex gap-2 items-center p-4 hover:bg-secondary-color cursor-pointer">
                <span className="text-2xl">{option.icon}</span> {option.label} ({option.value} characters)
              </span>
            ))}
          </div>
        )}
      </div>
      {selectValue.value === "custom" && (
        <div className="flex flex-col gap-1 select-none p-4 border-2 border-primary-color">
          <label htmlFor="custom-limit">Enter custom limit</label>
          <input
            name="custom-limit"
            type="number"
            value={customLimit}
            onChange={(e) => setNewCustomLimit(Number(e.target.value))}
            className="bg-transparent border-b-2 border-secondary-color p-2 outline-none focus:bg-secondary-color/25"
          />
        </div>
      )}
    </div>
  );
};

export default SelectLimit;
