import React,{Component} from 'react';
import './Ad.css';
 
class Ad extends Component {
     

    render(){
        return(
            
            <div class="id">
            <h1 id="heading">Your ultimate accessories store!</h1>
            <h1 class="heading1">Shop from a wide range of</h1>
            <h1 class="heading1">10k plus products</h1>
            <button class="btn btn-success" id="now">Shop Now</button>
            <button class="btn btn-primary" id="noww">Watch Video</button>
            {/* <<span><img src="images/bg.webp" alt="shop" class="shope"/></span>  */}

            <span><img src="https://i.ibb.co/68nmgbP/bg2.jpg" alt="shop" class="shop"/></span>
          </div>
          

        )
        }
    }

export default Ad