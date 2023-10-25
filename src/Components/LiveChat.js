import React, { useEffect,useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Redux/chatSlice';
import { randomNamegenerator } from '../utiities/helper';

const LiveChat = ({name,message}) => {
    const dispatch=useDispatch();
    const chatmessages=useSelector((store)=>store.chat.messages);
    const [liveMessage,setLiveMessage]=useState("");
    useEffect(()=>{

        const i=setInterval(()=>{
            console.log("API Polling");
            dispatch(addMessage({
                name:randomNamegenerator(),
                message:"Sanjay Singh is the hero"
            }))

            
        },2000);
        return ()=>{
            clearInterval(i);
        }
    },[])
  return (
    <div>
       <div className='p-2 m-2 border border-black w-[100%] h-[400px] overflow-y-scroll flex flex-col-reverse' >
        {
            chatmessages.map((c)=>
            <ChatMessage name={c.name} message={c.message}/>)
        }
       </div>
       <div className='w-full border border-black-300 p-2 m-2 '>
        <input className=" w-60 border border-black-300 px-2" type="text" name="" id="" value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}} />
        <button className='bg-green-200 px-2 m-2 rounded-md' onClick={()=>{
            dispatch(addMessage({
                name:randomNamegenerator(),
                message:liveMessage
            }))
            setLiveMessage("");
        }}>Send</button>
        </div>
        </div>
  )
    }
export default LiveChat;
