import React from 'react'
import Gallery from '/src/components/gallery/Gallery';

const Service2 = () => {
  let slides = [
    {
      
      title: "Project Title",
      description: "Brownell Middle School, Gilroy",
      image: "/src/assets/img/services/CX-01.JPG",
    },
    {
      
      title: "Project Title",
      description: "Hartnell College - Soledad Campus",
      image: "/src/assets/img/services/CX-02.JPG",
    },
    {
      
      title: "Project Title",
      description: "Hartnell College - Castroville Campus",
      image: "/src/assets/img/services/CX-03.JPG",
    },
    {
      
      title: "Project Title",
      description: "Hartnell College - Castroville Campus",
      image: "/src/assets/img/services/CX-04.JPG",
    },
    
    
  ]
  return (
    <div className="pt-4">
      <div className="bg-gradient-to-t from-stone-300 via-zinc-300 to-white h-screen">
        <div className="text-center m-auto pt-11 ">
          <p class="text-xl font-bold pb-5">Building Cx & Energy Audits</p>
          <Gallery slides={slides}/>
        </div>
      </div>
    </div>
  )
}

export default Service2