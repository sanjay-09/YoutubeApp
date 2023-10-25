import React from 'react'
import Comment from './Comment'
const commentsData=[
  {
    name:"Sanjay Singh",
    comment:"One of the best video.Really apreciated the efforts made by you",
    replies:[
      {
        name:"Vedansh Bisht",
        comment:"You are right",
        replies:[
          {
            name:"Sanjay Singh",
            comment:"You are wrong",
            replies:[
              {
                name:"Vedansh Bisht",
                comment:"okay you are correct",
                replies:[]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name:"Vedansh Bisht",
    comment:"Whatt a videooo",
    replies:[]
  },
  {
    name:"Sanya Joshi",
    comment:"Nice video",
    replies:[]
  }
]
const CommentList=({data})=>{
  
  
  return(
   <div>
    {
      data.map((com,index)=>(
        <div>
          <Comment key={index} commentData={com}/>
          <div className='pl-5 ml-5 border border-l-black'>
            <CommentList key={index} data={com.replies}/>

            </div>
          </div>
      ))
    }
   </div>
  )
    }



const CommentsContainer = () => {
  
  return (
    <div className='p-2 m-2'>
      <h3 className='text-2xl'>Comments</h3>
      <CommentList data={commentsData}/>
    

    </div>
  )
}

export default CommentsContainer
