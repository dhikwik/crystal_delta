import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/Listing';
 
const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/listing/:prodId" component={Listing}/>
                
                <Footer/>
            </BrowserRouter> 
        </>
    )
}

export default Router