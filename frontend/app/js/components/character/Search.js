import React from 'react'
import CharactersContainer from '../../containers/character/CharactersContainer'
import {
  Row,
  Col
} from '../style/responsive'
import {
  MarvelLogo,
  SearchInput
} from './style'
import {
  Container
} from '../style/layout'

const Search = ({ params, onChange }) => (
  <Row xs={{ justifyCenter: true, alignCenter: true }} >
    <Col xs={12} >
        <Container xs={{
          top: 'lg',
          bottom: 'lg'
        }}>
            <MarvelLogo />
        </Container>
        <Container xs={{
          bottom: 'lg'
        }}>
          <SearchInput type='text' onChange={ (e) => onChange(e.target.value)  } />
        </Container>
        <CharactersContainer />
    </Col>
  </Row>
)

export default Search
