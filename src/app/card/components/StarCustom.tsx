export interface StarProps {
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  position: String;
}

export default function StarCustom({size, position}: StarProps){
  let sizeSvg = 16;
  if(size === 'xs'){
    sizeSvg = 7;
  }else if(size === 'sm'){
    sizeSvg = 14;
  } else if(size === 'base'){
    sizeSvg = 16;
  } else if(size === 'lg'){
    sizeSvg = 25;
  } else if(size === 'xl'){
    sizeSvg = 40;
  } else if(size === "2xl"){
    sizeSvg = 58;
  }
  return(
    <div className={`absolute ${position} text`}>
      <svg xmlns="http://www.w3.org/2000/svg" width={sizeSvg} height={sizeSvg} viewBox="0 0 59 58" fill="none">
        <path d="M29.6808 0L37.4452 20.9829L58.4281 28.7473L37.4452 36.5116L29.6808 57.4945L21.9165 36.5116L0.933594 28.7473L21.9165 20.9829L29.6808 0Z" fill="white" fill-opacity="0.12"/>
      </svg>
    </div>
  )
}