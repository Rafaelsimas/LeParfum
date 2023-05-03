import ButtonHomeHero from "../../Components/ButtonHomeHero/ButtonHomeHero"
import Menu from "../../Components/Menu/Menu"
import LogoPage from "../../assets/img/LeParfum.svg"
import './PageHome.css'
export default function PageHome(){
    return(
        <>
    <section id="hero">
        <div className="box-hero">
            <div className="box-text">
                <h2>Fragâncias para marcar sua história</h2>
                <p>Tenha acesso aos melhores perfumes do mercado com apenas alguns clicks</p>
                <ButtonHomeHero />
            </div>
            <div className="box-image">
                <img src={LogoPage} alt="" />
            </div>
        </div>
    </section>
        </>
    )
}