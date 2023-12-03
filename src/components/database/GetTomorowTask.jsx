import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const GetDataTommorow = () => {
  const [entryList, setEntryList] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase(), 'task/tommorow');

    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const entries = [];

        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const entry = data[key];
            entries.push({ ...entry, key }); // Include the entry key for uniqueness
          }
        }

        // Sort entries by timestamp (replace 'timestamp' with the actual property name)
        entries.sort((a, b) => b.timestamp - a.timestamp);

        setEntryList(entries);
        console.log("ENTRYLIST:",entryList)
      } else {
        console.log('No data available');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log('Entry List outside useEffect:', entryList);

  return (
    <div>
      <ul style={{ color: "#B6EADA" }}>
        {entryList.map((entry) => (
          <li key={entry.key}>
            task: {entry.todo || entry.reward || entry.priority}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetDataTommorow;
