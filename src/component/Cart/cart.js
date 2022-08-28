import React,{Component} from 'react';
import './cart.css';
  

const url = "https://ecom-dhiksha.herokuapp.com/menu";
  


class Cart extends Component{
    constructor(props){
        super(props);

         this.state={
            cost:'',
            menuItem:''
            
        }
     }
     
     proceed = () => {
        console.log("Hi")
        this.props.history.push(`/order`)
    }

    renderMenu = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <div class="pcart" key={item.id}>
                    <img src={item.img} alt="pic" class="cpic"/>
                    <span class="cname">{item.item_name}</span>
                    {/* <span class="quan">Quantity</span>
                    <input class="quantity" name="quantity" type="text" onChange={this.handleChange} value={this.state.quantity}/> */}
                    <span class="price">Rs.{item.cost}</span>
                </div>
                )
            })
        }
    }
    

    render(){
        
         return(
            <>
                <div class="ecart">
                    <p id="item">Checked out Items</p>
                    {this.renderMenu(this.state.menuItem)}
                    <span class="sum">Total</span>
                    <span class="total">Rs.{this.state.cost}</span>
                    <button class="btn btn-success" id="but" onClick={this.proceed}>Place order</button>

                    </div> 
            </>
        )
    }

    componentDidMount(){
        let menuItem = sessionStorage.getItem('menu')
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.map((item) => {
                totalPrice += parseFloat(item.cost)
                return 'ok'
            })
            this.setState({cost: totalPrice, menuItem:data})
        })
    }

}

export default Cart;
 