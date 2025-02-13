import React from 'react'

const Chatmessage = ({name,comment}) => {
  return (
    <div className='flex  bg-gray-100 rounded-lg shadow-sm m-2 ' >
       <img
          alt="user avatar"
          className="h-8 w-8 mt-1 rounded-full cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        />
         <div className='pl-2'>
            <h1 className='font-semibold'>{name}</h1>
            <p>{comment}</p>
         </div>
    </div>
  )
}

export default Chatmessage