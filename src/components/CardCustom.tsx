

export default function CardCustom(){

  return(
    <div className="bg-[#1E1F26] w-[339px] h-[272px] rounded-[20px] flex justify-center items-end relative">
      <img 
      src="/blackmenprofile.png" 
      alt="" 
      className="w-64"/>
      <div className="bg-white/10 backdrop-blur-3xl absolute text-white w-full rounded-[20px] px-8 py-5 flex justify-around items-center">
        <div className="flex flex-col">
          <div className="text-xl font-bold">
            Jhon doe 
          </div>
          <div className="text-xs font-light">
            johndoe@gmail.com
          </div>
        </div> 
        <div className="bg-white p-2 rounded-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.89001 9C7.87001 9.49 8.71001 10.23 9.32001 11.15C9.67001 11.67 9.67001 12.34 9.32001 12.86C8.71001 13.77 7.87001 14.51 6.89001 15" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13 15H17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

    </div>
  )
}