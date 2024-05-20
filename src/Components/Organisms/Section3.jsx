import './Section3.css'
import Card_Art from '../Molecules/Card_Art'
import carruzel from '../../Data/mysql'
function Section3(){
    return(
        <div id='artista_seccion'>
            {carruzel.seccion2.map(art=><Card_Art title={art.title} text={art.obra} image={art.img} image1={art.img1}></Card_Art>)}
        </div>
    )
}

export default Section3