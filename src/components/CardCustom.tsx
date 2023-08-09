'use client'

import React from "react";

interface CardProps {
  name: string;
  email: string;
  background: string;
  avatar: string;
  technologies: string[];
}

export interface StarProps {
  size: 'small' | 'medium' | 'large';
  position: String;
}

export function Star({size, position}: StarProps){
  let sizeSvg = 16;
  if(size === 'small'){
    sizeSvg = 7;
  }else if(size === 'medium'){
    sizeSvg = 14;
  } else if(size === 'large'){
    sizeSvg = 16;
  }
  return(
    <div className={`absolute ${position}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={sizeSvg} height={sizeSvg} viewBox="0 0 59 58" fill="none">
        <path d="M29.6808 0L37.4452 20.9829L58.4281 28.7473L37.4452 36.5116L29.6808 57.4945L21.9165 36.5116L0.933594 28.7473L21.9165 20.9829L29.6808 0Z" fill="white" fill-opacity="0.12"/>
      </svg>
    </div>
  )
}
export default function CardCustom({ name, email, background,avatar,}: CardProps) {
  return (
    <div className={`bg-${background === "#1E1F26" ? "#1E1F26" : background} w-[339px] h-[272px] rounded-[20px] flex justify-center items-end relative`}>
      <div className="max-w-fit ">
        <img 
        src={`${avatar}`} 
        alt="" 
        className="max-h-fit rounded-3xl"/>
      </div>


      <div className="bg-white/10 backdrop-blur-2xl absolute text-white w-full rounded-[20px] px-8 py-5 flex justify-around items-center">
        <div className="flex flex-col">
          <div className="text-xl font-bold">{name}</div>
          <div className="text-[11px] font-normal">{email}</div>
        </div>
        <div className="">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="10" fill="white"/>
            <path d="M14.89 17C15.87 17.49 16.71 18.23 17.32 19.15C17.67 19.67 17.67 20.34 17.32 20.86C16.71 21.77 15.87 22.51 14.89 23" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 23H25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 30H23C28 30 30 28 30 23V17C30 12 28 10 23 10H17C12 10 10 12 10 17V23C10 28 12 30 17 30Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
