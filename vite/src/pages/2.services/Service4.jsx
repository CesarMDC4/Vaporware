import React from 'react'
import Gallery from '/src/components/gallery/Gallery';

const Service4 = () => {
  let slides = [
    {
      
      title: "Project Title",
      description: "Description",
      image: "/src/assets/img/services/regulatory_compliance.png",
    },
    
  ]
  return (
    <div className="pt-10 overflow-hidden">
      <div className="bg-gradient-to-t from-stone-300 via-zinc-300 to-white pb-24">
        <div className="text-center m-auto pt-11 ">
          <p class="text-xl font-bold pb-5">Environmental Compliance</p>
          <Gallery slides={slides}/>
        </div>
      </div>
    </div>
  )
}

export default Service4