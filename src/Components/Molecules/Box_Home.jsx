import Title from '../Atoms/Title'
import Image from '../Atoms/Image'
import Text from '../Atoms/Text'

function Box_home(props){
    return(
        <div id='Box_home'>
            
            <Title title={props.title}></Title>
            <Image image={props.image}></Image>
            <Image image={props.image1}></Image>
            <Text text={props.text}></Text>
        </div>
    )
}

export default Box_home