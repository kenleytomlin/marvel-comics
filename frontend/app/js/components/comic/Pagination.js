import React from 'react'
import {
  Col,
  Row
} from '../style/responsive'
import {
  PreviousButton,
  NextButton
} from './style'

const Pagination = ({ currentPage, isLast, next, previous }) => {
  return(
    <Col xs={12} >
      <Row >
        <Col xs={6} >
          { currentPage > 0 ? <PreviousButton onClick={previous} > Previous Page </PreviousButton>: undefined }
        </Col>
        <Col xs={6}>
          { isLast === false ? <NextButton onClick={next} > Next Page </NextButton> : undefined }
        </Col>
      </Row>
    </Col>
  )
}

export default Pagination
