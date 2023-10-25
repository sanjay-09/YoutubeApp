import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-6 m-4 py-2 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
