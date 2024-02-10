import React from 'react'
import Gallery from '/src/components/gallery/Gallery';

const Service6 = () => {
  let slides = [
    {
      
      title: "Project Title",
      description: "Description",
      image: "/src/assets/img/services/training.png",
    },
    
    
  ]
  return (
    <div className="p-4">
      <div className="bg-gradient-to-t from-stone-300 via-zinc-300 to-white">
        <div className="w-[80%] m-auto pt-11 ">
          <p class="text-center text-xl font-bold pb-5">Training & Technical Support</p>
          <Gallery slides={slides}/>
        </div>
      </div>
    </div>
  )
}

export default Service6