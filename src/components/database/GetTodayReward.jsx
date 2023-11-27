import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";


const GetReward = () => {
    const [reward, setReward] = useState("");

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, "task/today"))
          .then((snapshot) => {
            if (snapshot.exists()) {
              const data = snapshot.val();
              setReward(data.reward);
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
            {reward}
        </>
    )
}

export default GetReward;