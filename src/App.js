import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import DaoPage from "./pages/DaoPage";
import MainPage from "./pages/MainPage";
import StorePage from "./pages/StorePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/style/main.css"

 const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Route path="/" component={Navbar}/>
                <Route path="/" exact component={MainPage}/>
                <Route path="/dao" exact component={DaoPage}/>
                <Route path="/store" exact component={StorePage}/>
                <Route path="/" component={Footer}/>
            </BrowserRouter>
        </div>


    )
}

export default App;