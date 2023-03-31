import React from "react";

function CheckboxInput({ name, options, onChangeValue }) {
  /* const ref = useRef(); */

  return (
    <>
      {options.map((option, index) => {
        return (
          <div className="text-stone-100" key={index}>
            <input
              /* ref={ref} */ type="checkbox"
              name={name}
              value={option}
              onChange={(e) => {
                if (e.target.checked) {
                  onChangeValue(option);
                }
              }}
            />
            <label for={option}>{option}</label>
          </div>
        );
      })}
    </>
  );
}

export default CheckboxInput;
