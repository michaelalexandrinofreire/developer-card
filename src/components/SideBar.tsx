'use client'
import React, { useState } from "react";

interface SideBarProps {
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onAvatarBackgroundChange: (background: string) => void;
  onTechnologiesChange: (technologies: string[]) => void;
  onAvatarChange: (avatar: string) => void;
}

export default function SideBar({
  onNameChange,
  onEmailChange,
  onAvatarBackgroundChange,
  onTechnologiesChange,
  onAvatarChange,

}: SideBarProps) {

  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [selectedBackground, setSelectedBackground] = useState("#1E1F26");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [avatar, setSelectedAvatar] = useState("/blackmen.png");

  const handleBackgroundChange = (bg: string) => {
    setSelectedBackground(bg);
  };
  const handleAvatarChange = (avatar: string) => {
    setSelectedAvatar(avatar);
    onAvatarChange(avatar); // Chama a função para atualizar o avatar no componente pai
  };
  
  const handleTechnologySelect = (technology: string) => {
    setSelectedTechnologies((prevTechnologies) => [...prevTechnologies, technology]);
  };

  const handleTechnologyRemove = (technology: string) => {
    setSelectedTechnologies((prevTechnologies) =>
      prevTechnologies.filter((tech) => tech !== technology)
    );
  };
  const availableTechnologies = [
    "AWS",
    "Angular",
    "C++",
    "C#",
    "CSS",
    "Docker",
    "Git",
    "HTML",
    "JavaScript",
    "SQL",
    "Node.js",
    "PHP",
    "Python",
    "React",
    "Ruby",
    "Tailwind",
    "TypeScript",
    "UI/UX",
  ];
  return (
    <div className="w-[22vw] text-zinc-700 pl-[10%] flex flex-col
    gap-5 text-xs font-medium bg-white overflow-hidden h-screen pt-16">
      <div className="h-12 flex flex-col justify-center gap-2">
        <h2 className="">Nome:</h2>
        <div className="flex items-center">
          <input
            type="text"
            className="rounded-xl bg-zinc-200 pl-2 py-0.5 border focus:border-blue-700 focus:outline-none focus:ring-blue-600 focus:bg-white w-[15vw]"
            value={nameInputValue}
            onChange={(e) => setNameInputValue(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <h2>E-mail:</h2>
        <div className="flex items-center">
          <input
            type="text"
            className="rounded-xl bg-zinc-200 pl-2 py-0.5 border focus:border-blue-700 focus:outline-none focus:ring-blue-600 focus:bg-white w-[15vw]"
            value={emailInputValue}
            onChange={(e) => setEmailInputValue(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2>Avatar:</h2>
        <div className="flex gap-2 items-center mt-3">
          <button onClick={() => handleAvatarChange("/blackmen.png")}>
            <img src="/blackmenprofile.png" alt="" className="w-16" />
          </button>
          <button onClick={() => handleAvatarChange("/whitemen.png")}>
            <img src="/whitemenprofile.png" alt="" className="w-16" />
          </button>
          <button onClick={() => handleAvatarChange("/girl.png")}>
            <img src="/girlprofile.png" alt="" className="w-16" />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2 mb-8">
        <h2>Background:</h2>
        <div className="flex flex-wrap gap-4 h-10 w-[18vw] text-black">
          <button
            className={`rounded-full w-7 h-7 border bg-[#1E1F26] ${
              selectedBackground === "[#1E1F26]" ? "border-blue-700" : "border-zinc-300"
            } `}
            onClick={() => handleBackgroundChange("[#1E1F26]")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border bg-blue1 ${
              selectedBackground === "blue1" ? "border-blue-700" : "border-zinc-300"
            } `}
            onClick={() => handleBackgroundChange("blue1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border bg-green1 ${
              selectedBackground === "green1" ? "border-blue-700" : "border-zinc-300"
            } `}
            onClick={() => handleBackgroundChange("green1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border bg-yellow1 ${
              selectedBackground === "yellow1" ? "border-blue-700" : "border-zinc-300"
            } `}
            onClick={() => handleBackgroundChange("yellow1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border bg-orange1 ${
              selectedBackground === "orange1" ? "border-blue-700" : "border-zinc-300"
            } `}
            onClick={() => handleBackgroundChange("orange1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border bg-red1 ${
              selectedBackground === "red1" ? "border-blue-700" : "border-zinc-300"
            } `}
            onClick={() => handleBackgroundChange("red1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border bg-pink1 ${
              selectedBackground === "pink1" ? "border-blue-700" : "border-zinc-300"
            } `}
            onClick={() => handleBackgroundChange("pink1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border bg-purple1 ${
              selectedBackground === "purple1" ? "border-blue-700" : "border-zinc-300"
            }  transition-all duration-300`}
            onClick={() => handleBackgroundChange("purple1")}
          ></button>
        </div>
      </div>
      <div className=" flex flex-col justify-center gap-2 w-full">
        <h2>Tecnologias:</h2>
        <div className="flex flex-wrap items-center gap-2 w-[19vw] text-xs">
          {availableTechnologies.map((tech) => (
            <button
              key={tech}
              className={`${
                selectedTechnologies.includes(tech) ? "bg-blue-500" : "bg-blue-200"
              } text-white font-medium text-xs px-2 py-1 rounded-lg`}
              onClick={() => {
                if (selectedTechnologies.includes(tech)) {
                  handleTechnologyRemove(tech);
                } else {
                  handleTechnologySelect(tech);
                }
              }}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white 
        px-3 py-2 rounded-lg w-[18vw] -mt-3"
        onClick={() => {
          // Quando o usuário clicar em "Salvar", chama as funções para atualizar o estado
          onNameChange(nameInputValue);
          onEmailChange(emailInputValue);
          onAvatarBackgroundChange(selectedBackground);
          onTechnologiesChange(selectedTechnologies);
          onAvatarChange(avatar);
        }}
      >
        Salvar
      </button>
    </div>
  );
}
