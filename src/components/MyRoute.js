import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// pages
import Home from 'pages/home/'
import About from 'pages/about/'
import Count from 'pages/count/'

const Main = withRouter(({ location }) => (
<main>
    <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} timeout={1000} classNames="fade" >
            <section className="route-section">
                <Switch location={location}>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/count/:id' component={Count}/>
                    <Route path='/count' component={Count} />
                </Switch>
            </section>
        </CSSTransition>
    </TransitionGroup>
</main>
))

export default Main
