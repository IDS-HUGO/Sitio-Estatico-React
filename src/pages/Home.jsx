import './Home.css';
import Header from '../Components/Molecules/Header';
import Footer from '../Components/Organisms/Footer';
import Section1 from '../Components/Organisms/Section1';
import Section2 from '../Components/Organisms/Section2';
import Section3 from '../Components/Organisms/Section3';
import Section4 from '../Components/Organisms/Section4';

function Home() {
    return (
        <>
        <Header></Header>
        <div id="container1">
            <div id='title_center'>
            <h1 id='title_tipos1'>TODO SOBRE EL ARTE:</h1>
            </div>
            <Section1></Section1>
        </div>
        <div id='container2'>
            <Section2></Section2>
        </div>
        <div id='container3'>
            <div id='title_center1'>
        <h1 id='title_artistas'>ARTISTAS DESTACADOS:</h1>
            </div>
            <Section3></Section3>
        </div>
        <div id='container4'>
        <div id='title_center4'>
        <h1 id='title_museo'>MUSEOS MAS FAMOSOS EN MÉXICO:</h1>
            </div>
            <Section4></Section4>
        </div>
         <Footer></Footer>
        </>
    );
}

export default Home;
