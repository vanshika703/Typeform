import React, { useEffect } from "react";

function RadioInput({ value, name, options, onChangeValue }) {
  useEffect(() => {
    console.log("Radio", value);
  }, [value]);

  return (
    <>
      {options.map((option, i) => {
        return (
          <div
            className={
              "w-2/5 text-stone-100  m-1 p-2 border-stone-100 rounded-md hover:bg-stone-700" +
              (value === option ? " border-[3px]" : " border-[1px]")
            }
            onClick={() => onChangeValue(option)}
          >
            <input type="radio" name={name} value={option} className="hidden" />
            <label className="hover:cursor-pointer" for={option}>
              <span
                className={
                  "border-[1px] mr-2 px-[6px] border-stone-100 rounded-sm " +
                  (value === option
                    ? "bg-stone-100 text-black"
                    : "bg-transparent")
                }
              >
                {(i + 10).toString(36).toUpperCase()}
              </span>
              {option}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default RadioInput;
