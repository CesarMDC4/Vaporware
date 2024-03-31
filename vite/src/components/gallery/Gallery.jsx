import { useState } from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'

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

    const imgStyle = {
        height: "50vh",
        display: "block",
    };
  
    return (
        <div className="overflow-hidden relative"  >
            <div id="CurrSlide" className="flex text-center flex-col inline-flex" >
                <p class="font-bold pb-5">{slides[current].title}</p>
                <p class="pb-5">{slides[current].description}</p>
                <img src={slides[current].image} style = {imgStyle} className="w-auto object-contain"/>
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex px-10">
                <button name="left" onClick={previousSlide}>
                    <ArrowLeftCircleIcon className="h-10 w-10 text-gray-400 hover:text-black" aria-hidden="true" />
                </button>
            
                <button name="right" onClick={nextSlide}>
                    <ArrowRightCircleIcon className="h-10 w-10 text-gray-400 hover:text-black" aria-hidden="true" />
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
