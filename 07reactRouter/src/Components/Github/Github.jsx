// import React from 'react'
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Prateekkumar15')
    //  .then(response => response.json())
    //  .then(data =>{
    //     console.log(data);
    //     setData(data);
    //  } )
    
     
    // }, [])
    
const data = useLoaderData()

  return (
    <>
    <div className=" text-center m-4 bg-blue-300 text-black p-4 text-4xl">Github Followers: {data.followers}
<img src={data.avatar_url} className='text-center my-4 rounded-full' width={300}  alt="git_profile" />

    </div>
    
    </>
  )
}

export default Github

export const githubInfoLoader = async ()=> {
    const response = await fetch('https://api.github.com/users/Prateekkumar15')
    return response.json()
}