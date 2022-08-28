import React,{Component} from "react";
import axios from "axios";
import Covid from './covid';
import List from './list';
const lurl = "https://ecom-dhiksha.herokuapp.com/items/"



class Listing extends Component {
    constructor(props){
        super(props);
        this.state={ 
            ItemData:'',
            userItem:''

        };
    }

    proceed = () => {
        console.log("Hi")
        this.props.history.push(`/cart`)
    }

    render(){
        return(
            <>
            <Covid/>
            <div class="scart">
            <button type="button" class="btn btn-info" id="pcart" onClick={this.proceed}>View the Cart</button>
            <img src="https://i.ibb.co/DQxxXMF/cart1.jpg" alt="pic" class="icart"  />
            </div>

            <div class="filter">
                <center><h1>Filters</h1></center>
                <div class="filside">
                {/* <p>Collections</p>
                <p><input type="checkbox" name="sani"> Shoes</input></p>
                <p><input type="checkbox" name="sani">  Bag</input></p>
                <p><input type="checkbox" name="sani">  Glasses</input></p>
                

                <p>Pricing</p>
                <p><input type="checkbox" name="sani">     Rs 200- Rs500</input></p>
                <p><input type="checkbox" name="sani">     Rs 500- Rs1000</input></p>
                <p><input type="checkbox" name="sani">     Rs1000- Rs1500</input></p>
                <p><input type="checkbox" name="sani">     Rs1500- Rs2000</input></p>
                <p><input type="checkbox" name="sani">     Rs2000- Rs5000</input></p> */}
                </div>
                </div>  
            <List listData={this.state.ItemData} 
             /> 

            </>
        )
    }

    //api function
    //api function

    
    componentDidMount(){
        let prodId = this.props.match.params.prodId;
        console.log(prodId);
        axios.get(`${lurl}${prodId}`)
            .then((res) => {this.setState({ItemData:res.data})})
        }

}

export default  Listing;