"use client"

import React, { useRef, useState } from "react";
import CardCustom from "@/components/CardCustom";
import SideBar from "@/components/SideBar";
import CardCustom2 from "@/components/CardCustom2";

export default function CardPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarBackground, setAvatarBackground] = useState("black");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState("blackmen.png"); // Estado para o avatar selecionado

  // Função para atualizar o avatar selecionado
  const handleAvatarChange = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  return (
    <div className="flex flex-col h-screen text-black bg-[#484A55]">
      <div className="w-screen flex justify-between px-10 items-center bg-[#484A55] border-b border-gray-500
      py-2 fixed">
        <a
        href="/"
        className="flex justify-center items-center gap-2">
          <img src="/fav.png" alt="go to home" 
          className="w-8 rounded-xl border border-zinc-400"/>
          <span className="text-base text-blue-600 font-bold">Developer Card</span>
        </a>
        <button 
        onClick={()=> {
          alert('Essa função será adicionada em breve!')
        }}
        className="text-white text-sm font-bold bg-blue-600 py-2 px-2 rounded-xl border border-transparent focus:border focus:border-red-700"
        >Baixar Card</button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <SideBar
            onNameChange={setName}
            onEmailChange={setEmail}
            onAvatarBackgroundChange={setAvatarBackground}
            onTechnologiesChange={setSelectedTechnologies}
            onAvatarChange={handleAvatarChange} //
          />
        </div>
          <div className="flex justify-center items-center flex-1 gap-3 text-xs font-medium"
          > 
          <div
          >
            <CardCustom
              name={name}
              email={email}
              background={avatarBackground}
              avatar={selectedAvatar}         
              />
          </div>

            <CardCustom2
              name={name}
              email={email}
              background={avatarBackground}
              technologies={selectedTechnologies}
              avatar={selectedAvatar}
            />
          </div>
      </div>
    </div>
  );
}