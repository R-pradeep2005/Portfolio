import React from "react";

const Common_Button = (props) => {
  return (
    <button
      type="submit"
      className="flex flex-row p-4 h-[54px] sm:ml-2 items-center shadow-md  sm:border-1 hover:border-amber-200 cursor-pointer sm:border-[#767676] sm:bg-[#1e1e1f] w-full rounded-[14px] 
    "
    >
      <img className="w-[18px] h-[18px] " src={props.src} alt="" />
      <p className=" pl-2 text-[16px] font-semibold text-[#ffdb70]">
        {props.name}
      </p>
    </button>
  );
};

export default Common_Button;
