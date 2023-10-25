import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex p-2 shadow-lg'>
      <img className="h-8 w-8" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
