import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const navSlice=useSelector((state)=>{return state.nav.showSideBar});
   if(!navSlice){
    return null;
   }
  return (
    

    
    <div className='w-48 shadow-lg p-2  text-center'>

        
        <div>
     <h3 className='font-bold py-1'><Link to="/">Home</Link></h3>
      <h3 className='font-bold py-1'>Shorts</h3>
      <h3 className='font-bold py-1'>Video</h3>
      <h3 className='font-bold py-1'>Live Video</h3>
      </div>
      <h3 className='font-bold'>Subscription</h3>
      <ul>
        <li>Songs</li>
        <li>Music</li>
        <li>Games</li>
      </ul>
      <h3 className='font-bold'>Youtube Music</h3>
      <ul>
        <li>Bollywood</li>
        <li>Punjabi</li>
        <li>Hollywood</li>
      </ul>

    </div>
  )
}

export default Sidebar
