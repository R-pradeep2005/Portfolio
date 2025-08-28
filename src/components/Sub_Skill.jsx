import React from "react";

const Sub_Skill = (props) => {
  return (
    <div className="flex flex-col w-full mt-4 ml-6  border-l-2 pl-2 border-[#808080f3] items-start">
      <h3 className=" text-[#b8b8b8] text-[15px] w-[80%] text-left sm:w-full flex items-start pb-2">
        {props.sub_skill}{" "}
        <p className="text-[#898989] font-light pl-2">{props.s_percentage}</p>
      </h3>
      <div className="rounded-full w-[70%] h-[8px] flex items-center bg-[#383838]">
        <div
          style={{
            width: `${props.s_percentage}`,
            transition: "width 2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          className={`rounded-full h-full bg-gradient-to-l from-[#727272] to-[#a1a1a1]`}
        ></div>
      </div>
    </div>
  );
};

export default Sub_Skill;
