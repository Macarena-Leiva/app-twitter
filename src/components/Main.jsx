import React from "react";
import star from '../img/star.png'
import perfilM from '../img/perfilM.png'
import image1 from '../img/image1.png'
import image2 from '../img/image2.png'
import image3 from '../img/image3.png'
import image4 from '../img/image4.png'
import image5 from '../img/image5.png'
import {Tweet} from './Tweet'

export class Main extends React.Component {
    render() {
      return  <main>
        <header><h2>Home</h2><img className="star" src={star} alt="star" /></header>
        <div className="perfilM"><img src={perfilM} alt="perfil" /><input className="pregunta" type="text" name="" id="" placeholder="What's happening?"/></div>
        <div className="iconitos">
           <img className="ico" src={image1} alt="fotos" />
          <img className="ico" src={image2} alt="gif" />
          <img className="ico" src={image3} alt="estadistica" />
          <img className="ico" src={image4} alt="ubicacion" />
          <img className="ico" src={image5} alt="emoji" />
          <button className="btnMain">Tweet</button>
        </div>
        <Tweet />
        <Tweet />
      </main>
    
    
    }
    }