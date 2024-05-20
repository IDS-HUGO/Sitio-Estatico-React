import './Card_Art.css'
import Title from '../Atoms/Title'
import Image from '../Atoms/Image'
import Text from '../Atoms/Text'
function Card_Art(props){
    return(
        <div id='card_artistas'>
            <div id='artista'>
                <Title title={props.title}></Title>
                <Image image={props.image}></Image>
            </div>
            <div id='card_obra'>
                <Text text={props.text}></Text>
                <Image image={props.image1}></Image>
            </div>
        </div>
    )
}

export default Card_Art