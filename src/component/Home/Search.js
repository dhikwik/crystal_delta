import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import './Search.css';
 
const url = "https://ecom-dhiksha.herokuapp.com/product"
const lurl = "https://ecom-dhiksha.herokuapp.com/brand"


 
class Search extends Component {
    constructor(){
        super()

        this.state={
            product:'',
            brand:''
        }
    }

    renderProduct = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <Link to={`/listing/${item.product_id}`} key={item.product_id}>
                    <div class="box">
                    <div class="inside">
                    <img src={item.img}alt={item.product} class="inside"/>
                    <h6 class="subhead">{item.product}</h6>
                    </div>
                    </div>
                    </Link>
 
                )
            })
        }
    }

    renderBrand = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <Link to={`/brandItem/${item.brand_id}`} key={item.brand_id}>

                     <div class="circle">
                      <img src={item.img} alt={item.brand} class="insidecircle"/>
                    </div>
                    </Link>
                    
                    
 
                )
            })
        }
    }


    render(){
        // console.log({product});
        return(
            <>
            <div id="feature">
              <h2 id="heading2">Featured Products</h2>
               {this.renderProduct(this.state.product)} 
             </div>
<div></div>

          <div id="brands">
              <h1 class="top">Top brands</h1>
              <div class="outer">
               
              {this.renderBrand(this.state.brand)}
              </div>
          </div>
</>
        )
        }

        //api on pageLoad 
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({product:data})
        })
        fetch(lurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({brand:data})
        })
    }
    }

export default Search