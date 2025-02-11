import React from "react";

function PrimaryButton({ btnText }) {
  return (
    <button className="text-white bg-[#F4811F] rounded-lg w-full py-2 font-medium">
      {btnText}
    </button>
  );
}

export default PrimaryButton;
