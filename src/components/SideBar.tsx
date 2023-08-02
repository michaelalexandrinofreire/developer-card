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
  const [selectedBackground, setSelectedBackground] = useState("black");
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
    "Laravel",
    "SQL",
    "Node.js",
    "PHP",
    "Python",
    "React",
    "Ruby",
    "Swift",
    "Tailwind",
    "TypeScript",
  ];
  return (
    <div className="w-[23vw] text-zinc-700 pl-[10%] flex flex-col justify-around gap-5 text-xs font-medium bg-white min-h-screen overflow-auto">
      <div className="h-12 flex flex-col justify-center gap-2">
        <h2 className="mt-1">Nome:</h2>
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
        <div className="flex gap-2 items-center">
          <button onClick={() => handleAvatarChange("/blackmen.png")}>
            <img src="/blackmen.png" alt="" className="w-12" />
          </button>
          <button onClick={() => handleAvatarChange("/whitemen.png")}>
            <img src="/whitemen.png" alt="" className="w-16" />
          </button>
          <button onClick={() => handleAvatarChange("/girlprofile.png")}>
            <img src="/girlprofile.png" alt="" className="w-16" />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2">
        <h2>Background:</h2>
        <div className="flex flex-wrap gap-4 h-10">
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "[#1E1F26]" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[31px] hover:h-[31px] transition-all duration-500`}
            style={{ background: "bg-[#1E1F26]" }}
            onClick={() => handleBackgroundChange("[#1E1F26]")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "blue1" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[31px] hover:h-[31px] transition-all duration-500`}
            style={{ background: "bg-blue1" }}
            onClick={() => handleBackgroundChange("blue1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "green1" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[31px] hover:h-[31px] transition-all duration-500`}
            style={{ background: "bg-green1" }}
            onClick={() => handleBackgroundChange("green1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "yellow1" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[30px] hover:h-[30px] transition-all duration-500`}
            style={{ background: "bg-yellow1" }}
            onClick={() => handleBackgroundChange("yellow1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "orange1" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[30px] hover:h-[30px] transition-all duration-500`}
            style={{ background: "bg-orange1" }}
            onClick={() => handleBackgroundChange("orange1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "red1" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[31px] hover:h-[31px] transition-all duration-500`}
            style={{ background: "bg-red1" }}
            onClick={() => handleBackgroundChange("red1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "pink1" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[31px] hover:h-[31px] transition-all duration-500`}
            style={{ background: "bg-pink1" }}
            onClick={() => handleBackgroundChange("pink1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "purple1" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[31px] hover:h-[31px] transition-all duration-500`}
            style={{ background: "bg-purple1" }}
            onClick={() => handleBackgroundChange("purple1")}
          ></button>
        </div>
      </div>
      <div className=" flex flex-col justify-center gap-2">
        <h2>Tecnologias:</h2>
        <div className="flex flex-wrap items-center gap-2 w-[20vw] text-xs">
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
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg w-[18vw]"
        onClick={() => {
          // Quando o usuário clicar em "Salvar", chama as funções para atualizar o estado
          onNameChange(nameInputValue);
          onEmailChange(emailInputValue);
          onAvatarBackgroundChange(selectedBackground);
          onTechnologiesChange(selectedTechnologies);
          onAvatarChange(avatar); // Adicione esta linha para atualizar o avatar selecionado
        }}
      >
        Salvar
      </button>
    </div>
  );
}
