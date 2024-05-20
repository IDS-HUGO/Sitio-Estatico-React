import './Box_museo.css'
import Title from '../Atoms/Title'
import Image from '../Atoms/Image'
import Text from '../Atoms/Text'
function Box_museo(props){
    return(
        <div id='box_museo'>
            <Title title={props.title}></Title>
            <Image image={props.image}></Image>
            <Text text={props.text}></Text>
            <Text text={props.text1}></Text>
        </div>
    )
}

export default Box_museo