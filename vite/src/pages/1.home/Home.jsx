
const Home = () => {
    return (
      /*Intro Section */
      <div className="text-center p-4">
        <div className=" bg-gradient-to-t from-stone-300 via-zinc-300 to-white"> {/* Background color gradient */}   
          <p class="text-red-500 font-bold text-xl pb-5">Upcoming training opportunities!</p>
          <p class="font-bold pb-5">Oct & Nov 2023 in Monterey, CA</p>
          <p class="pb-5">Ammonia Refrigeration, Regulatory Compliance, and HAZWOPER Training</p>
          <p class="pb-5">In-person and online options available.</p>
          <p class="pb-5">Click below to go to our new training registration page for more info and to register.</p>
          <button class="bg-green-900 text-white hover:bg-white hover:text-green-900 font-bold py-2 px-4 rounded-full mb-5">Register Now!</button>

          {/* Space between header and service cards */}
          <div class="my-24"></div>

          {/* Service Cards */}
          <div class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">

            {/* Service card 1: HVAC, Plumbing, Fire Protection, Building Cx, Energy Audits  */}
            <div class= "max-w-sm bg-transparent">
              <div class="p-5 bg-transparent">
                <div class="flex items-center">
                  <ion-icon name="cog-outline"></ion-icon>
                  <div class="p-10"></div>
                </div>
                <a href="#">
                  <s1 class="mb-4 text-lg tracking-tight text-black text-center">HVAC, Plumbing, Fire Protection, Building Cx, Energy Audits</s1>
                </a>
                <p class="mt-4 list-disc pl-5 text-black text-left">Our field experience combined with the knowledge of engineering concepts gives us an advantageous perspective that allows us to design better systems with constructability and practicality in mind as well as conduct and prepare constructability review comments for clients.</p>
              </div>
            </div>

            {/* Service card 2: Industrial Refrigeration  */}
            <div class= "max-w-sm bg-transparent">
              <div class="p-5 bg-transparent">
                <div class="flex items-center">
                  <ion-icon name="snow-outline"></ion-icon>
                  <div class="p-10"></div>
                </div>
                <a href="#">
                  <s2 class="mb-4 text-lg tracking-tight text-black text-center">Industrial Refrigeration</s2>
                </a>
                <p class="mt-4 list-disc pl-5 text-black text-left">Our promise to you is to provide you the latest technology, latest trends, and up-to-date refrigeration solutions.</p>
              </div>
            </div>

            {/* Service card 3: Environmental & Regulatory Compliance  */}
            <div class= "max-w-sm bg-transparent">
              <a href = "#"></a>
              <div class="p-5 bg-transparent">
                <div class="flex items-center">
                  <ion-icon name="leaf"></ion-icon>
                  <div class="p-10"></div>
                </div>
                <a href="#">
                  <s2 class="mb-4 text-lg tracking-tight text-black text-center">Environmental & Regulatory Compliance</s2>
                </a>
                <p class="mt-4 list-disc pl-5 text-black text-left">We love ammonia, and we love it safe. We will make sure that you remain in safe operating limits.</p>
              </div>
            </div>

            {/* Service card 4: Training  */}
            <div class= "max-w-sm bg-transparent">
              <div class="p-5 bg-transparent">
                <div class="flex items-center">
                  <ion-icon name="school"></ion-icon>
                  <div class="p-10"></div>
                </div>
                <a href="#">
                  <s2 class="mb-4 text-lg tracking-tight text-black text-center">Training</s2>
                </a>
                <p class="mt-4 list-disc pl-5 text-black text-left">We provide RMP/PSM regulatory compliance, ammonia refrigeration, HAZWOPER, and industrial general permit storm water compliance training.</p>
              </div>
            </div>

            {/* Service card 5: Cypress Engineering Group  */}
            <div class= "max-w-sm bg-transparent">
              <div class="p-5 bg-transparent">
                <div class="flex items-center">
                  
                  <div class="p-10"></div>
                </div>
                <a href="#">
                  <s2 class="mb-4 text-lg tracking-tight text-black text-center">Cypress Engineering Group</s2>
                </a>
                <p class="mt-4 list-disc pl-5 text-black text-left">KIE Consultants has transformed into Cypress Engineering Group with all good things about KIE remaining the same, plus new team members and refreshed enthusiasm.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home