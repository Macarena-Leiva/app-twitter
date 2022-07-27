import React from "react";

import { IconoHome } from '../iconosNavBar/IconoHome'
import { IconoExplore } from "../iconosNavBar/IconoExplore";
import { IconoNotification } from "../iconosNavBar/IconoNotification";
import { IconoMessages } from "../iconosNavBar/IconoMessages";
import { IconoBookmarks } from "../iconosNavBar/IconoBookmarks";
import { IconoLists } from "../iconosNavBar/IconoLists";
import { IconoProfile } from "../iconosNavBar/IconoProfile";
import { IconoMore } from "../iconosNavBar/IconoMore";
import user from '../img/user.png'

export const NavBar = () => {
      return (
        <div className="padreNav">
      <nav className="menu">
        <ul className="centrar">
            <li className="icon1"><img className="user1" src={user} alt="perfil" /><div className="textUser"><h2 >Maca Leiva</h2><p className="colorGris">@Mak_leiva</p></div></li>
            <li className="iconTwitter"><IconoHome /><h2 className="textNav">Home</h2></li>
            <li className="iconTwitter"><IconoExplore /><h2 className="textNav">Explore</h2></li>
            <li className="iconTwitter"><IconoNotification /><h2 className="textNav">Notifications</h2></li>
            <li className="iconTwitter"><IconoMessages /><h2 className="textNav">Messages</h2></li>
            <li className="iconTwitter"><IconoBookmarks /><h2 className="textNav">Bookmarks</h2></li>
            <li className="iconTwitter"><IconoLists /> <h2 className="textNav">Lists</h2> </li>
            <li className="iconTwitter"><IconoProfile /><h2 className="textNav">Profile</h2></li>
            <li className="iconTwitter"><IconoMore /><h2 className="textNav">More</h2></li>
            <button className='btnTweet'>Tweet</button>
        </ul>
      </nav>

<nav className="mobile">
<ul className="centrate">
    
    <li className="iconTwitter"><IconoHome /></li>
    <li className="iconTwitter"><IconoExplore /></li>
    <li className="iconTwitter"><IconoNotification /></li>
    <li className="iconTwitter"><IconoMessages /></li>
 
    
</ul>

</nav>
</div>

      )
    }
  