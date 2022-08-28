import React,{Component} from 'react';
 import './Header.css'

 
class Header extends Component{
     render() {
        return(
            <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#"><img src="https://i.ibb.co/h88Rx2f/logo.png" height="45px" width="205px" class="navlogo"/></a>
              </div>
              <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">My Account</a></li>
               </ul>
            </div>
          </nav>
        )
     }
    }


export default Header