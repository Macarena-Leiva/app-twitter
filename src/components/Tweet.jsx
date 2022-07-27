import {IconTweet} from './IconTweet'
import message from '../img/message.png'
import retweet from '../img/retweet.png'
import heart from '../img/heart.png'
import upload from '../img/upload.png'
import mas from '../img/mas.png'

export const Tweet = ({perfil,nombre,cuenta,publicacion,img=false,descripcion=''}) =>{
    return(
        <div className='boxPadreTweet'>
        <div className='boxTweet'>
            <img className='imgPerfil' src={perfil} alt="logo-arbusta" />
            <p className='nombrePerfil'>{nombre}<span className='colorGris'>{cuenta}</span></p>
            <div className='masTweet'><img src={mas} alt="mas" /></div>
        </div>
        <div className='boxText' >
            <p className='textoTweet'>{publicacion}</p>
            {img ? <img className='imgDevjump' src={img} alt={descripcion} /> : false}
        </div>
         <div className='boxIcon'>
            <IconTweet icono={message} />
            <IconTweet icono={retweet} />
            <IconTweet icono={heart} />
            <IconTweet icono={upload} />
        
        </div>
        </div>
    )
}