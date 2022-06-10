import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar-store.css";

class StoreNavbar extends React.Component{

    componentDidMount(){
        this.menuAnimation();
    }

    menuAnimation(){
        const hamburgerBtn = document.querySelector('.hamburger-btn');
        const menu = document.querySelector('.menu');
        const links = document.querySelectorAll(".mobile-menu-link");
        const link = document.querySelector(".mobile-menu-link");
        let menuOpen = false;
        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
          }

          const appearingLinks = async () => {
            await sleep(200)
            for (const link of links) {
              await sleep(150)
              link.classList.add('appear');  
            }
          }

        hamburgerBtn.addEventListener('click', () => {
        if(!menuOpen){
            hamburgerBtn.classList.add('open');
            menu.classList.add('open');
            document.body.style.overflow = 'hidden';
            appearingLinks();
            menuOpen = true;
        }else{
            hamburgerBtn.classList.remove('open');
            menu.classList.remove('open');
            document.body.style.overflow = 'scroll';
            links.forEach(link => {
                link.classList.remove('appear');
            })
            menuOpen = false;
        }
    })
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('open');
            menu.classList.remove('open');
            document.body.style.overflow = 'scroll';
            links.forEach(link => {
                link.classList.remove('appear');
            })
            menuOpen = false;
    })
    })
    }

    render(){
        return(
            <div className="navbar navbar-store">
                <Link to="/"><div className="logo logo-store"></div></Link>
                <a href="" className="cart-link mobile"></a>
                <div className="hamburger-btn hamburger-btn-store">
                    <div className="hamburger hamburger-store">
                    </div>
                </div>
                <div className="menu menu-store">
                    <div className="mobile-menu-items mobile-menu-items-store">
                            <Link className="mobile-menu-link mobile-menu-link-store" id="store-link" to="/store/coming-soon">DROPS</Link>
                            <Link className="mobile-menu-link mobile-menu-link-store" id="store-link" to="/store/coming-soon">CLOTHES</Link>
                            <Link className="mobile-menu-link mobile-menu-link-store" id="store-link" to="/store/coming-soon">ACCESORIES</Link>
                    </div>
                </div>
                <div className="navbar-links navbar-links-store"> 
                    <a href="" onClick={() => alert("Online store is in beta version for now. It will be fully functional once we have our own sewing room. We are working on it!")} className="cart-link desktop"></a>
                    <input className="searchbar desktop" onClick={() => alert("Online store is in beta version for now. It will be fully functional once we have our own sewing room. We are working on it!")} placeholder="Search"></input>
                    <Link className="navbar-desktop-link navbar-desktop-link-store" id="store-link" to="/store/coming-soon">ACCESORIES</Link>
                    <Link className="navbar-desktop-link navbar-desktop-link-store" id="store-link" to="/store/coming-soon">CLOTHES</Link>
                    <Link className="navbar-desktop-link navbar-desktop-link-store" id="store-link" to="/store/coming-soon"><b>DROPS</b></Link>
                </div>
            </div>
        )
    }

}

export default StoreNavbar;