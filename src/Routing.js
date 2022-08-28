import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/Listing';
import Cart from './component/Cart/cart';
import Order from './component/Order/order';


 
const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/listing/:prodId" component={Listing}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/order" component={Order}/>


                
                <Footer/>
            </BrowserRouter> 
        </>
    )
}

export default Router