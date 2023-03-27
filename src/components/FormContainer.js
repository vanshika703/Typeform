/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Input from "./Input";
import Question from "./Question";

const FormContainer = () => {
  // only used in intialization
  const formData = [
    {
      name: "firstName",
      question: "What's your first name?",
      value: "",
      required: true,
      type: "text",
      initalState: "",
    },
    {
      name: "lastName",
      question: "What's your last name?",
      value: "",
      required: false,
      regex: "",
      type: "text",
      initalState: "",
    },
  ];

  const [index, setIndex] = useState(0);
  const [formValues, setFormValues] = useState(formData);
  const [inputValue, setInputValue] = useState("");

  const onChangeValue = (value) => {
    setInputValue(value);
  };

  const handleSetInput = () => {
    if (formValues[index].required && !inputValue) {
      alert("Please enter");
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
    <div className="bg-black h-screen w-screen flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="w-2/5 h-1/5 flex flex-col justify-center items-start"
      >
        <p className="text-stone-100">{index + 1}</p>
        <Question
          question={formValues[index].question}
          required={formValues[index].required}
        />
        <Input
          placeholder={"Type your answer here..."}
          value={inputValue}
          onChangeValue={onChangeValue}
          name={formValues[index].name}
        />
        {console.log(inputValue)}
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
        {console.log("formvalue", formValues)}
      </form>
    </div>
  );
};

export default FormContainer;
