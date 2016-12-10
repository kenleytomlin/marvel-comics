import React, { Component } from 'react'
import SearchContainer from './character/SearchContainer'

export default class App extends Component {
  render() {
    const { children } = this.props

    return(
      <app>
        <SearchContainer />
        { children }
      </app>
    )
  }
}
