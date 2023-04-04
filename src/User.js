import React from 'react'

function User(prop) {
    const data =prop.users
  return (
    <div>
        {data.map((val,index)=>{
            return <h1 key={index
            }>{val.name}</h1>
        })}
    </div>
  )
}

export default User