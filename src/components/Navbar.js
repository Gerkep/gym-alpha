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
            var x=window.scrollX;
            var y=window.scrollY;
            window.onscroll=function(){window.scrollTo(x, y);};
            appearingLinks();
            menuOpen = true;
        }else{
            hamburgerBtn.classList.remove('open');
            menu.classList.remove('open');
            window.onscroll=function(){};
            links.forEach(link => {
                link.classList.remove('appear');
            })
            menuOpen = false;
        }
    })
    }

    render(){
        return(
            <div className="navbar">
                <div className="logo"></div>
                <div className="hamburger-btn">
                    <div className="hamburger">
                    </div>
                </div>
                <div className="menu">
                    <div className="mobile-menu-items">
                            <Link className="mobile-menu-link" to="/dao">Dao</Link>
                            <a className="mobile-menu-link" href="#">Token</a>
                            <Link className="mobile-menu-link" id="link" to="/store">Store</Link>
                            <a className="mobile-menu-link" href="#">Whitepaper</a>
                    </div>
                </div>
                <div className="navbar-links">
                    <Link to="/store">STORE</Link>
                    <a href="#">TOKEN</a>
                    <a href="#">WHITEPAPER</a>
                    <Link to="/dao">DAO</Link>
                </div>
            </div>
        )
    }

}

export default Navbar;