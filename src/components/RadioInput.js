import React, { useEffect } from "react";

function RadioInput({ value, name, options, onChangeValue }) {
  useEffect(() => {
    // console.log("Radio", value);
  }, [value]);

  return (
    <>
      {options.map((option) => {
        return (
          <div className="text-stone-100" onClick={() => onChangeValue(option)}>
            <input type="radio" name={name} value={option} />
            <label for={option}>{option}</label>
          </div>
        );
      })}
    </>
  );
}

export default RadioInput;
