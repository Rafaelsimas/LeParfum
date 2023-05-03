import './ButtonHomeHero.css'
import { Link } from 'react-router-dom'
export default function ButtonHomeHero(){
    return(
        <div className="box-btn">
        <button className='btn-enter'>
            <Link className='link' to="/produtos">
                Entrar na loja
            </Link>
            </button>
        <button className='btn-contact'>Fale conosco</button>
    </div>
    )
}