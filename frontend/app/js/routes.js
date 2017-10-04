import React from 'react'
import { IndexRoute, Router, Route } from 'react-router'
import App from './components/App'
import ComicsContainer from './containers/comic/ComicsContainer'

export default () => {
  return(
    <Router>
      <Route path ="/" component={App}>
        <IndexRoute component={ComicsContainer} />
      </Route>
    </Router>
  )
}
