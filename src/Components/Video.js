import React from 'react'

const Video = ({info}) => {
    // console.log(info);
    const {snippet,statistics}=info;
    const {thumbnails,title}=snippet
  return (
    <div className='m-1 shadow-sm '>
        <img src={thumbnails.medium.url} alt="videos" className="w-52 rounded-md"/>
        <h1 className='font-bold w-52'>{title}</h1>
        <div className='flex'>
            <p className='p-2'>{statistics.viewCount} views </p>
           
        </div>
    </div>
  )
}

export default Video