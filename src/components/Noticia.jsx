

export const Noticia = ({titulo,texto,num,img}) =>{
    return(
        <div className="box1">
            <div className="box2">
              <p className="colorGris">{titulo}</p>
              <p className="textN">{texto}</p>
              <p className='colorGris'>{num} Tweets</p>
            </div>
            <div className="box3">
              <img className="imgDolar" src={img} alt="Noticias" />
            </div>
        </div>
    )
}