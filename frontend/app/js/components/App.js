import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components';
import SearchContainer from '../containers/character/SearchContainer'
import './style/globals'
import {
  RedBackground
} from './style/backgrounds'
import {
  Grid,
  BASE_THEME
} from './style/responsive'
import {
  SPACING_THEME
} from './style/layout'

const App = ({ children }) => (
  <div>
    <ThemeProvider theme={{
      ...BASE_THEME, ...SPACING_THEME, outerMargin: 0
    }} >
      <RedBackground>
        <Grid fluid>
          <SearchContainer />
        </Grid>
      </RedBackground>
    </ThemeProvider>
    <ThemeProvider theme={
        {
          ...BASE_THEME, ...SPACING_THEME
        }
      }>
      <Grid fluid>
        { children }
        </Grid>
    </ThemeProvider>
  </div>
)

export default App

