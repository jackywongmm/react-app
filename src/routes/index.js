import { Route, Switch } from "react-router-dom"
import React from 'react'
import Home from '../pages/Home/Home'
import Setting from '../pages/Setting/Setting'
import LogOut from '../pages/LogOut/LogOut'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './transition.css'
function Routes () {
  return (
    <Route render={({ location }) => (
      <TransitionGroup className="main-wapper">
        <CSSTransition
          key={location.pathname}
          classNames="fade"
          timeout={300}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/Setting" component={Setting} />
            <Route path="/LogOut" component={LogOut} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}
    />
  )
}

export default Routes
