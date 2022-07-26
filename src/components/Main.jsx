import React from "react";
import star1 from '../img/star1.png'
import user from '../img/user.png'
import image1 from '../img/image1.png'
import image2 from '../img/image2.png'
import image3 from '../img/image3.png'
import image4 from '../img/image4.png'
import image5 from '../img/image5.png'
import {Tweet} from './Tweet'
import logoArbusta from '../img/logoArbusta.png'
import imgTweet from '../img/imgTweet.png'
import imgReact from '../img/imgReact.png'
import mirta from '../img/mirta.jpg'

import logo3 from '../img/logo3.png'

export const Main = () => {
    
      return(
      <main>
        <header><img className="perfilMobile" src={user} alt="perfil" /><h2 className="home">Home</h2><img className="logo" src={logo3} alt="" /><img className="star" src={star1} alt="star" /></header>
        <div className="perfilM"><img className="user" src={user} alt="perfil" /><input className="pregunta" type="text" name="" id="" placeholder="What's happening?"/></div>
        <div className="iconitos">
          <div>
           <img className="ico" src={image1} alt="fotos" />
          <img className="ico" src={image2} alt="gif" />
          <img className="ico" src={image3} alt="estadistica" />
          <img className="ico" src={image4} alt="ubicacion" />
          <img className="ico" src={image5} alt="emoji" />
          </div>
          <div>
          <button className="btnMain">Tweet</button>
          
          </div>
        </div>
        <button className='btnTweetMobile'>+</button>
        <Tweet perfil={logoArbusta} nombre='Arbusta' cuenta='@arbustaIT · Jul 18' publicacion='Desde Arbusta brindamos servicios de primer nivel para acompañar a las empresas en sus procesos de #TransformacionDigital: QA & Software Testing, Data Services & Machine Learning Training, Customer Experience y Desarrollo de Equipos de IT.' img={imgTweet} descripcion='devjump'/>
        <Tweet perfil={imgReact} nombre='React' cuenta='@reactjs · Mar 29' publicacion='Our latest major version includes out-of-the-box improvements like automatic batching, new APIs like startTransition, and streaming server-side rendering with support for Suspense.' img={false}  />
        <Tweet perfil={mirta} nombre='Mirtha Legrand' cuenta='@mirthalegrand · May 27' publicacion='Quiero contarles que mi test del día de hoy dio negativo de COVID. Muchas gracias a todos por preocuparse y ¡por las infinitas muestras de cariño!❤️ ¡A seguir cuidándose con responsabilidad!¡chau chau!🌹' img={false} />
      </main>
      )
    
    }
    