'use client'
import CardCustom from "@/components/CardCustom";
import StarCustom from "@/components/StarCustom";

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
        <div className="z-50">
        <CardCustom 
            name={"Marvin McKinney"}
            email={"marbin@gmail.com"}
            background={"[#1E1F26]"}
            avatar={"girl.png"} />
        </div>

        <div className="absolute left-72 z-0">
          <CardCustom 
            name={"Jacob Jones"}
            email={"jacob@gmail.com"}
            background={"orange1"}
            avatar={"whitemen.png"}             
            />
        </div>

        <div className="absolute right-72 z-0">
          <CardCustom 
            name={"John doe"}
            email={"johndoe@gmail.com"}
            background={"red1"}
            avatar={"blackmen.png"}             
            />
        </div>
      </div>
      <div className="flex justify-between items-center gap-6">
        <div className="flex flex-col group">
          <a href="/card"
          className="text-[22px]">
            gerar card
          </a>   
          <span
            className="h-0.5 bg-slate-100 group-hover:w-full w-0 transition-all duration-500" 
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
            className="h-0.5 bg-slate-100 group-hover:w-full w-0 transition-all duration-500" 
          ></span>
        </div>
      </div>

    </main>
  );
}

