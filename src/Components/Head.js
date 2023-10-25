import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { showItems } from '../Redux/navSlice';
import { cacheResults } from '../Redux/searchSlice';

const Head = () => {
    const [sideSlide,setsideSlide]=useState(false);
    const [text,setText]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [viewSuggestions,setViewSuggestions]=useState(false);
    const searchCache=useSelector((store)=>store.search);
    
    const dispatch=useDispatch();

      useEffect(()=>{

        
         const timer= setTimeout(()=>{
          if(searchCache[text]){
            console.log(searchCache[text]);
            setSuggestions(searchCache[text]);
          }
          else{
            showSuggestions();
          }
          },200);
        

          return ()=>{
            clearInterval(timer);
          }
      
      },[text]);

      const showSuggestions=async()=>{
      
        const resp=await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+text);
        const data=await resp.json();
        setSuggestions(data[1]);
        dispatch(cacheResults({
          [text]:data[1]
        }))
      }

    const handleSideBar=()=>{
        dispatch(showItems());
         
    }
  return (
   <div className='grid grid-flow-col m-2 p-4 shadow-lg'>
          
   <div className='flex col-span-1'>
             <img  className='h-10' onClick={handleSideBar} src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" alt="sideBar" />
              <img className='h-10' src="https://upload.wikimedia.org/wikipedia/commons/7/72/YouTube_social_white_square_%282017%29.svg" alt="YtLogo" />

   </div>

   <div className='col-span-10 px-10'>
    <div>
          <input  className="w-1/2 border border-gray-400 rounded-l-full p-2" type="text" name="" id="" value={text} onChange={(e)=>{setText(e.target.value)}} onFocus={()=>setViewSuggestions(true)} onBlur={()=>setViewSuggestions(false)}/>
          <button className='border border-gray-400 rounded-r-full p-2'>Search</button>

   </div>
   {viewSuggestions&&
   <div className='fixed bg-slate-100 px-2 py-2 w-[27.5rem] shadow-lg rounded-sm border border-gray-100'>
    <ul>
      {
      suggestions.map(s=><li key={s} className='py-2 px-2 shadow-sm hover:bg-gray-200'>{s}</li>)
      }
    </ul>
   </div>
}
   </div>

   <div className='col-span-1'>
    <img className='h-10' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="userLogo" />

   </div>
   </div>
  )
}

export default Head
