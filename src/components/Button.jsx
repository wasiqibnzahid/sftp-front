import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="avenir-light w-[160px] rounded-[4px] bg-primaryBlue p-[11px] text-center text-[13px] uppercase tracking-[5px] text-primaryWhite"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
