import './Header.css'
export default function Header(){
    return(
        <header id="top">
        <nav id="box">
            <h1>LeParfum</h1>
            <ion-icon name="menu-outline"></ion-icon>
            <ul id="boxLinks">
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#">Galeria</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
       </header>
    )
}