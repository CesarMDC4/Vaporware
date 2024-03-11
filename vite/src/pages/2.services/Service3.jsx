import React from 'react'
import Gallery from '/src/components/gallery/Gallery';

const Service3 = () => {
  let slides = [
    {
      
      title: "Project Title",
      description: "Description",
      image: "/src/assets/img/services/IR-01.png",
    },
    
    
  ]
  return (
    <div className="pt-4">
      <div className="bg-gradient-to-t from-stone-300 via-zinc-300 to-white pb-24">
        <div className="text-center m-auto pt-11 ">
          <p class="text-xl font-bold pb-5">Industrial Refrigeration</p>
          <Gallery slides={slides}/>
        </div>
      </div>
    </div>
  )
}

export default Service3