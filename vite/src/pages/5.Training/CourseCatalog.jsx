import React from 'react';
import Card from '/src/components/card/Card.jsx';
import Table from '/src/components/table/table.jsx';

const CourseCatalog = () => {
  const tableData = [
    { column1: 'CEG-TR-101', column2: 'Mon, Feb. 5', column3: 'CalARP/RMP/PSM/CERS/Tier II Regulatory Compliance'},
    { column1: 'CEG-TR-201', column2: 'Tue, Feb. 6', column3: 'Basic Industrial Ammonia Refrigeration (RETA IR Book 1)'},
    { column1: 'CEG-TR-301', column2: 'Wed, Feb. 7', column3: 'Intermediate Industrial Ammonia Refrigeration (RETA IR Book 2)'},
    { column1: 'CEG-TR-301', column2: 'Thurs, Feb. 8', column3: 'HAZWOPER 8-hour Refresher Training'},
  ];

    return (
      /*Intro Section */
      <div className="text-center p-4">
        <div className=" bg-gradient-to-t from-stone-300 via-zinc-300 to-white"> {/* Background color gradient */}   
          <p className="text-500 font-bold text-xl pb-5" style={{ fontSize: '2rem' }}>Course Catalog</p>
          <div className="flex justify-center">
            <Card
              imageSrc ='/src/assets/img/services/regulatory_compliance.png'
              title="CalARP/RMP/PSM/CERS/Tier II Regulatory Compliance"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit a nisi aliquet fringilla. Fusce con"
              price="500"
            />
            <Card
              imageSrc="/src/assets/img/services/refrigeration.png"
              title="Basic Industrial Ammonia Refrigeration (RETA IR Book 1)"
              desc="orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit a nisi aliquet fringilla. Fusce con"
              price="500"
            /> 
            <Card
              imageSrc="/src/assets/img/services/refrigeration.png"
              title="Intermediate Industrial Ammonia Refrigeration (RETA IR Book 2)"
              desc="short desc"
              price="500"
            />
            <Card
              imageSrc="/src/assets/img/services/refrigeration.png"
              title="HAZWOPER 8-hour Refresher Training"
              desc="orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit a nisi aliquet fringilla. Fusce con"
              price="500"
            />
          </div>

          {/* Margin */}
          <div style={{ marginBottom: '100px' }}></div>

          <div style={{ textAlign: 'center'}}>
            <h1 style={{fontSize: '2rem' }}>Next Training: Feb & March 2024 in Monterey, CA!</h1>
            <div style={{ marginBottom: '20px' }}></div>
            <p className="text-500 text-xl pb-5">Attend either in person at the Cypress Engineering Group Training Classroom or on Zoom</p>
            <p className="text-500 text-xl pb-5" style={{ textDecoration: 'underline' }}>8 Harris Court, Suite A6, Monterey, CA 93940</p>
            <p className="text-500 text-xl pb-5">We look forward to seeing you at our upcoming training sessions!</p>
          </div>
          <p className="text-500 font-bold text-xl pb-5">Upcoming Training Dates</p>
          {/* Table Section */}
          <Table data={tableData} />
          <div style={{ marginBottom: '50px' }}></div>
          <div className='text-500 text-xl pb-5'>
            <div style={{ textAlign: 'center'}}>
              <p className='bullet-point'>Training Fee Includes:</p>
              <div style={{ marginBottom: '10px' }}></div>
              <p className='bullet-point'>&bull; Training materials</p>
              <p className='bullet-point'>&bull; Continental breakfast and lunch for in-person trainees</p>
              <p className='bullet-point'>&bull; Certificate upon completion</p>
              <p className='bullet-point'style={{ color: 'red' }}>Register now!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default CourseCatalog