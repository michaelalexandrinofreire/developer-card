'use client'
import React from "react";
import StarCustom from "./StarCustom";

interface CardProps {
  name: string;
  email: string;
  background: string;
  technologies: string[];
  avatar: string;
}

export default function CardCustom2({ name, email, background, technologies,avatar, }: CardProps) {
  return (
    <div className={`bg-${background === "black" ? "#1E1F26" : background} w-[339px] h-[262px] rounded-[20px] flex justify-center items-end relative`}>
      <div className="max-w-fit ">
        <img 
        src={`${avatar}`} 
        alt="" 
        className="max-h-fit rounded-3xl"/>
      </div>
      <StarCustom
      position={'top-4 left-6'}
      size="lg"
      />
      <StarCustom
      position={'top-24 left-20'}
      size="base"
      />
      <StarCustom
      position={'top-32 right-28'}
      size="sm"
      />
      <StarCustom
      position={'top-9 right-12'}
      size="xs"
      />
      <StarCustom
      position={'top-1/2 left-12'}
      size="xs"
      />
      <StarCustom
      position={'top-28 right-0.5'}
      size="base"
      />
      <div className="bg-white/10 backdrop-blur-2xl absolute text-white w-full rounded-[20px] px-8 py-5 flex flex-col justify-around items-center h-52">
        <div className="flex justify-around w-full">
          <div className="flex flex-col">
            <div className="text-xl font-bold">{name}</div>
            <div className="text-xs font-light">{email}</div>
          </div>
          <div className="rounded-xl flex justify-center items-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="white"/>
              <path d="M14.89 17C15.87 17.49 16.71 18.23 17.32 19.15C17.67 19.67 17.67 20.34 17.32 20.86C16.71 21.77 15.87 22.51 14.89 23" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 23H25" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17 30H23C28 30 30 28 30 23V17C30 12 28 10 23 10H17C12 10 10 12 10 17V23C10 28 12 30 17 30Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <button key={tech} className={`bg-blue-500 text-white px-2 py-1 rounded-lg`}>
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


