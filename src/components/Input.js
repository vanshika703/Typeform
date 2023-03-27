import React from "react";

export default function Input({ placeholder, value, onChangeValue }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
      placeholder={placeholder}
      className="mt-2 my-4 p-2 w-full bg-inherit border-b-[1px] text-stone-100 border-stone-600 focus:outline-none focus:border-b-[2px] focus:border-stone-100 placeholder:text-stone-500"
    />
  );
}
