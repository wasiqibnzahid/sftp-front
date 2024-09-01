import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="p-[11px] w-[160px] text-[13px] rounded-[4px] text-center tracking-[5px] text-primaryWhite avenir-light uppercase bg-primaryBlue"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
