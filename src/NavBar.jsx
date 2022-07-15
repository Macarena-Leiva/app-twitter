import React from "react";
import logo from './img/logo.png';

export class NavBar extends React.Component {
    render() {
      return <nav>
        <ul>
            <li><img className="logo" src={logo} alt="" /></li>
        </ul>
      </nav>
    }
  }