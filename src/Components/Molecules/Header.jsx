import './Header.css'
function Header(){
    return(
        <header id="header">
            <div id="logo"><img id='img' src="./pintar.png" alt="" /></div>
            <nav id="navigation-menu">
            <a id="nav-item" href="#container1">INICIO</a>
                <a id="nav-item" href="#container2">TIPOS DE ARTE</a>
                <a id="nav-item" href="#container3">ARTISTAS DESTACADOS</a>
                <a id="nav-item" href="#container4">MUSEOS EN MÉXICO</a>
            </nav>
        </header>
    )
}

export default Header