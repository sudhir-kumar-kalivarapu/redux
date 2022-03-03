import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyLaptop, buyMobile, fetchUsers } from '../redux/actions'
import './styles.css'

export class Shop extends Component {
    // state={
    //     numOfLaptops:100
    // }
    // buyLaptop=()=>{
    //     this.setState({numOfLaptops:this.state.numOfLaptops-1});
    // }
    render() {
        return (
        <div>
            <h1 className ='title'>Welcome To Store</h1>
            <div className="items">
                <div className ="item">
                    <p>Dell (linux)</p>
                    <p>Available:{this.props.numOfLaptops}</p>
                    <button onClick={this.props.buyLaptop}>Buy</button>
                </div>
                <div className ="item">
                    <p>Apple iphone 13</p>
                    <p>Available:{this.props.numOfMobiles}</p>
                    <button onClick={this.props.buyMobile}>Buy</button>
                </div>
                <div className ="item">
                    <p>get user's data</p>
                    <p>Count:{this.props.users.length}</p>
                    <button onClick={this.props.fetchUsers}>get details</button>
                </div>
            </div>
        </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        numOfLaptops:state.laptops.numOfLaptops,
        numOfMobiles:state.mobiles.numOfMobiles,
        users:state.users.users
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        buyLaptop:()=>dispatch(buyLaptop()),
        buyMobile:()=>dispatch(buyMobile()),
        fetchUsers:()=>dispatch(fetchUsers())
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop)
