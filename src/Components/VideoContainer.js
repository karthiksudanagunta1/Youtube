import React, { useEffect, useState } from 'react'
import { youtubeVideKey } from '../utils/constants'
import Video from './Video';
import { Link } from 'react-router-dom';

function VideoContainer() {
    const [video,setVideos]=useState([]);
    useEffect(()=>{
     videos()
    },[])

   const videos=async()=>{
    const result=await fetch(youtubeVideKey);
    const data =await result.json();
    setVideos(data.items);
   }
  return (
    <div className='flex flex-wrap justify-evenly m-1'>{
        video.map(e=><Link to={"watch?v="+e?.id} key={e.id} ><Video  info={e}/></Link>)}</div>
  )
}

export default VideoContainer