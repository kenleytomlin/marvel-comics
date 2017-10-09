import React from 'react'
import UpvoteContainer from '../../containers/comic/UpvoteContainer'
import {
  Col
} from '../style/responsive'
import {
  Container
} from '../style/layout'
import {
  ComicContainer,
  ComicOverlayContainer,
  ComicCoverThumbnail,
  ComicOverlayTitle,
  ComicOverlayIssueNumber
} from './style'

const Comic = ({ id, title, issueNumber, thumbnail }) => {
  return(
    <Col xs={12} sm={6} md={4} lg={3}>
      <Container xs={{ top: 'md', bottom: 'md' }}>
        <ComicContainer>
          <ComicCoverThumbnail src={thumbnail} />
          <UpvoteContainer id={id} />
          <ComicOverlayContainer>
            <ComicOverlayTitle>
              <Container
                xs={{ left: 'sm', bottom: 'md', right: 'md' }}>
                { title }
              </Container>
            </ComicOverlayTitle>
            <ComicOverlayIssueNumber>
              <Container
                xs={{ left: 'sm', bottom: 'md', right: 'md' }}>
                Issue #{ issueNumber }
              </Container>
            </ComicOverlayIssueNumber>
          </ComicOverlayContainer>
        </ComicContainer>
      </Container>
    </Col>
  )
}

export default Comic
