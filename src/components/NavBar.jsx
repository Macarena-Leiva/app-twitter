import React from "react";
import logo from '../img/logo.png';
import { IconoHome } from '../iconosNavBar/IconoHome'
import { IconoExplore } from "../iconosNavBar/IconoExplore";
import { IconoNotification } from "../iconosNavBar/IconoNotification";
import { IconoMessages } from "../iconosNavBar/IconoMessages";
import { IconoBookmarks } from "../iconosNavBar/IconoBookmarks";
import { IconoLists } from "../iconosNavBar/IconoLists";
import { IconoProfile } from "../iconosNavBar/IconoProfile";
import { IconoMore } from "../iconosNavBar/IconoMore";

export class NavBar extends React.Component {
    render() {
      return <nav>
        <ul>
            <li className="icon1"><img className="logo" src={logo} alt="" /></li>
            <li className="iconTwitter"><IconoHome /><h2>Home</h2></li>
            <li className="iconTwitter"><IconoExplore /><h2>Explore</h2></li>
            <li className="iconTwitter"><IconoNotification /><h2>Notifications</h2></li>
            <li className="iconTwitter"><IconoMessages /><h2>Messages</h2></li>
            <li className="iconTwitter"><IconoBookmarks /><h2>Bookmarks</h2></li>
            <li className="iconTwitter"><IconoLists /> <h2>Lists</h2> </li>
            <li className="iconTwitter"><IconoProfile /><h2>Profile</h2></li>
            <li className="iconTwitter"><IconoMore /><h2>More</h2></li>
            <button className='btnTweet'>Tweet</button>
        </ul>
      </nav>
    }
  }