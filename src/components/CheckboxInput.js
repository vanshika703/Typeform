import React from "react";

function CheckboxInput({ name, options }) {
  return (
    <>
      {options.map((option) => {
        return (
          <div className="text-stone-100">
            <input type="checkbox" name={name} value={option} />
            <label for={option}>{option}</label>
          </div>
        )
      })}
    </>
  );
}

export default CheckboxInput;
