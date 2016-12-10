import React from 'react'
import { IndexRoute, Router, Route } from 'react-router'
import App from './containers/App'
import ComicsContainer from './containers/comic/ComicsContainer'

if (module.hot) {
  require.context('./containers/',true,/\.js$/)
  require.context('./components/',true,/\.js$/)
  require.context('./sagas/',true,/\.js$/)
  require.context('./actions/',true,/\.js$/)
  require.context('./schemas/',true,/\.js$/)
}

export default () => {

  return(
    <Router>
      <Route path ="/" component={App}>
        <IndexRoute component={ComicsContainer} />
      </Route>
    </Router>
  )
}
