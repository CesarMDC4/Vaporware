import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyA-FXHwEXNgs-y5vbjBrC46w8qAB0QaniI",
    authDomain: "vaporware-4b2bc.firebaseapp.com",
    projectId: "vaporware-4b2bc",
    storageBucket: "vaporware-4b2bc.appspot.com",
    messagingSenderId: "861851951828",
    appId: "1:861851951828:web:a5a4161c73b82312ca5141",
    measurementId: "G-6XH0KDCD6J"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();

const User = doc(db, 'User/Cesar');

function writeUser() {
    const userData = {
        fName: 'Cesar',
        lName: 'Martin Del Campo',
        email: 'Cesar@csus.edu'
    };
    setDoc(User, userData);
}

const CourseHistory = () => {
    const [trainingHistory, setTrainingHistory] = useState([]);

    useEffect(() => {
        // 获取用户培训项目历史数据
        const fetchTrainingHistory = async () => {
            try {
                const trainingHistoryCollection = collection(db, `User/Cesar/TrainingHistory`);
                const trainingHistorySnapshot = await getDocs(trainingHistoryCollection);
                const historyData = trainingHistorySnapshot.docs.map(doc => doc.data());
                setTrainingHistory(historyData);
            } catch (error) {
                console.error('Error fetching training history:', error);
            }
        };

        fetchTrainingHistory();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-center pt-4 pb-4">Training History</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Project Name</th>
                        <th>Time</th>
                        <th>Status</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {trainingHistory.map((training, index) => (
                        <tr key={index}>
                            <td><img src={training.projectImage} alt={training.projectName} className="w-16 h-16 object-cover" /></td>
                            <td>{training.projectName}</td>
                            <td>{training.time}</td>
                            <td>{training.status}</td>
                            <td>{training.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseHistory;
