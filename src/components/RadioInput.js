import React from "react";

function RadioInput({ name, options }) {
  return (
    <>
      {options.map((option) => {
        return (
          <div className="text-stone-100">
            <input type="radio" name={name} value={option} />
            <label for={option}>{option}</label>
          </div>
        )
      })}
    </>
  );
}

export default RadioInput;
