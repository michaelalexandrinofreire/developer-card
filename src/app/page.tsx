'use client'
import CardCustom from "@/app/card/components/CardCustom";
import StarCustom from "@/app/card/components/StarCustom";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <main className='bg-[#484A55] font-syn font-bold h-screen flex flex-col 
    justify-around items-center pr-9 relative'>
      <h1 className="text-[32px] text-center">developer card</h1>
      <StarCustom size={"2xl"} 
      position={'top-16 left-16'}/>
      <StarCustom size={"xl"} 
      position={'bottom-20 right-36'}/>
      <StarCustom size={"lg"} 
      position={'top-40 right-72'}/>
      <StarCustom size={"lg"} 
      position={'bottom-36 left-64'}/>
      <div className="font-poppins flex relative justify-center items-center">
        <motion.div
        className="z-50"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5, }}
      >
        <CardCustom 
          name={"Marvin McKinney"}
          email={"marbin@gmail.com"}
          background={"[#1E1F26]"}
          avatar={"girl.png"} 
        />
      </motion.div>

        <motion.div className="absolute left-72 z-0"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, }}>
          <CardCustom 
            name={"Jacob Jones"}
            email={"jacob@gmail.com"}
            background={"orange1"}
            avatar={"whitemen.png"}             
            />
        </motion.div>

        <motion.div className="absolute right-72 z-0"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -10, 0], opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, }}>
          <CardCustom 
            name={"John doe"}
            email={"johndoe@gmail.com"}
            background={"red1"}
            avatar={"blackmen.png"}             
            />
        </motion.div>
      </div>
      <div className="flex justify-between items-center gap-6">
        <div className="flex flex-col group">
          <a href="/card"
          className="text-[22px]">
            gerar card
          </a>   
          <span
            className="h-0.5 bg-slate-100 group-hover:w-full w-0 transition-all duration-500 rounded" 
          ></span>     
        </div>

        <a href="https://michaelfreire.vercel.app/"
        className="bg-purple1 rounded-2xl hover:bg-purple1/60 transition-all duration-300 px-4">
          <img 
          src="/logomf.png" 
          alt="" 
          className="w-14"/>
        </a>
        <div className="flex flex-col group">
          <a 
          href="https://github.com/michaelalexandrinofreire/developer-card" 
          className="text-[22px]"
          target="blank">
            Repos Card
          </a>
          <span
            className="h-0.5 bg-slate-100 group-hover:w-full w-0 transition-all duration-500 rounded" 
          ></span>
        </div>
      </div>

    </main>
  );
}

