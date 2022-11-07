import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import "bootstrap/dist/css/bootstrap.min.css"
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import NavBar from './layouts/NavBar';
// Pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/register" component={Register} layout={NavBar}/>
          <AppRoute exact path="/login" component={Login} layout={LayoutDefault}/>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;