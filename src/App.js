import React from "react";
import { Router, Route, Switch} from 'react-router-dom';
import DaoPage from "./pages/DaoPage";
import MainPage from "./pages/MainPage";
import StorePage from "./pages/StorePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TokenPage from "./pages/TokenPage";
import ErrorPage from "./pages/ErrorPage";
import history from "./history";

import "../src/style/main.css"

 const App = () => {
    return(
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/dao" component={DaoPage}/>
                        <Route exact path="/store" component={StorePage}/>
                        <Route exact path="/token" component={TokenPage}/>
                        <Route path="*" component={ErrorPage} />
                    </Switch>
                </div>
            </Router>
    )
}

export default App;