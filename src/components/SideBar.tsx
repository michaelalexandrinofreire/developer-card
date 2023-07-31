export default function SideBar(){

  interface circlesProps {
    bg: "black" | "pink" | "yellow" | "blue";
    content?:string;
  }  
  
  function Circles({bg,content}: circlesProps){

    const bgStyles: React.CSSProperties = {
      background: bg === 'black' ? '#1E1F26' : bg === 'pink' ? '#FEE' : bg === 'yellow' ? '#FFFDEE' : ' #EEF8FF'
    };
  
    return(
      <button className={`rounded-full w-7 h-7 border border-zinc-300 hover:w-[30px] hover:h-[30px] transition-all duration-500
      `}
      style={bgStyles}>
        {content}
      </button>
    )
  }

  interface tecnologiaProps{
    text: string;
    bg: string;
  }

  function Tecnologia({text,bg}: tecnologiaProps){

    return(
      <button className={`${bg} py-1 px-2 rounded-lg`}>
        {text}
      </button>
    )
  }
  return(
    
    <div className="w-[23vw] text-zinc-700 pl-[10%] flex flex-col justify-around gap-5 
    text-xs font-medium bg-slate-400 min-h-screen overflow-auto pt-14">
        <div className="h-12 flex flex-col justify-center gap-2">
          <h2>Nome:</h2>
          <div className="flex items-center">
            <input type="text" 
            className="rounded-xl bg-zinc-200 pl-2 py-0.5 border focus:border-blue-700 focus:outline-none focus:ring-blue-600 focus:bg-white
            w-[15vw]"/>
            <button className="bg-blue-700 rounded-lg py-1 px-2 ml-2 text-white font-normal">
              OK
            </button>
          </div>
        </div>
        <div className="h-12 flex flex-col justify-center gap-2">
          <h2>Profição:</h2>
          <div className="flex items-center">
            <input type="text" 
            className="rounded-xl bg-zinc-200 pl-2 py-0.5 border focus:border-blue-700 focus:outline-none focus:ring-blue-600 focus:bg-white
            w-[15vw]"/>
            <button className="bg-blue-700 rounded-lg py-1 px-2 ml-2 text-white font-normal">
              OK
            </button>
          </div>
        </div>
        <div className="h-12 flex flex-col justify-center gap-2">
          <h2>E-mail:</h2>
          <div className="flex items-center">
            <input type="text" 
            className="rounded-xl bg-zinc-200 pl-2 py-0.5 border focus:border-blue-700 focus:outline-none focus:ring-blue-600 focus:bg-white
            w-[15vw]"/>
            <button className="bg-blue-700 rounded-lg py-1 px-2 ml-2 text-white font-normal">
              OK
            </button>
          </div>
        </div>
      <div className="h-20 flex flex-col justify-center gap-2">
        <h2>
          Background:
        </h2>
        <div className="flex gap-4 h-10">
            <Circles bg="black"/>          
            <Circles bg="blue"/>
            <Circles bg="pink"/>
            <Circles bg="yellow"/>
            <Circles bg="yellow" content="+"/>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2>
          Avatar:
        </h2>
        <div className="flex flex-wrap gap-2 items-center">
          <button className="w-16 h-16">
            <img 
            src="/whitemenprofile.png" 
            alt="" 
            className="w-full h-full"/>
          </button>
          <button className="w-16 h-16">
            <img 
            src="/blackmenprofile.png" 
            alt="" 
            className="object-fill"/>
          </button>
          <button className="w-16 h-16">
            <img 
            src="/girlprofile.png" 
            alt="" />
          </button>
        </div>
      </div>
        <div className=" flex flex-col justify-center gap-2">
          <h2>Tecnologias:</h2>
          <div className="flex flex-wrap items-center gap-2 w-[18vw]">
            <Tecnologia text={"AWS"} bg="bg-yellow"/>
            <Tecnologia text="Angular" bg="bg-red"/>
            <Tecnologia text="C++" bg="bg-green"/>
            <Tecnologia text="C#" bg="bg-blue1"/>
            <Tecnologia text="Docker" bg="bg-blue1"/>
            <Tecnologia text="Git" bg="bg-orange"/>
            <Tecnologia text="JavaScript" bg="bg-yellow"/>
            <Tecnologia text="Laravel" bg="bg-red"/>
            <Tecnologia text="SQL" bg="bg-blue1"/>
            <Tecnologia text="Node.js" bg="bg-green"/>
            <Tecnologia text="PHP" bg="bg-purple"/>
            <Tecnologia text="Python" bg="bg-blue1"/>
            <Tecnologia text="React" bg="bg-blue1"/>
            <Tecnologia text="Ruby" bg="bg-red"/>
            <Tecnologia text="Swift" bg="bg-orange"/>
            <Tecnologia text="TypeScript" bg="bg-blue1"/>
          </div>
        </div>
    </div>
  )
}