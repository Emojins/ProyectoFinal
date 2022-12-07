import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const HeaderHome = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
const [user, setUser] = useState("Anónimo");
const logout = () => {
  localStorage.removeItem('user');
  setUser("Anónimo");
}
const login = () => {
  localStorage.setItem('user', JSON.stringify("Anónimo"));
}
useEffect(() => {
  login();
}, []);

  const nav = useRef(null);
  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav','is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                      <a href="http://localhost:8080/" className="button button-primary button-wide-mobile button-sm">Reproductor</a>
                    </li>
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <a href="http://localhost:3005/" className="button button-primary button-wide-mobile button-sm">Crear tu perfil</a>
                      </li>
                      <li>
                        <a className="button button-primary button-wide-mobile button-sm" onclick={logout} href= "http://localhost:3000">Salir</a>
                      </li>
                    </ul>
                    }
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

HeaderHome.propTypes = propTypes;
HeaderHome.defaultProps = defaultProps;

export default HeaderHome;