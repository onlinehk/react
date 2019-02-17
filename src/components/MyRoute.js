import React from 'react'
import { Switch, Route } from 'react-router-dom'

// pages
import Home from 'pages/home/'
import About from 'pages/about/'
import Count from 'pages/count/'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/count/:id' component={Count}/>
      <Route path='/count' component={Count} />
    </Switch>
  </main>
)

export default Main
