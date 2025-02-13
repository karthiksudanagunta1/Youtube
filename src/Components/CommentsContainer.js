import React from 'react'

const CommentsContainer = ({item}) => {
    const {name,comment}=item;
  return (
    <div className='m-3 p-4 flex shadow-lg bg-gray-50 rounded'>
        <img    
          alt="user avatar"
          className="h-10 w-10 rounded-full cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        />
        <div className='flex-col ml-3 pl-2'>
          <h1 className='font-bold text-lg'>{name}</h1>
          <p>{comment}</p>
        </div>

    </div>
  )
}

export default CommentsContainer