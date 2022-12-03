import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
import "./navbar.scss"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState (false);

  window.onscroll = () =>{
    setIsScrolled(window.scrollY === 0 ? false :true );
    return () => (window.onscroll = null);
  }

  return (
    <div className={ isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="https://i.postimg.cc/g0GVjD7w/logo.png" alt="Logo-Cine-Arco-Iris"/>
                <span>Inicio</span>
                <span>Series</span>
                <span>Filmes</span>
                <span>Novos e Populares</span>
                <span>Minha Lista</span>
            </div>
            <div className="right">
               <Search className="icon"/>
                <span>OpalSnow</span>
                <Notifications className="icon"/>
                <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg" alt=""/>

                <div className="profile">
                <ArrowDropDown className="icon"/>
                <div className="options">
                  <span>Configurações</span>
                  <span>Sair</span>
                </div>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Navbar