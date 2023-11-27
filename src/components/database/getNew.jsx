import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD6P9obdkHL18aVXiV373RmtDN7ATUkPtY",
    authDomain: "fe-final-project-d25ae.firebaseapp.com",
    databaseURL: "https://fe-final-project-d25ae-default-rtdb.firebaseio.com",
    projectId: "fe-final-project-d25ae",
    storageBucket: "fe-final-project-d25ae.appspot.com",
    messagingSenderId: "533813075047",
    appId: "1:533813075047:web:48616e2f58530996a088c2"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const YourComponent = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const taskCollection = await getDocs(collection(firestore, 'haniform'));
        const taskData = taskCollection.docs.map((doc) => doc.data());
        setTasks(taskData);
      } catch (error) {
        console.error('Error fetching tasks: ', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>fname: {task.fname}</p>
          <p>lname: {task.lname}</p>
          <p>email: {task.email}</p>
        </div>
      ))}
    </div>
  );
};

export default YourComponent;