import React from 'react'



const Comment = ({commentData}) => {
    const {name,comment,replies}=commentData;
  return (
    <div className='flex bg-gray-100 shadow-lg rounded-lg my-2'> 
      <img className="w-10 h-8" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="UserImage" />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  )
}

export default Comment
