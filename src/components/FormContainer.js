/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Input from "./Input";
import Question from "./Question";
import { formData } from "../utils/constants";
import logo from "../utils/img/logo.png";
import StartForm from "./StartForm";
import Select from "./Select";
import RadioInput from "./RadioInput";
import CheckboxInput from "./CheckboxInput";

const FormContainer = () => {
  const [index, setIndex] = useState(0);
  const [formValues, setFormValues] = useState(formData);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const onChangeValue = (value) => {
    setError("");
    setInputValue(value);
  };

  const handleSetInput = () => {
    if (formValues[index].required && !inputValue) {
      setError("Please fill this in");
      return;
    }

    const newData = [...formValues];
    newData[index].value = inputValue;
    setInputValue("");
    setFormValues(newData);
    if (index !== formValues.length - 1) setIndex(index + 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-black h-screen w-screen flex items-center justify-center">
        <nav>
          <img
            alt="logo"
            src={logo}
            className="w-24 h-6 absolute top-5 left-5"
          />
        </nav>
        <form
          onSubmit={onSubmit}
          className="w-2/5 h-1/5 flex flex-col justify-center items-start"
        >
          <p className="text-stone-100">{index + 1}</p>
          <Question
            question={formValues[index].question}
            required={formValues[index].required}
          />
          {(() => {
            switch (formValues[index].fieldType) {
              case "infoPage":
                return <StartForm />;
              case "input":
                return (
                  <Input
                    placeholder={"Type your answer here..."}
                    value={inputValue}
                    onChangeValue={onChangeValue}
                    name={formValues[index].name}
                    type={formValues[index].type}
                  />
                );
              case "select":
                return <Select />;
              case "radioInput":
                return (
                  <RadioInput
                    name={formValues[index].name}
                    options={formValues[index].options}
                  />
                );

              case "checkboxInput":
                return (
                  <CheckboxInput
                    name={formValues[index].name}
                    options={formValues[index].options}
                  />
                );
              case "endPage":
                return;
              default:
                return;
            }
          })()}

          {console.log(inputValue)}
          {error ? (
            <div className=" flex items-center text-xs text-red-800 bg-red-100 p-1">
              <svg
                className="left mr-1"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0080 446.25h340.89a32 32 0 0028.18-47.17zm-198.6-1.83a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.95a21.73 21.73 0 0121.5-22.69h.21a21.74 21.74 0 0121.73 22.7z"></path>
              </svg>
              <p>{error}</p>
            </div>
          ) : (
            <button
              className="bg-blue-600 py-1 px-3 rounded-md text-md text-stone-100 font-medium flex justify-center items-center hover:bg-blue-500"
              onClick={handleSetInput}
            >
              OK{" "}
              <svg
                className="inline ml-1"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
              </svg>
            </button>
          )}

          {console.log("formvalue", formValues)}
        </form>
      </div>
    </>
  );
};

export default FormContainer;
