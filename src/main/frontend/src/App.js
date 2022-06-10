import React from "react";
import { Router, Route, Switch} from 'react-router-dom';
import DaoPage from "./main/pages/DaoPage";
import MainPage from "./main/pages/MainPage";
import DropPage from "./store/pages/DropPage";
import TokenPage from "./main/pages/TokenPage";
import OrderPage from "./store/pages/OrderPage";
import PaymentPage from "./store/pages/PaymentPage";
import ThankYouPage from "./store/pages/ThankYouPage";
import ErrorPage from "./main/pages/ErrorPage";
import Minting from "./main/pages/MintingPage";
import history from "./history";
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import "./main/style/main.css"
import ComingSoon from "./store/pages/ComingSoon";


 const App = () => {
    return(
            <PayPalScriptProvider options={{"client-id": "Ab3P-qYJrG-q2P8VMnnAb0UjVLr0RBLrr6WDo89_85guNDOkotBqYmKlWe6u5B2Sketlo2IUZYihJtAz"}}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/dao" component={DaoPage}/>
                        <Route exact path="/store/drop" component={DropPage}/>
                        <Route exact path="/store/order" component={OrderPage}/>
                        <Route exact path="/store/payment" component={PaymentPage}/>
                        <Route exact path="/store/thank-you" component={ThankYouPage}/>
                        <Route exact path="/store/coming-soon" component={ComingSoon}/>
                        <Route exact path="/token" component={TokenPage}/>
                        {/* <Route exact path="/mint" component={Minting}/> */}
                        <Route path="*" component={ErrorPage} />
                    </Switch>
                </Router>
              </PayPalScriptProvider>
    )
}

export default App;