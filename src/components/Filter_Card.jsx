import React, { useState } from "react";

const Filter_Card = ({ props }) => {
  const item = [
    "All",
    "Full Stack",
    "Expo",
    "Api",
    "Chrome extension",
    "Web Scraper",
  ];
  const [state, setState] = useState("All");

  return (
    <div className="flex flex-row cursor-pointer mt-4">
      {item.map((item, index) => (
        <h4
          key={index}
          className={`text-[15px] p-3 text-[#cccccc] hover:text-[#a8a8a8] ${
            state == item
              ? " text-[#febf5f] hover:text-[#febf5f] "
              : "text-[#cccccc]"
          }`}
          onClick={() => {
            setState(item);
            props(item);
          }}
        >
          {item}
        </h4>
      ))}
    </div>
  );
};

export default Filter_Card;
