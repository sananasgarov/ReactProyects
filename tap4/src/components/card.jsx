import React from 'react'

function Card({ userId, id, title, completed }) {
  return (
    <div className='flex justify-center items-center gap-[50px] p-[20px] bg-black text-white rounded-[20px] shadow-md'>
        <div className='flex flex-col gap-[10px]'>
            <p>UserId: {userId}</p>
            <p>Id: {id}</p>
        </div>
        <div className='flex flex-col gap-[10px]'>
            <p>Title: {title}</p>
            <p>Status: {completed ? "Completed" : "Not Completed"}</p>
        </div>
    </div>
  )
}

export default Card