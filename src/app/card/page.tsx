"use client"

import React, { useState } from "react";
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
    <div className="flex justify-between items-center h-screen text-black bg-slate-700">
      <div>
        <SideBar
          onNameChange={setName}
          onEmailChange={setEmail}
          onAvatarBackgroundChange={setAvatarBackground}
          onTechnologiesChange={setSelectedTechnologies}
          onAvatarChange={handleAvatarChange} // Passe a função para o SideBar
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
  );
}