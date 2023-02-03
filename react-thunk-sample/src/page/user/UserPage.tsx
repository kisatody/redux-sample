import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const UserPage = () => {
    const roles = useSelector((state:any) => state.roles)
    const [newroles,setnewroles] = useState(roles)
    console.log(roles);
    useEffect(()=>{
        console.log(newroles);
    },[])
  return (
    <div>UserPage</div>
  )
}

export default UserPage