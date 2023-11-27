import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";


const GetData = () => {
    const [todo, setTodos] = useState("");

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, "/task/today"))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              setTodos(data.todo);
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

    return (
        <>
            {todo}
        </>
    )
}

export default GetData;