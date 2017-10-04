import React from 'react'
import  {
  VoteButton,
  VoteContainer
} from './style'

const Upvote = ({ id, isUpvoted, onClick }) => {
  return(
    <VoteContainer>
      <VoteButton onClick={onClick} isUpvoted={isUpvoted} />
    </VoteContainer>
  )
}

export default Upvote
