import React from "react";

export default function Question({ question, required }) {
  return (
    <div className="flex items-center justify-center">
      <h2 className="text-stone-100 text-xl font-medium">{question}
      {required ? <span className="text-stone-100" >*</span> : null}
      </h2>
    </div>
  );
}
