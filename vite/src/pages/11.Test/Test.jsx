import React, {useState} from 'react'
import DatePicker from 'react-datepicker'
import CourseHistoryTable from '../../components/table/CourseHistoryTable';
import { initializeApp } from "firebase/app";
import { collection, getDocs, where, getFirestore, query} from 'firebase/firestore';
import 'react-datepicker/dist/react-datepicker.css';

{/*const firebaseConfig = {
  apiKey: "AIzaSyA-FXHwEXNgs-y5vbjBrC46w8qAB0QaniI",
  authDomain: "vaporware-4b2bc.firebaseapp.com",
  projectId: "vaporware-4b2bc",
  storageBucket: "vaporware-4b2bc.appspot.com",
  messagingSenderId: "861851951828",
  appId: "1:861851951828:web:a5a4161c73b82312ca5141",
  measurementId: "G-6XH0KDCD6J"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);*/}


const Test = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date) =>
  {
    setStartDate(date);
    {/*const fetchData = async() =>{
      try{
        const q = query(collection(db,"registrations_February_5-8_2024"), where("attendDay1", "==", "Yes"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=> {
          console.log(doc.id, "=>", doc.data());
      });
      }
      catch(error){
        console.error('Error fetching data:', error)
      }
    }
    fetchData();*/}
  };
  const courseData = [
    { courseName: 'CEG-TR-101', employeeName: 'Cesar ', company: 'Alpha', status: 'pass'},
    { courseName: 'CEG-TR-201', employeeName: 'Ali ', company: 'MTB', status: 'pass'},
    { courseName: 'CEG-TR-301', employeeName: 'Zheng ', company: 'RGMK', status: 'pass'},
    { courseName: 'CEG-TR-301', employeeName: 'Elesia', company: 'AUSD', status: 'pass'},
  ];

  return (
    
    <div class="flex flex-wrap flex-col gap-4 h-full">

      
      <div class="bg-green-500 text-2xl font-bold text-center text-black h-24">
        <h1>Course History</h1>
      </div>


      <div class=" text-center bg-gray-900 rounded text-white h-full">
        <h1>What month do you want to see?</h1>
        <div class="text-black ">
          <DatePicker 
          selected={startDate} 
          onChange={handleDateChange} 
          dateFormat="MM/yyyy" 
          showMonthYearPicker/>
        </div>



        <CourseHistoryTable data={courseData} />
        <CourseHistoryTable data={courseData} />
        <CourseHistoryTable data={courseData} />
        <CourseHistoryTable data={courseData} />

            
      </div>
      
    </div>
    
    
  )
}

export default Test