import React from "react";
import logo from '../img/logo.png'
import '../css/main.css'
import { Link } from "react-router-dom";



class Header extends React.Component {
    render() {
        return(
            <header className="header">
                <div className="content-header">
                <Link to='/' className="link">
                    <img className="header-img" src={logo}/>
                </Link>
                <div className="searchus"><a>Где нас найти?</a></div>
                <div className="us"><a>О нас</a></div>
                <div className="catalog"><Link to='/catalog'>Каталог</Link></div>
                <div className="login"><a>Вход</a></div>
                <div className="registr"><a>Регистрация</a></div>
            
            
             
                </div>
             </header>
        )
    }
}

export default Header
