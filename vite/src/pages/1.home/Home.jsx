
const Home = () => {
    return (
      /*Intro Section */
      <div className="text-center pt-4">
        <div className="pb-4 bg-gradient-to-t from-stone-300 via-zinc-300 to-white min-h-screen"> {/* Background color gradient */}   
          <p class="text-red-500 font-bold text-xl pb-5">Upcoming training opportunities!</p>
          <p class="font-bold pb-5">Oct & Nov 2023 in Monterey, CA</p>
          <p class="pb-5">Ammonia Refrigeration, Regulatory Compliance, and HAZWOPER Training</p>
          <p class="pb-5">In-person and online options available.</p>
          <p class="pb-5">Click below to go to our new training registration page for more info and to register.</p>
          

          <div className="flex justify-center items-center mb-4"> 
            <img src="/src/assets/img/logo/CypressEG.svg" alt="Cypress Engineering Group Logo" className="h-20 w-auto" /> 
          </div>

          {/* Space between header and service cards */}
          <div class="my-10"></div>

          {/* Service Cards */}
          <div class="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">

            {/* Service card 1: HVAC, Plumbing, Fire Protection, Building Cx, Energy Audits  */}
            <div class= "max-w-sm bg-white shadow-md rounded-lg pt-4">
              <ion-icon name="cog-outline"></ion-icon>
              <div class="p-5 bg-transparent">
                <a href='/services/service1'>
                  <s2 class="mb-4 text-lg tracking-tight text-black text-center hover:text-blue-600">HVAC, Plumbing, Fire Protection, Building Cx, Energy Audits</s2>
                </a>
                <p class="mt-4 list-disc pl-5 text-black text-left">Our field experience combined with the knowledge of engineering concepts gives us an advantageous perspective that allows us to design better systems with constructability and practicality in mind as well as conduct and prepare constructability review comments for clients.</p>
              </div>
            </div>

            {/* Service card 2: Industrial Refrigeration  */}
            <div class= "max-w-sm bg-white shadow-md rounded-lg pt-4">
              <ion-icon name="snow-outline"></ion-icon>
              <div class="p-5 bg-transparent">
                <a href='/services/service3'>
                  <s2 class="mb-4 text-lg tracking-tight text-black text-center hover:text-blue-600">Industrial Refrigeration</s2>
                </a>
                <p class="mt-4 list-disc pl-5 text-black text-left">Our promise to you is to provide you the latest technology, latest trends, and up-to-date refrigeration solutions.</p>
              </div>
            </div>

          {/* Service card 3: Cypress Engineering Group  */}
          <div className="max-w-sm bg-white shadow-md rounded-lg pt-4">
            <div className="p-5 bg-transparent" style={{ marginBottom: "+20px" }}>
              <div className="flex justify-center items-center mb-4"> 
                <img src="/src/assets/img/logo/CypressEG.svg" alt="Cypress Engineering Group Logo" className="h-20 w-auto" /> 
              </div>
              <a href='/about' className="block">
                <h2 className="mb-4 text-lg tracking-tight text-black text-center hover:text-blue-600">Cypress Engineering Group</h2>
              </a>
              <p className="mt-4 list-disc pl-5 text-black text-left">KIE Consultants has transformed into Cypress Engineering Group with all good things about KIE remaining the same, plus new team members and refreshed enthusiasm.</p>
            </div>
          </div>

            {/* Service card 4: Environmental & Regulatory Compliance  */}
            <div class= "max-w-sm bg-white shadow-md rounded-lg pt-4">
              <ion-icon name="leaf"></ion-icon>
              
              <div class="p-5 bg-transparent">
                <a href='/services/service4'>
                  <s2 class="mb-4 text-lg tracking-tight text-black text-center hover:text-blue-600">Environmental & Regulatory Compliance</s2>
                </a>
                <p class="mt-4 list-disc pl-5 text-black text-left">We love ammonia, and we love it safe. We will make sure that you remain in safe operating limits.</p>
              </div>
            </div>

            {/* Service card 5: Training  */}
            <div class= "max-w-sm bg-white shadow-md rounded-lg pt-4">
              <ion-icon name="school"></ion-icon>
              <div class="p-5 bg-transparent">
                <a href='/services/service6'>
                  <s2 class="mb-4 text-lg tracking-tight text-black text-center hover:text-blue-600">Training</s2>
                </a>
                <p class="mt-4 list-disc pl-5 text-black text-left">We provide RMP/PSM regulatory compliance, ammonia refrigeration, HAZWOPER, and industrial general permit storm water compliance training.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home