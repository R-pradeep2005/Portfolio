import React, { useState } from "react";
import Project_Card from "../components/Project_Card";
import Filter_Card from "../components/Filter_Card";

const Projects = () => {
  const [type_name, settype] = useState("All");
  const card = [
    {
      src: "/assets/card-location_alarm.svg",
      title: "Location Alarm Application",
      type: "Expo",
      live_link: "null",
      githublink: "https://github.com/R-pradeep2005/ReachReminder",
    },
    {
      src: "/assets/card_attandance_management.svg",
      title: "Student Attandance Management Site",
      type: "Full Stack",
      live_link: "https://student-attandance-management-system.netlify.app/",
      githublink:
        "https://github.com/R-pradeep2005/Student-attandance-management",
    },
  ];

  const display = (typ) => {
    settype(typ);
  };
  const filtered_card =
    type_name == "All" ? card : card.filter((item) => item.type == type_name);
  return (
    <div className="flex flex-col items-start        rounded-[20px] h-full ">
      <h1 className="font-bold text-[32px]   pt-4">Projects</h1>
      <div className="h-[5px] w-[40px] mt-6 rounded-full bg-gradient-to-l from-[#ffbb5c] to-[#ffdb70]"></div>
      <div className="w-full sm:overflow-hidden overflow-x-scroll">
        <Filter_Card props={display} />{" "}
      </div>

      <div className="grid sm:grid-cols-2 self-center  w-[90%] gap-10 mt-6 ">
        {" "}
        {filtered_card.length == 0 ? (
          <div className="text-xl ml-18  text-[#ffbb5c]">
            Projects Comming Soon !{" "}
          </div>
        ) : (
          filtered_card.map((item, index) => (
            <Project_Card
              key={index}
              className="animation-scale"
              src={item.src}
              title={item.title}
              type={item.type}
              live_link={item.live_link}
              githublink={item.githublink}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
