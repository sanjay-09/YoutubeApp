import React, { useEffect,useState } from 'react'
import { YoutubeAPI } from '../utiities/constant';
import VideoCard from './VideoCard';
import {Link} from "react-router-dom"

const VideoContainer = () => {
    const [videos,setVideos]=useState([]);
    console.log(videos);


    useEffect(()=>{
        getData();

    },[])

    const getData=async()=>{
        const response=await fetch(YoutubeAPI);
        const data=await response.json();
        setVideos(data.items);
    }
    if(videos.length==0){
        return null;
    }
  return (
    <div className='grid grid-cols-3 gap-6'>
       {
        videos.map((video)=>
       <Link to={"/watch?v="+video.id}> <VideoCard key={video.id} info={video}
        />
        </Link>
        
        )
       }
    </div>
  )
} 

export default VideoContainer
