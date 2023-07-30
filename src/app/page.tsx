import CardExemplo from "@/components/CardExemplo";


export default function Home() {

  return (
    <main className='bg-[#BEC1D5] h-screen flex flex-col justify-around items-end pr-9'>
      <h1 className="font-syne font-bold text-6xl text-right">Profile <br /> Cards</h1>
      <nav>
        <ul className="underline text-2xl text-right flex flex-col gap-3">
          <li>
            <a href="">cover</a>
          </li>
          <li>
            <a href="">Cards</a>
          </li>
          <li>
            <a href="">Interaction</a>
          </li>
          <li>
            <a href="">components</a>
          </li>
        </ul>
      </nav>
      <a 
      href=""
      className="rounded-3xl flex justify-center items-center">
        <img 
        src="/logomf.png" 
        alt="" 
        className="w-20 rounded-3xl"/>
      </a>
      <div className="absolute">
        <CardExemplo/>
        <CardExemplo/>
        <CardExemplo/>
      </div>

    </main>
  );
}

