import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

const UseGetData = () => {
  // State to store the emailList
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    console.log('useEffect is running');

    const fetchData = async () => {
      try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, 'haniform'));

        if (snapshot.exists()) {
          const data = snapshot.val();
          const uniqueEmails = new Set();

          // Iterate through each entry and extract the email
          for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
              const emailEntry = data[key];
              const entryEmail = emailEntry.email;

              // Check if the email is not in the emailList
              if (!uniqueEmails.has(entryEmail)) {
                // If not, add it to the emailList
                uniqueEmails.add(entryEmail);
              } else {
                // If duplicate, you can choose to skip or handle accordingly
                console.log(`Duplicate email found for ${key}: ${entryEmail}`);
              }
            }
          }

          // Convert the Set to an array and update the state
          const uniqueEmailsArray = Array.from(uniqueEmails);
          setEmailList(uniqueEmailsArray);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array for running on mount

  // Access emailList outside the useEffect
  console.log('Email List outside useEffect:', emailList);

  // You can also return the emailList if needed
  return (
    <ul>
      {emailList.map((email, index) => (
        <li key={index}>{email}</li>
      ))}
    </ul>
  );
};

export default UseGetData;
