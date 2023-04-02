import React from "react";

function CheckboxInput({ name, options, onChangeValue, removeValue, value }) {
  /* const ref = useRef(); */

  const handleClick = (e, option) => {
      if (e.target.checked) {
        onChangeValue(option);
      }
      else removeValue(option);
      
  };

  return (
    <>
      {options.map((option, index) => {
        return (
          <div
            className="text-stone-100 w-4/5 sm:w-3/5 m-1 p-2 border-[1px] border-stone-100 rounded-md hover:bg-stone-700"
            key={index}
          >
            <input
              className="hidden"
              type="checkbox"
              id={option}
              name={name}
              value={option}
              onChange={(e) => handleClick(e, option)}
            />
            <label className="hover:cursor-pointer" for={option}>
              <span
                className={
                  "border-[1px] mr-2 px-[6px] border-stone-100 rounded-sm " +
                  (value.includes(option)
                    ? "bg-white text-black"
                    : "bg-black text-white")
                }
              >
                {(index + 10).toString(36).toUpperCase()}
              </span>
              {option}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default CheckboxInput;
