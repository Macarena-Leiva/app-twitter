import React from "react";
import search from '../img/search.png'

export class Aside extends React.Component {
    render() {
      return <aside>
        <div className="serch"><img src={search} alt="Search" /><p className="searchP">Search Twitter</p> </div>
      </aside>;
    }
  }