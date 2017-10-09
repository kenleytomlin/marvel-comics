import React from 'react'
import ComicContainer from '../../containers/comic/ComicContainer'
import PaginationContainer from '../../containers/comic/PaginationContainer'
import {
  Row,
  Col
} from '../style/responsive'
import {
  LoaderOverlay,
  Loader
} from '../style/loader'
import {
  Container
} from '../style/layout'

const Comics = ({ ids, isFetching }) => {
  return(
    <Container
      xs={{ top: 'md', bottom: 'md' }}
      sm={{ top: 'lg', bottom: 'lg' }}
    >
      {
        ids.map((chunk,i) => (
            <Row key={`comics-chunk-${i}`}>
              {
                chunk.map((id,i) => (
                  <ComicContainer key={`comics-${id}`} id={id} />
                  )
                )
              }
            </Row>
          )
        )
      }
      { isFetching ? <LoaderOverlay><Loader /> </LoaderOverlay>: undefined }
      <Row xs={{ justifySpaceBetween: true }}>
        <PaginationContainer />
      </Row>
    </Container>
  )
}

export default Comics

