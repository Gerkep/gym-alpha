import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

class Navbar extends React.Component{

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
    link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('open');
            menu.classList.remove('open');
            document.body.style.overflow = 'scroll';
            links.forEach(link => {
                link.classList.remove('appear');
            })
            menuOpen = false;
    })
    }

    render(){
        return(
            <div className="navbar">
                <Link to="/"><div className="logo"></div></Link>
                <div className="hamburger-btn">
                    <div className="hamburger">
                    </div>
                </div>
                <div className="menu">
                    <div className="mobile-menu-items">
                            <Link className="mobile-menu-link" to="/dao">Dao</Link>
                            <Link className="mobile-menu-link" to="/token">TOKEN</Link>
                            <Link className="mobile-menu-link" id="link" to="/store">Store</Link>
                            <a className="mobile-menu-link" href="https://www.notion.so/GYM-ALPHA-4c1e7ba461f64ef79144d8343807128e">White paper</a>
                    </div>
                </div>
                <div className="navbar-links">
                    <Link className="navbar-desktop-link" to="/dao">DAO</Link>
                    <Link className="navbar-desktop-link" to="/store">STORE</Link>
                    <Link className="navbar-desktop-link" to="/token">TOKEN</Link>
                    <a className="navbar-desktop-link" href="https://www.notion.so/GYM-ALPHA-4c1e7ba461f64ef79144d8343807128e">WHITE PAPER</a>
                </div>
            </div>
        )
    }

}

export default Navbar;