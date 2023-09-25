import React from "react";

export interface ContactInputData {
  title: string;
  placeholder: string;
  type: string;
  setName?: (value: string) => void;
}

export default function ContactInput({
  title,
  placeholder,
  type,
  setName,
}: ContactInputData) {
  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    if (setName) {
      setName(e.target.value);
    }
  }

  return (
    <div className="space-y-2 text-[#FFFFFE]">
      <h1>{title}</h1>
      <input
        onChange={(e) => handleName(e)}
        type={type}
        placeholder={`${placeholder}`}
        className="border w-full placeholder:text-white placeholder:opacity-30 border-opacity-30 focus:border-opacity-100 border-white bg-transparent py-3 px-4 rounded-2xl focus:outline-none"
      />
    </div>
  );
}
