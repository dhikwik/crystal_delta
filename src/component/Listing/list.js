import React from 'react';
// import {useParams} from 'react-router-dom';
import './list.css';
 
 
const ListingDisplay = (props) =>{

    const orderId = []

    const addItem = (id) => {
        // console.log(id)
        orderId.push(id)
        console.log(orderId)
        sessionStorage.setItem('menu',orderId)

     }

    const removeItem = (id) => {
        if(orderId.indexOf(id) > -1){
            orderId.splice(orderId.indexOf(id),1)
            console.log(orderId.indexOf(id))

        }
        sessionStorage.setItem('menu',orderId)
    }

    const renderData = ({listData}) => {
        if(listData){
            if(listData.length > 0 ){
                return listData.map((item) => {
                     
                    return(
                         <div class="boxx2" key={item.item_id}>
                            
                              <img src={item.img} alt="bag" class="inside2"/>
                              <h3 class="subhead2">{item.item_name}</h3>
                              <p class="rup">Rs.{item.cost}</p>
                              <span id="star">{item.rating}<span class="fa fa-star checked"></span></span>
                               <button class="btn btn-success" id="cart" onClick={() => {addItem(item.item_id)}}>Add to Cart</button>
                                <button class="btn btn-secondary" id="cart1"  onClick={() => {removeItem(item.item_id)}}>Remove</button> 
                
                        </div>
                    )
                })
            }else{
                return(
                    <>
                        <h2>No Data For Filter</h2>
                    </>
                )
            }

        }
        else{
            return(
                <>
                 <h1>Loading...</h1>
                </>
            )
        }
    }
    console.log(props)
    return(
        <div class="content">
            {renderData(props)}
        </div>
    )
    
 
    // componentDidMount(){
    //     let prodId = this.props.match.params.prodId;
    //      console.log(prodId);
    //     axios.get(`${lurl}${prodId}`)
    //         .then((res) => {this.setState({ItemData:res.data})})
    //     }
}
export default ListingDisplay