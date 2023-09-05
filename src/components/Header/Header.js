import React from "react";
import Menu from './Menu';
import './header.css';
function Header(props) {
  
    return (
        <header className="header">
          <div className="logo">{props.logo[0]}{props.logo[1]}</div>
          <Menu links={props.links} />
        </header>
    )
}

export default Header;