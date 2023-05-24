import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) =>{
  const renderList = props.videos.map((vid)=>{
    return <VideoItem video = {vid} onVidSelect={props.onVideoSelect} key = {vid.id.videoId}/>;
  });
  return(
    <div  className = "ui relaxed divided list">
    {renderList}
    </div>
  )
}

export default VideoList;
