import React from "react";
import search from '../img/search.png'

export class Aside extends React.Component {
    render() {
      return <aside>
        <div className="searchBox"><img src={search} alt="Search" /><input className="search" type="search" name="" id="" placeholder="Search Twitter" /></div>
      </aside>;
    }
  }