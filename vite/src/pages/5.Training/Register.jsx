import React from 'react';

const Register = () => {
  return (
    <div className="pt-4">
       <div className="pb-4 bg-gradient-to-t from-stone-300 via-zinc-300 to-white min-h-screen">
       <div className="mb-12">
        <h1 className="text-center font-bold text-4xl mt-4 font-sans">TRAINING</h1>
      </div>
         <h1 className="text-center text-3xl mb-4 font-sans text-gray-600">RPM/PSM Regulatory Compliance, Ammonia Refrigeration, and HAZWOPER Training</h1>
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            <div>
              <p>Training designed for refrigeration Facility Management, RMP/PSM Administrators, Refrigeration
                Operators and Technicians, Safety Personnel, Safety Auditors, Agency Inspectors and those with limited
                refrigeration and compliance experience.
              </p><br/>
              <p><b>Location: </b><br/>
                 <b>Option 1 - In-person:</b><br/>
                 <a href="/src/assets/img/CEG Office _ Parking.png" target="_blank"
                 title="Map of CEG office and parking spots" class="text-blue-800 hover:text-green-500">Cypress Engineering Group Training Classroom</a><br/>
                 <a href="https://goo.gl/maps/sZjf5CvUMpKZWh1PA" target="_blank" title="Open in Google Maps" class="text-blue-800 hover:text-green-500">8 Harris Court, Suite A6, Monterey, CA 93940</a><br/>
                 The training classroom is at Suite A6, which is on the first floor of the building.<br/>
                 <b>Option 2 - Online via Zoom:</b><br/>
                 Join from anywhere where you have a computer and internet access!
              </p><br/>
            
            
             {/* Insert Table Here */}

            </div>

          <style>
          {`
            .oval{
              width: 300px;
              height: 200px;
              border-radius: 50%;
              border-style: solid;
              border-color: blue;
            }
          `}
        </style>
          <div>
            <p className="oval border-2 bg-green-200 m-auto text-center p-7 font-bold">
              <span class="text-red-500">Bonus!</span><br/>
              Bring your facility P&ID along with any questions you have about your system for a 
              <span class="text-red-500"> free consultation</span> on the day of the class!
            </p>
            <p>Training Fee Includes:
              <ul class="list-disc list-inside">
                <li> Training materials</li>
                <li> Continental breakfast and lunch for in-person trainees</li>
                <li> Certificate upon completion</li>
              </ul>
            </p>
            <p><b>Trainer: Sefa Isik, PE, CSP</b><br/>
              Sefa Isik brings many years of refrigeration and compliance experience including CalARP/RMP/PSM regulatory
              programs, refrigeration design, mechanical integrity audits, seismic reviews, process safety audits,
              written programs, etc.
            </p>
            <p><b>Questions?</b><br/>
              Call <a href="tel:+18312181802" class="text-blue-800 hover:text-green-500">831-218-1802</a> or email us at <a
                href="mailto:training@cypresseg.com" class="text-blue-800 hover:text-green-500">training@cypresseg.com</a>.
            </p>
          </div>
         </div>
       </div>
    </div>
  );
};

export default Register;
