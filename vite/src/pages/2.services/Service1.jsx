import React from 'react'
import Gallery from '/src/components/gallery/Gallery';

const Service1 = () => {

  let slides = [
    /*HVAC*/
    {
      
      title: "Data Center Redundant AC Addition",
      description: "Monterey Peninsula College",
      image: "/src/assets/img/services/HV-01.jpg",
    },
    {
      
      title: "Campus Replacement",
      description: "South Valley Middle School, Gilroy, CA",
      image: "/src/assets/img/services/HV-02.jpg",
    },
    {
      
      title: "District-wide HVAC Renovation",
      description: "DSan Mateo-Foster City School District",
      image: "/src/assets/img/services/HV-03.jpg",
    },
    {
      
      title: "Commercial and Residential Apartment Building",
      description: "Salinas, CA",
      image: "/src/assets/img/services/HV-04.jpg",
    },
    {
      
      title: "Central Plant Boiler Replacement",
      description: "Monterey Peninsula College, Monterey, CA",
      image: "/src/assets/img/services/HV-05.png",
    },
    {
      
      title: "School Modernization",
      description: "Blue Hills Elementary School, Saratoga, CA",
      image: "/src/assets/img/services/HV-06.png",
    },
    {
      
      title: "New Gymnasium",
      description: "Boynton High School, Campbell, CA",
      image: "/src/assets/img/services/HV-07.jpeg",
    },
    {
      
      title: "Project Title",
      description: "Berryesa USD District Office",
      image: "/src/assets/img/services/HV-08.jpg",
    },
    {
      
      title: "Public Safety Training Center 1 HVAC Assessment",
      description: "Monterey Peninsula College, Monterey, CA",
      image: "/src/assets/img/services/HV-09.jpg",
    },
    {
      
      title: "Rooftop AC Unit Replacement",
      description: "Snell State Preschool Head Start, San Jose, CA",
      image: "/src/assets/img/services/HV-10A.jpg",
    },
    {
      
      title: "HVAC Replacement",
      description: "Abbott Middle School, San Mateo, CA",
      image: "/src/assets/img/services/HV-11A.jpg",
    },
    {
      
      title: "HVAC Replacement",
      description: "George Hall Elementary School, San Mateo, CA",
      image: "/src/assets/img/services/HV-12A.jpg",
    },
    {
      
      title: "Business and Computer Science Building Boiler Replacement",
      description: "Monterey Peninsula College, Monterey, CA",
      image: "/src/assets/img/services/HV-13A.jpg",
    },
    {
      
      title: "Custom Heat Pump Enclosure Construction",
      description: "Laurel Elementary School, San Mateo, CA",
      image: "/src/assets/img/services/HV-14A.jpg",
    },

    /*Fire Protection */
    {
      
      title: "Modernization",
      description: "Blue Hills Elementary School",
      image: "/src/assets/img/services/FP-01.jpg",
    },
    {
      
      title: "Tenant Improvements",
      description: "Hartnell College Building-B",
      image: "/src/assets/img/services/FP-02.jpg",
    },
    {
      
      title: "New Gym & Frontage Improvements",
      description: "Terra Linda High School",
      image: "/src/assets/img/services/FP-03.jpg",
    },
    
  ]
  return (
    <div className="pt-4">
      <div className="bg-gradient-to-t from-stone-300 via-zinc-300 to-white pb-24">
        <div className="text-center m-auto pt-11">
          <p class="text-xl font-bold pb-5">HVAC, Plumbing, & Fire Protection</p>
          <Gallery slides={slides}/>
        </div>
      </div>
    </div>
  )
}

export default Service1