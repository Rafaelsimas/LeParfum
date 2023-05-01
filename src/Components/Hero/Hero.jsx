import './Hero.css'
import LogoApp from '../../assets/img/LeParfum.svg'
export default function Hero(){
    return(
        <>
        <div className="box-flex-hero">
        <div className="box-text">
            <h1>Fragrâncias para marcar sua história</h1>
            <p>Tenha acesso aos melhores perfumes do mercado com apenas alguns clicks</p>
            <div className="btn-hero">
            <button className="enter-store">Entrar na loja</button>
            <button className="talk-us">Fale conosco</button>
            </div>
        </div>
        <div className="box-image">
            <img src={LogoApp} alt="" />
        </div>
        </div>
        </>
    )
}