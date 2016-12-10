import React from 'react'

const Upvote = ({ id, isUpvoted, onClick }) => {
  return(
    <div className='comic-upvote-container'>
      { isUpvoted ? <button className='upvote-btn upvote-btn-on' onClick={onClick} /> : <button className='upvote-btn upvote-btn-off' onClick={onClick} /> }
    </div>
  )
}

export default Upvote
