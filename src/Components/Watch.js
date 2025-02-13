import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/Slice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import LiveChat from "./LiveChat";
import { comments } from "../utils/constants";

function Watch() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
   
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  

  return (
    <div className="pt-24 pl-2 h-full">
      <div className="flex flex-nowrap h-full overflow-x-hidden">
      <iframe
        width="1000"
        height="600"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
       <div >
        <LiveChat/> 
       </div>
      </div>
      <div className="m-2 p-3">
        <h1 className="text-bold text-xl">Comments:</h1>
        <div>
          {<CommentList comments={comments}/>}
        </div>
      </div>
    </div>
  );
}

export default Watch;
