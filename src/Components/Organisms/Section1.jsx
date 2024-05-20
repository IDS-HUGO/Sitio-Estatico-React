import './Section1.css';
import Box_home from '../Molecules/Box_Home';
import seccion1 from '../../Data/Home';


function Section1() {

    return (

        <div id='home_section'>
            {seccion1.Home.map(home=><Box_home key={""} title={home.title} image={home.image} image1={home.image1} text={home.text}></Box_home>)}
        </div>

    )
}

export default Section1
