import './Seccion2.css'
import Tipos from "../Molecules/Tipos"
import seccion2 from "../../Data/Seccion2"
function Section2(){
    return(
        <div id="tipos_seccion">
            <h1 id='title_tipos'>TIPOS DE ARTE:</h1>
            {seccion2.Tipos.map(tipos=><Tipos key={""} title={tipos.title} image={tipos.img} text={tipos.text}></Tipos>)}
        </div>
    )
}

export default Section2