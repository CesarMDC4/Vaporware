import React from 'react';
import '/src/pages/5.Training/CourseCatalog.css';
import TableRegister from '/src/components/table/RegisterTable.jsx';

const Register = () => {

  const data = [
    { column1:  'CEG-TR-101', column2:  'Fri. March 8', column3:  'CalARP/RMP/PSM/CERS/Tier II Regulatory Compliance', column4:  ''},
    { column1:  'CEG-TR-201', column2:  'Thurs. March 14', column3:  'Basic Industrial Ammonia Refrigeration (RETA IR Book 1)', column4:  'March 2024'},
    { column1:  'CEG-TR-202', column2:  'Fri. March 15', column3:  'Intermediate Industrial Ammonia Refrigeration (RETA IR Book 2)', column4: <a href='https://docs.google.com/forms/d/e/1FAIpQLSdZsLQYyRLEonEQ3q1Vq80lD2t9YMkdaQxUKbuMxdy-AUmqYA/viewform?usp=pp_url' style={{textDecoration: 'underline', color: 'red'}}>Register Form</a>},
    { column1:  'CEG-TR-301', column2:  'Fri. March 22', column3:  'HAZWOPER 8-hour Refresher Training', column4:  ''},
  ]

  const data2 = [
    { column5:  'CEG-TR-101', column6:  'Thurs. May 2', column7:  'CalARP/RMP/PSM/CERS/Tier II Regulatory Compliance', column8:  ''},
    { column5:  'CEG-TR-201', column6:  'Thurs. May 9', column7:  'Basic Industrial Ammonia Refrigeration (RETA IR Book 1)', column8:  'May 2024'},
    { column5:  'CEG-TR-202', column6:  'Fri. May 10', column7:  'Intermediate Industrial Ammonia Refrigeration (RETA IR Book 2)', column8: <a href='https://docs.google.com/forms/d/e/1FAIpQLSdAc6aGpSI3xhEiGFNiXtN7hSlmRwW8MfYipNtmUgdbOPevKw/viewform?usp=pp_url' style={{textDecoration: 'underline', color: 'red'}}>Register Form</a>},
    { column5:  'CEG-TR-301', column6:  'Thurs. May 16', column7:  'HAZWOPER 8-hour Refresher Training', column8:  ''},

  ];

  const data3 = [
    {column9:  'CEG-TR-101', column10:  'Thurs. July 18', column11:  'CalARP/RMP/PSM/CERS/Tier II Regulatory Compliance', column12:  ''},
    {column9:  'CEG-TR-201', column10:  'Thurs. July 25', column11:  'Basic Industrial Ammonia Refrigeration (RETA IR Book 1)', column12:  'July & Aug 2024'},
    {column9:  'CEG-TR-202', column10:  'Fri. July 26', column11:  'Intermediate Industrial Ammonia Refrigeration (RETA IR Book 2)', column12: <a href='https://docs.google.com/forms/d/e/1FAIpQLSfOXUhR67McpWluKU08F4IdBPy1yT3pL7s9D9Gy6vk2hoY1MA/viewform?usp=pp_url' style={{textDecoration: 'underline', color: 'red'}}>Register Form</a>},
    {column9:  'CEG-TR-301', column10:  'Thurs. Aug 1', column11:  'HAZWOPER 8-hour Refresher Training', column12:  ''},
  ];

  const data4 = [
    {column13:  'CEG-TR-101', column14:  'Thurs. Sep 19', column15:  'CalARP/RMP/PSM/CERS/Tier II Regulatory Compliance', column16:  ''},
    {column13:  'CEG-TR-201', column14:  'Thurs. Sep 26', column15:  'Basic Industrial Ammonia Refrigeration (RETA IR Book 1)', column16:  'Sep & Oct 2024'},
    {column13:  'CEG-TR-202', column14:  'Fri. Sep 27', column15:  'Intermediate Industrial Ammonia Refrigeration (RETA IR Book 2)', column16: <a href='https://docs.google.com/forms/d/e/1FAIpQLSfkScAliKERXwF6RkTPrLTMegS1w1Cq-4vf5Y8v64LYl9P4uA/viewform?usp=pp_url' style={{textDecoration: 'underline', color: 'red'}}>Register Form</a>},
    {column13:  'CEG-TR-301', column14:  'Thurs. Oct 3', column15:  'HAZWOPER 8-hour Refresher Training', column16:  ''}
  ];

  return (
    <div className="pt-4">
       <div className="pb-4 bg-gradient-to-t from-stone-300 via-zinc-300 to-white min-h-screen">
       <div className="mb-12">
        <h1 className="text-center font-bold text-4xl mt-4 font-sans">TRAINING</h1>
      </div>
         <h1 className="text-center text-3xl mb-4 font-sans text-gray-600">RPM/PSM Regulatory Compliance, Ammonia Refrigeration, and HAZWOPER Training</h1>
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
            <div class="max-w-[800px] justify-self-end">
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
            <div className='table'>
              <TableRegister data={data} data2={data2} data3={data3} data4={data4} />
            </div>

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
          <div class="max-w-[800px] justify-self-start">
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
