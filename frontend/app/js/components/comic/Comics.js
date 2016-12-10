import React from 'react'
import ComicContainer from '../../containers/comic/ComicContainer'
import PaginationContainer from '../../containers/comic/PaginationContainer'

const Comics = ({ ids, isFetching }) => {
  return(
    <div className='comics-container'>
      {
        ids.map( (chunk,i)  => {
          return(<div key={`comics-chunk-${i}`} className='comic-row'>
            { chunk.map( (id,i) => {
              return(<ComicContainer key={`comics-${id}`} id={id} />)
              })
            }
          </div>)
        })
      }
      { isFetching ? <div className='loader-overlay'><div className='loader'/> </div>: undefined }
      <div className='comic-row'>
        <PaginationContainer />
      </div>
    </div>
  )
}

export default Comics

