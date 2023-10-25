import React from 'react'
import Button from './Button'



const ButtonList = () => {
    const items=["All","Cricket","Cooking","Music","Comedy","FootBall","Live"];
  return (
    <div className='flex'>
     {
        items.map((item)=><Button name={item}/>)
     }

    </div>
  )
}

export default ButtonList
