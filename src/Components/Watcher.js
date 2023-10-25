import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideItems, showItems } from '../Redux/navSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const Watcher = () => {
  const [searchParams]=useSearchParams();
  const id=searchParams.get("v");
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(hideItems());


  },[])
  return (
    <div>
      <div className='flex'>
    <div className='p-2 m-2 rounded-lg'>
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/"+id}
        title="Youtube video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media"
        allowFullscreen
      />
    </div>
    <div >
    <LiveChat  />
    
    </div>
    </div>
     
    <CommentsContainer/>
    </div>
  )
}

export default Watcher
