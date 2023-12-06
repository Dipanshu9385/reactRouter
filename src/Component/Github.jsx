import React, { useEffect, useState } from 'react'

const Github = () => {
    const[data,setData]=useState([])

    useEffect( ()=>{
        const fetchDate=async ()=>{
            try {
                const responce=await fetch('https://api.github.com/users/Dipanshu9385')
                // The response status is within the success range (200-299)
                // responce.ok ===true (means responce is sucessfully recived) && !responce.ok===false (means responce is not recived)
                if(!responce.ok){                  
                    throw new Error ("Something went wrong ! Please reload the page ")
                }
                
                const results= await responce.json()
                setData(results)
            } catch (error) {
                console.error("Error is occured",error)
                setData(error)
            }
        }
        fetchDate();
       
    },[])

  return (
    <div className='my-44 flex flex-col  justify-center items-center  gap-5'>
     <div><img className='w-60 h-60 rounded-full' src={data.avatar_url} alt="" /></div>
      <h1 className='  text-4xl'>Welcome to Github :{data.name} </h1>
      <h5 className=' text-2xl'>Github link : <span className='text-blue-800 text-lg decoration-black underline'>{data.url}</span></h5>
      <h5 className=' text-2xl'>Location :{data.location}</h5>
     
    </div>
  )
}

export default Github
