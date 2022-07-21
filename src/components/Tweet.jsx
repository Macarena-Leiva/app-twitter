import logoArbusta from '../img/logoArbusta.png'
import imgTweet from '../img/imgTweet.png'

export const Tweet = () =>{
    return(
        <div className='boxPadreTweet'>
        <div className='boxTweet'>
            <img src={logoArbusta} alt="logo-arbusta" />
            <p className='nombrePerfil'>Arbusta<span className='colorGris'>@arbustaIT · Jul 18</span></p>
        </div>
        <div className='boxText' >
            <p className='textoTweet'>Desde Arbusta brindamos servicios de primer nivel para acompañar a las empresas en sus procesos de #TransformacionDigital: QA & Software Testing, Data Services & Machine Learning Training, Customer Experience y Desarrollo de Equipos de IT.</p>
            <img className='imgDevjump' src={imgTweet} alt="imagen Devjump" />
        </div>
        </div>
    )
}