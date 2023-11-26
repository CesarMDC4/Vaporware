import { useState } from "react";

export default function Gallery({ slides }){
    let [current, setCurrent] = useState(0);

    let previousSlide = ()=>{
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };
  
    let nextSlide = ()=>{
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };
  
    return (
        <div className="overflow-hidden relative ">
            <div className=" flex text-center flex-col inline-flex">
                <p class="font-bold pb-5">{slides[current].title}</p>
                <p class="pb-5">{slides[current].description}</p>
                <img src={slides[current].image}/>
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex px-10">
                <button onClick={previousSlide}>
                    <img src="/src/assets/img/left-arrow.png"/>
                </button>
            
                <button onClick={nextSlide}>
                    <img src="/src/assets/img/right-arrow.png"/>
                </button>
            </div>

          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s, i) => {
                return (
                    <div
                        onClick={() => {
                        setCurrent(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-5 h-5 cursor-pointer  ${
                        i == current ? "bg-gray-100" : "bg-gray-500"
                        }`}
                    ></div>
                );
            })}
          </div>
        </div>
    )
}
