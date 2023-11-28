import React from 'react'
import { useState } from 'react'

function FirebaseDemo() {

    const [details, setDetails] = useState({
        todo: '',
        reward: '',
       
    })

    const PostData =async(e)=>{
        e.preventDefault()

        const{todo,reward}=details;

       const res=await fetch("https://fe-final-project-d25ae-default-rtdb.firebaseio.com/task/today.json",
       {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            todo,
            reward,
           
           })
        })

    }

  return (
    <div className='form' >
        <input type='text' placeholder='Enter your agenda' onChange={(e)=>
            setDetails({...details,todo:e.target.value})} />
        <input type='text' placeholder='Enter the reward' onChange={(e)=>
            setDetails({...details,reward:e.target.value})}  />
        {/* <input type='email' placeholder='Enter your Email address' onChange={(e)=>
            setDetails({...details,email:e.target.value})} /> */}
        <button onClick={PostData}>Submit</button>
    </div>
  )
}

export default FirebaseDemo;