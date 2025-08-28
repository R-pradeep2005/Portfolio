import React from "react";

const Resume_card = (props) => {
  return (
    <div className="flex flex-col mt-12 mb-12">
      <div className="flex flex-row items-center justify-start">
        <div className="flex items-center justify-center p-2 bg-[#202022] border-1 border-[#4e4e4e] rounded-[8px] shadow-md">
          <img className="w-[18px] h-[18px]" src="/assets/icon-book.svg"></img>
        </div>
        <h3 className="font-bold text-[24px] pl-6">{props.section}</h3>
      </div>
      <div className="flex flex-row mt-8 ">
        <div className="bg-[#fec160] rounded-full w-[16px] h-[16px] ml-2.5 mt-2 border-4 border-[#56534a]  "></div>
        <div className="flex flex-col items-start ml-9">
          <div className="flex flex-row items-center ">
            <img
              className="w-[70px] h-[60px] rounded-xl"
              src={props.logo}
            ></img>
            <h4 className="font-bold p-2 text-left ml-3">
              {props.institution}
            </h4>
          </div>
          <div className="font-semibold text-left mt-3"> {props.title}</div>
          <div className=" text-[#fec160] text-left ">{props.duration}</div>
          <div className="text-[#a8a8a8] text-left">{props.brief}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume_card;
