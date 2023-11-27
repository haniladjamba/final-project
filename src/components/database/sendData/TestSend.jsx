import React from 'react'
import { useState } from 'react'

function FirebaseDemo() {

    const [details, setDetails] = useState({
        fName: '',
        lName: '',
        email: '',
       
    })

    const PostData =async(e)=>{
        e.preventDefault()

        const{fName,lName,email}=details;

       const res=await fetch("https://fe-final-project-d25ae-default-rtdb.firebaseio.com/haniform.json",
       {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            fName,
            lName,
            email,
           
           })
        })

    }

  return (
    <div className='form' >
        <input type='text' placeholder='Enter your first name' onChange={(e)=>
            setDetails({...details,fName:e.target.value})} />
        <input type='text' placeholder='Enter your last name' onChange={(e)=>
            setDetails({...details,lName:e.target.value})}  />
        <input type='email' placeholder='Enter your Email address' onChange={(e)=>
            setDetails({...details,email:e.target.value})} />
        <button onClick={PostData}>Submit</button>
    </div>
  )
}

export default FirebaseDemo;