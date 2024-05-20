import './Section4.css'
import Box_museo from '../Molecules/Box_museo'
import carruzel from '../../Data/mysql'
function Section4(){
    return(
        <div id='Seccion_museo'>
            {carruzel.seccion3.map(museo=><Box_museo title={museo.title} image={museo.img} text={museo.text} text1={museo.text1} ></Box_museo>)}
        </div>
    )
}

export default Section4