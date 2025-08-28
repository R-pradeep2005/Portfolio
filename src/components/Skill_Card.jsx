import { useState } from "react";
import Sub_Skill from "./Sub_Skill";

const Skill_Card = (props) => {
  const [dropdown, setDropDown] = useState(0);
  return (
    <div
      onClick={() => {
        setDropDown(!dropdown);
      }}
      className="flex flex-col w-full mt-4 cursor-pointer transition-all duration-100 ease-in-out items-start"
    >
      <h3 className="font-semibold text-[15px] w-full flex flex-row items-center pb-2">
        <img
          className={`mr-2   transition-transform ${
            dropdown ? "rotate-180" : "rotate-0"
          }`}
          src="/assets/icon-drop-down.svg"
        />{" "}
        {props.skill}{" "}
        <p className="text-[#898989] font-light pl-2">{props.percentage}</p>
      </h3>
      <div className="rounded-full w-full h-[8px] flex items-center bg-[#383838]">
        <div
          style={{
            width: `${props.percentage}`,
            transition: "width 2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          className={`rounded-full h-full bg-gradient-to-l from-[#ffbb5c] to-[#ffdb70]`}
        ></div>
      </div>

      {dropdown
        ? props.subskill == null
          ? null
          : props.subskill.map((item, index) => (
              <Sub_Skill
                key={index}
                sub_skill={item.skill}
                s_percentage={item.percentage}
              />
            ))
        : null}
    </div>
  );
};

export default Skill_Card;
