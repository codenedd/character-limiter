import React from "react";

interface Props {
  text: string;
}

const Counter = ({ text }: Props) => {
  const words = handleText(text);
  function handleText(text: string) {
    const words = text
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ")
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
      .split(" ");
    if (words.length === 1 && words[0] === "") return [];
    return words;
  }

  return (
    <div className="flex flex-col lg:flex-row border-2 border-primary-color">
      <CounterElement label="Characters" value={text.length} />
      <CounterElement label="Words" value={words.length} />
      <CounterElement label="Unique words" value={new Set(words).size} />
      <CounterElement label="Paragraphs" value={text.length ? text.split("\n").filter((txt) => txt !== "").length : 0} />
    </div>
  );
};

interface CounterElementProps {
  label: string;
  value: number;
}

const CounterElement = ({ label, value }: CounterElementProps) => {
  return (
    <div className="flex flex-1 gap-4 p-4 border-b-2 justify-between border-primary-color items-center last:border-r-0 last:border-b-0 lg:border-r-2 lg:border-b-0">
      <h3>{label}</h3>
      <span className="text-3xl font-bold">{value}</span>
    </div>
  );
};

export default Counter;
