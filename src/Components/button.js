import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className=' m-2 bg-gray-300 px-4 py-1 rounded-lg'>
            {name}
        </button>
    </div>
  )
}

export default Button