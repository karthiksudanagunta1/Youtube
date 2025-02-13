import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLiveChat } from '../utils/LiveChat';
import Chatmessage from "./Chatmessage";
import {generate,makeid} from "../utils/helper" 

const LiveChat = () => {
   const dispatch=useDispatch();
   const livedata=useSelector((store)=>store.LiveChat.messages);
   console.log(livedata);
   const[liveMessage,setLiveMessage]=useState('');

    useEffect(()=>{
      const i=setInterval(()=>{
        dispatch(addLiveChat({name:generate(),message:makeid(10)}))
      },1500)

      return ()=>clearInterval(i);
    },[])

  return (
    <>
    <div className="pl-2 ml-1 w-[500px] h-[600px] bg-slate-50 border-2 border-black flex flex-col-reverse overflow-y-auto">
       {
        livedata.map((c, i) => (
          <Chatmessage key={c.name + i} name={c.name} comment={c.message} />
        ))
       }    
    </div>
    <form className='w-full border-2 border-black flex justify-around' onSubmit={(e)=>{
      e.preventDefault();
      setLiveMessage('');
      dispatch(addLiveChat({name:"karthik",message:liveMessage}))
    }}>
        <input value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} className='w-96' />
        <button className='bg-green-400 p-2 '>sent</button>
    </form>
    </>
  )
}

export default LiveChat