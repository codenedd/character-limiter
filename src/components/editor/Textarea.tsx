"use client";
import { EditorSettingsTypes } from "@/utils/types";
import React, { useRef, useState } from "react";
import { FaInfinity } from "react-icons/fa";

const DEFAULT_TEXTAREA_ROWS = 12;

interface Props {
  value: string;
  limit: number | null;
  settings: EditorSettingsTypes;
  onChange: (value: string) => void;
}

const Textarea = ({ value, limit, settings, onChange }: Props) => {
  const [length, setLength] = useState(0);
  const ref = useRef<HTMLTextAreaElement>(null);

  function handleChange(value: string) {
    setLength(value.length);
    onChange(value);
  }

  function autoExpand() {
    if (ref.current) {
      const lineHeight = parseInt(window.getComputedStyle(ref.current).lineHeight);
      ref.current.rows = DEFAULT_TEXTAREA_ROWS;
      const lines = Math.floor(ref.current.scrollHeight / lineHeight);
      if (lines > DEFAULT_TEXTAREA_ROWS) ref.current.rows = lines;
    }
  }

  const textInLimit = value.slice(0, limit ?? value.length);
  const textOverLimit = limit ? value.slice(limit) : "";

  return (
    <div className="border-2 border-primary-color focus-within:border-secondary-color">
      <div className="relative max-h-96 overflow-auto">
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onInput={autoExpand}
          rows={DEFAULT_TEXTAREA_ROWS}
          className="bg-transparent p-2 outline-none w-full resize-none overflow-hidden h-full"
          placeholder="Type here..."
          maxLength={!limit || settings.allowOverlength ? undefined : limit}
        ></textarea>
        <div className="absolute p-2 w-full top-0 -z-50 break-words">
          {makeTextBackground(textInLimit, settings.coloredTextBackground ? "bg-green-800" : "bg-transparent")}
          {textOverLimit && makeTextBackground(textOverLimit, settings.coloredTextBackground ? "bg-red-800" : "bg-transparent")}
        </div>
      </div>
      <div style={{ color: limit && length >= limit ? "red" : " " }} className="text-right px-1 py-2 flex justify-end">
        <span className="flex items-center justify-end px-1">
          {length}/{limit ? limit : <FaInfinity />}
        </span>{" "}
        {textOverLimit.length ? <span className="text-red-600">(-{textOverLimit.length})</span> : ""}
      </div>
    </div>
  );
};

function makeTextBackground(txt: string, color: string) {
  return txt.split("\n").map((text, index) => {
    if (index > 0) {
      return (
        <span key={index}>
          <br />
          <span className={`text-transparent ${color} whitespace-pre-wrap`}>{text}</span>
        </span>
      );
    }
    return (
      <span key={index} className={`text-transparent ${color} whitespace-pre-wrap`}>
        {text}
      </span>
    );
  });
}

export default Textarea;
