import './Tipos.css'
import Title from '../Atoms/Title'
import Image from '../Atoms/Image'
import Text from '../Atoms/Text'
function Tipos(props){
    return(
        <div id='box_tipos'>
            <Title title={props.title}></Title>
            <Image image={props.image}></Image>
            <Text text={props.text}></Text>
        </div>
    )
}

export default Tipos