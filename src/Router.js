import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Post from './Post'
import Posts from './Posts'

function Main() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/post/:id/:name?" component={Post} />
        </Switch>
      </div>
    </Router>
  )
}

export default Main
