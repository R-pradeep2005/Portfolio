import React from "react";
import Map_Card from "../components/Map_Card";
import Contact_Form from "../components/Contact_Form";

const Contact = () => {
  return (
    <div className="flex flex-col items-start    rounded-[20px] h-full">
      <h1 className="font-bold text-[32px] pt-4">Contact Me</h1>
      <div className="h-[5px] w-[40px] mt-6 rounded-full bg-gradient-to-l from-[#ffbb5c] to-[#ffdb70]"></div>
      <Map_Card />
      <Contact_Form />
    </div>
  );
};

export default Contact;
