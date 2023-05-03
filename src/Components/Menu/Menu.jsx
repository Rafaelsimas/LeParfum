import './Menu.css'
export default function Menu(){
    return(
        <>
         <header id="top-mobile">
        <nav id="box-mobile">
            <h1>LeParfum</h1>
            <ion-icon name="menu-outline"></ion-icon>
        </nav>
    </header>

    <header id="top-desktop">
        <nav id="box-desktop">
            <h1>LeParfum</h1>
            <ul id="list-menu">
                <li>
                    <a href="#" className='active'>Home</a>
                </li>
                <li>
                    <a href="#">Galeria</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </nav>
    </header></>
    )
}