import React from "react";
import search from '../img/search.png'
import imgDolar from '../img/imgDolar.png'
import mas from '../img/mas.png'
import imgUkraine from '../img/imgUkraine.png'

import {Noticia} from './Noticia'
export const Explore = () => {
    return <aside>
        <div className="searchBox"><img src={search} alt="Search" /><input className="search" type="search" name="" id="" placeholder="Search Twitter" /></div>
        <div className="explore">
        <p className="textExplore">What's happening</p>
        <Noticia titulo='Business & finance · LIVE' texto='Dólar blue supera los $300, valor nominal más alto del que se tenga registro' num='5,473' img={imgDolar} />
        <Noticia titulo='Entertainment · Trending' texto='#ChauNetflix La gente comenta sobre una decisión de Netflix de cobrar cargos extras' num='5,473' img={mas} /> 
        <Noticia titulo='Entertainment · Trending' texto='#SpiderMan' num='4,772' img={mas} />
        <Noticia titulo='War in Ukraine · LIVE' texto='Latest updates on the war in Ukraine' num='71.8K' img={imgUkraine} />
        <h4 className="colorAzul">Show more</h4>
        </div>
      </aside>
    
  }