import React from "react";
import './header.css';

function Menu(props) {
  let btnLink = ['/', 'list'];
  return (
    <ul className="menu-list">
      {props.links.map((link, index) => {
        if (index === 0) {
          return link.map((item, i) => (
            <li key={i} className="menu-item">
              <a href={btnLink[i]}>
                {item}
              </a>
            </li>
          ));
        } else {
          return null;
        }
      })}
    </ul>
  );
}

export default Menu;
