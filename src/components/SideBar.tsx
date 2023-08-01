import React, { useState } from "react";

interface SideBarProps {
  onNameChange: (name: string) => void;
  onProfessionChange: (profession: string) => void;
  onEmailChange: (email: string) => void;
  onAvatarBackgroundChange: (background: string) => void;
  onTechnologiesChange: (technologies: string[]) => void;
}

export default function SideBar({
  onNameChange,
  onEmailChange,
  onAvatarBackgroundChange,
  onTechnologiesChange,
}: SideBarProps) {
  const [nameInputValue, setNameInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [selectedBackground, setSelectedBackground] = useState("black");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);

  const handleBackgroundChange = (bg: string) => {
    setSelectedBackground(bg);
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
        <h2>Nome:</h2>
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
      <div className="flex flex-col justify-center gap-2">
        <h2>Background:</h2>
        <div className="flex gap-4 h-10">
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "black" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[31px] hover:h-[31px] transition-all duration-500`}
            style={{ background: "#1E1F26" }}
            onClick={() => handleBackgroundChange("[#1E1F26]")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "blue" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[31px] hover:h-[31px] transition-all duration-500`}
            style={{ background: "blue1" }}
            onClick={() => handleBackgroundChange("blue1")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "pink" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[31px] hover:h-[31px] transition-all duration-500`}
            style={{ background: "pink" }}
            onClick={() => handleBackgroundChange("pink")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "yellow" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[30px] hover:h-[30px] transition-all duration-500`}
            style={{ background: "#FFFF00" }}
            onClick={() => handleBackgroundChange("yellow")}
          ></button>
          <button
            className={`rounded-full w-7 h-7 border ${
              selectedBackground === "white" ? "border-blue-700" : "border-zinc-300"
            } hover:w-[30px] hover:h-[30px] transition-all duration-500`}
            style={{ background: "#FFFFFF" }}
            onClick={() => handleBackgroundChange("white")}
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
        className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg
        w-[18vw]"
        onClick={() => {
          // Quando o usuário clicar em "Salvar", chama as funções para atualizar o estado
          onNameChange(nameInputValue);
          onEmailChange(emailInputValue);
          onAvatarBackgroundChange(selectedBackground);
          onTechnologiesChange(selectedTechnologies);
        }}
      >
        Salvar
      </button>
    </div>
  );
}
