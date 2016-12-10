import React from 'react'
import UpvoteContainer from '../../containers/comic/UpvoteContainer'

const Comic = ({ id, title, issueNumber, thumbnail }) => {
  return(
    <div className='comic-container'>
      <img className='comic-cover-thumbnail' src={thumbnail} />
      <UpvoteContainer id={id} />
      <div className='comic-overlay-container'>
        <div className='comic-overlay-title'>
          { title }
        </div>
        <div className='comic-overlay-issue-number'>
          { issueNumber }
        </div>
      </div>
    </div>
  )
}

export default Comic
