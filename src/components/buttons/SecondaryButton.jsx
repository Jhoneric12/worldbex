import React from "react";

function SecondaryButton({ btnText }) {
  return (
    <button className="bg-gray-200 text-[#F4811F] rounded-lg w-full py-2 font-medium">
      {btnText}
    </button>
  );
}

export default SecondaryButton;
