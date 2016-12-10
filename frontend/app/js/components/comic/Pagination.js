import React from 'react'

const Pagination = ({ currentPage, isLast, next, previous }) => {
  return(
    <div className='comic-pagination-container'>
      <div className='comic-pagination-btn-container previous'>
        { currentPage > 0 ? <button className='comic-previous-btn' onClick={previous} > Previous Page </button>: undefined }
      </div>
      <div className='comic-pagination-btn-container next'>
        { isLast === false ? <button className='comic-next-btn' onClick={next} > Next Page </button> : undefined }
      </div>
    </div>
  )
}

export default Pagination
