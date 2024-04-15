import React, {useState, useEffect} from 'react'
import CourseHistoryTable from '../../components/table/CourseHistoryTable';
import { collection, getDocs, where, getFirestore, query} from 'firebase/firestore';








const CourseHistory = () => {
  const [courseData, setCourseData] = useState([]);
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function queryUserDetails(uid){
    try {
      const db = getFirestore();
      const collections = collection(db, 'allCollections');
      const snapshot = await getDocs(collections);

      const collectionNames = [];
      snapshot.forEach(doc => {
        collectionNames.push(doc.id);
      });

      const userData = [];
      for(const collectionName of collectionNames){
        const collectionRef = collection(db, collectionName);
        const q = query(collectionRef, where('uid', '==', uid))
        const collectionSnapshot = await getDocs(q);
        if (collectionSnapshot.empty) {
          console.log('No matching documents.');
        }
        collectionSnapshot.forEach((doc) => {
          if(doc.data().attendDay1 === 'Yes'){
            userData.push({trainingDate: doc.data().day1Date, company: doc.data().companyName, courseName: "CEG-TR-101", status: doc.data().status});
          }
          if(doc.data().attendDay2 === 'Yes'){
            userData.push({trainingDate: doc.data().day2Date, company: doc.data().companyName, courseName: "CEG-TR-201", status: doc.data().status});
          }
          if(doc.data().attendDay3 === 'Yes'){
            userData.push({trainingDate: doc.data().day3Date, company: doc.data().companyName, courseName: "CEG-TR-202", status: doc.data().status});
          }
          if(doc.data().attendDay4 === 'Yes'){
            userData.push({trainingDate: doc.data().day4Date, company: doc.data().companyName, courseName: "CEG-TR-301", status: doc.data().status});
          }
          const fullName = doc.data().firstName+' '+doc.data().lastName;
          setUserName(fullName);
        });
      }
      setCourseData(userData);

    } catch (error) {
      console.error('Error querying user details:', error);
    }
  }

  useEffect(() => {
    try
    {
      const sessionID = localStorage.getItem('userId');
      if (sessionID === '0') {
        setErrorMessage('Please Sign In. Get an account by contacting CEG.');
      }
      else{
        queryUserDetails(sessionID);
      }
    } 
    catch (error) 
    {
      console.error('Error querying user details:', error);
    }
  }, []);




  return (
    
    <div class="flex flex-wrap flex-col h-full">

      
        <div class="bg-gray-900 text-2xl font-bold text-center pt-4 text-white h-24">
            <h1>Course History</h1>
            <h2>Name: {userName} </h2>
        </div>
        {errorMessage && (
            <div class="bg-red-500 text-white text-center text-xl h-screen">
                {errorMessage}
            </div>
        )}

        {!errorMessage &&(
            <div class=" text-center bg-gradient-to-t from-stone-300 via-zinc-300 to-white rounded text-black text-lg h-screen">

                <CourseHistoryTable data={courseData} />
                
            </div>
        )}
    </div>
    
    
  )
}

export default CourseHistory;