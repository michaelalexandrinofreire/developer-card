"use client"

import React, { useState } from "react";
import CardCustom from "@/components/CardCustom";
import SideBar from "@/components/SideBar";
import CardCustom2 from "@/components/CardCustom2";
import { HiDownload } from 'react-icons/hi';

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
    <div className="flex flex-col max-h-screen text-black bg- ">
      <div className="w-screen flex justify-around items-center bg-white border-b border-gray-300
      py-1">
        <a
        href="/"
        className="flex justify-center items-center gap-2">
          <img src="/logomf.png" alt="" 
          className="w-12"/>
          <span className="text-sm text-blue-700 font-bold">CardProfile</span>
        </a>
        <button className="flex justify-center items-center bg-cyan-950 text-white gap-2
        py-2 px-3 rounded-xl">
          <HiDownload color="white" size={12}/>
          <span className="text-xs font-semibold">Baixar imagem</span>
        </button>
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
          <div className="flex justify-center items-center flex-1 gap-3 text-xs font-medium">
            <CardCustom
              name={name}
              email={email}
              background={avatarBackground}
              technologies={selectedTechnologies}
              avatar={selectedAvatar} // Passe o avatar selecionado
            />
            <CardCustom2
              name={name}
              email={email}
              background={avatarBackground}
              technologies={selectedTechnologies}
              avatar={selectedAvatar} // Passe o avatar selecionado
            />
          </div>
      </div>
    </div>
  );
}