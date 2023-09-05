import React from "react";
import "./header.css";

function HeaderBtns(props) {

  return (
      <ul className="menu">
        <li>
          <a className="profile" href="#">
            {props.links[1][0]}
          </a>
        </li>
        <li>
          <a className="menu_items" href="#">
          {props.links[1][1]}
          </a>
        </li>
      </ul>
  );
}
export default HeaderBtns;
