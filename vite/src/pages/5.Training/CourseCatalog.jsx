import React, { useState } from 'react';
import Card from '/src/components/card/Card.jsx';
import Table from '/src/components/table/table.jsx';
import { Products } from '/src/pages/8.Products/products';
import { Product } from '/src/pages/8.Products/product.jsx';
import '/src/index.css';
import Cart from '/src/pages/9.Cart/Cart.jsx'

const CourseCatalog = () => {

  const tableData = [
    { column1: 'CEG-TR-101', column2: 'Mon, Feb. 5', column3: 'CalARP/RMP/PSM/CERS/Tier II Regulatory Compliance'},
    { column1: 'CEG-TR-201', column2: 'Tue, Feb. 6', column3: 'Basic Industrial Ammonia Refrigeration (RETA IR Book 1)'},
    { column1: 'CEG-TR-301', column2: 'Wed, Feb. 7', column3: 'Intermediate Industrial Ammonia Refrigeration (RETA IR Book 2)'},
    { column1: 'CEG-TR-301', column2: 'Thurs, Feb. 8', column3: 'HAZWOPER 8-hour Refresher Training'},
  ];

    return (
      /*Intro Section */
      <div className='courseCatalog'>
        <div className="background" style={{ backgroundImage: 'linear-gradient(to top, #D1D5DB, #A1A1AA, #FFFFFF)', border: 'none' }}> {/* Background color gradient */}
          <div className='ccTitle'>
            <h1>Course Catalog</h1>
          </div>
          <div className='products'>
            {Products.map((product) => ( 
              <Product key={product.id} data={product} />
            ))}
          </div>

          <div className='nextTraining'>
            <h1>Next Training: Feb & March 2024 in Monterey, CA!</h1>
          </div>

          <div className='ntInfo'>
            <p>Attend either in person at the Cypress Engineering Group Training Classroom or on Zoom</p>
          </div>
          <div className='address'>
            <p>8 Harris Court, Suite A6, Monterey, CA 93940</p>
          </div>
          <div className='ntInfo'>
            <p>We look forward to seeing you at our upcoming training sessions!</p>
          </div>
          <div className='tableTitle'>
            <h1>Upcoming Training Dates</h1>
          </div>

          <div className='table'>
            <Table data={tableData} />
          </div>
          <div className='bpTitle'>
            <h1>Training Fee Includes:</h1>
          </div>
          <div className='bulletPoint'>
            <p>Training materials</p>
            <p>Continental breakfast and lunch for in-person trainees</p>
            <p>Certificate upon completion</p>
            <a href = "http://localhost:5173/Training/Register" className = "button-link" style = {{ color: 'red', fontWeight: 'bold'}}>
              [Register Now]
            </a>
          </div>
          </div>
        </div>
      
    )
  }
  
  export default CourseCatalog