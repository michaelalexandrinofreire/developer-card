"use client"

import CardCustom from "@/components/CardCustom";
import SideBar from "@/components/SideBar"
export default function CardPage(){

  return (
    <div className="flex justify-between items-center h-screen text-black bg-slate-700
    ">
      <div>
        <SideBar/>
      </div>
      <div className="flex justify-center items-center flex-1">
        <CardCustom/>
      </div>
    </div>
  );
}  