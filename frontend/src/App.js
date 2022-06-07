import React from "react";
import { Router, Route, Switch} from 'react-router-dom';
import DaoPage from "./main/pages/DaoPage";
import MainPage from "./main/pages/MainPage";
import StorePage from "./main/pages/StorePage";
import Navbar from "./main/components/Navbar";
import Footer from "./main/components/Footer";
import TokenPage from "./main/pages/TokenPage";
import ErrorPage from "./main/pages/ErrorPage";
import Minting from "./main/pages/MintingPage";
import history from "./history";

import "../src/main/style/main.css"


 const App = () => {
    return(
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/dao" component={DaoPage}/>
                        <Route exact path="/store" component={StorePage}/>
                        <Route exact path="/token" component={TokenPage}/>
                        {/* <Route exact path="/mint" component={Minting}/> */}
                        <Route path="*" component={ErrorPage} />
                    </Switch>
                    
                </div>
            </Router>
    )
}

export default App;