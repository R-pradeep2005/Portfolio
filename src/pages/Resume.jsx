import React from "react";
import Common_Button from "../components/Common_Button";
import Resume_card from "../components/Resume_card";
import Skill_Card from "../components/Skill_Card";

const Resume = () => {
  const skill = [
    {
      skill: "React.js",
      percentage: "70%",
      sub_skills: [
        { skill: "State (useState-useEffect-useRef)", percentage: "70%" },
        { skill: "Routing (react-router-dom)", percentage: "65%" },
        { skill: "API Integration (fetch, third-party)", percentage: "50%" },
        { skill: "Conditional Rendering", percentage: "70%" },
        { skill: "Responsive Design", percentage: "60%" },
      ],
    },

    {
      skill: "Express.js & Node.js",
      percentage: "65%",
      sub_skills: [
        { skill: "Routing & Middleware", percentage: "65%" },
        { skill: "Authentication (JWT)", percentage: "60%" },
        { skill: "Authorization (RBAC)", percentage: "60%" },
        { skill: "Security (bcrypt, .env)", percentage: "65%" },
        { skill: "REST API", percentage: "70%" },
      ],
    },
    {
      skill: "MongoDB (Mongoose)",
      percentage: "65%",
      sub_skills: [
        { skill: "Schema Design", percentage: "55%" },
        { skill: "CRUD Operations", percentage: "70%" },
        { skill: "Queries", percentage: "50%" },
      ],
    },
    {
      skill: "DevOps & Deployment",
      percentage: "60%",
      sub_skills: [
        { skill: "Git (stage/commit/push)", percentage: "80%" },
        { skill: "GitHub (repo/PRs)", percentage: "85%" },
        { skill: "CI/CD (GitHub Actions)", percentage: "60%" },
        { skill: "Docker (images, Hub)", percentage: "55%" },
        { skill: "Deploy (Netlify, Render)", percentage: "65%" },
      ],
    },
    {
      skill: "Linux Basics",
      percentage: "50%",
      sub_skills: [
        { skill: "Commands", percentage: "50%" },
        { skill: "Navigation", percentage: "75%" },
        { skill: "File System", percentage: "50%" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-start    rounded-[20px] h-full">
      <h1 className="font-bold text-[32px] pt-4">Resume</h1>
      <div className="h-[5px] w-[40px] mt-6 rounded-full bg-gradient-to-l from-[#ffbb5c] to-[#ffdb70]"></div>
      <div className="w-full flex flex-row justify-center items-center mt-6">
        <a
          href="/assets/Pradeep_Ravisankar_resume.pdf"
          download
          className="flex flex-row p-6 h-[54px] ml-2 items-center shadow-md  border-1 hover:border-amber-200 cursor-pointer border-[#767676] bg-[#1e1e1f] rounded-[14px] 
    "
        >
          <img
            className="w-[18px] h-[18px] "
            src="/assets/icon-download.svg"
            alt=""
          />
          <p className=" pl-2 text-[16px] font-semibold text-[#ffdb70]">
            Download Resume
          </p>
        </a>
        <a
          href="/assets/Pradeep_Ravisankar_resume.pdf"
          target="_blank"
          className="flex flex-row p-6 h-[54px] ml-2 items-center shadow-md  border-1 hover:border-amber-200 cursor-pointer border-[#767676] bg-[#1e1e1f] rounded-[14px] 
    "
        >
          <img
            className="w-[18px] h-[18px] "
            src="/assets/icon-view.svg"
            alt=""
          />
          <p className=" pl-2 text-[16px] font-semibold text-[#ffdb70]">
            View Resume
          </p>
        </a>
      </div>

      <Resume_card
        logo="/assets/logo-kcg.svg"
        section="Education"
        institution="Kcg College of Technology"
        title="Bacholer of Engineering"
        duration="2022 to 2026"
      />
      <Resume_card
        logo="/assets/logo-copter_code.svg"
        section="Experience"
        institution="Copter Code"
        title="Software Developer Intern"
        duration="1 month"
        brief="Worked on developing MERN Stack web applications using React.js and Node.js."
      />

      <h1 className="font-bold text-[24px] pt-6">My Skills</h1>
      <div className="flex flex-col items-start  pl-6 pr-6 pb-6 mb-3 w-full bg-[#232324] border-1 border-[#383838] mt-4 rounded-[20px] h-full">
        {skill.map((item) => (
          <Skill_Card
            skill={item.skill}
            percentage={item.percentage}
            subskill={item.sub_skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Resume;
