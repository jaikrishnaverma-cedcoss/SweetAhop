import React, { Component } from 'react';
import {Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/auth/Login'
import './BaseUI.css';
import './App.css';
import Nav from './components/master/Nav';
import Cart from './components/cart/Cart';
import Product from './components/master/Product';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={sessionId:-1,Credentials:[],cart:[],currentProductId:0}
  }
  SignUpHandler=(obj)=>{
    this.state.Credentials.push(obj)
    // this.setState({Credentials:this.state.Credentials})
  }
  LogOutHandler=()=>{
    this.setState({sessionId:-1})
  }
  HandleSession=(ide)=>{
    
       
       if(ide!==-1)
       {
       this.setState({sessionId:ide},()=>{
        console.log(this.state.sessionId)

       })
       }
      }
    
  getProduct=(id)=>{
this.setState({currentProductId:parseInt(id)})
  }
  addToCart = (newData) => {
    let newArr = { ...newData, quantity: 1 }
    let foundValue = -1
    this.state.cart.map((x, i) => { if (newData.id === x.id) { foundValue = i } return "" });
    if (foundValue === -1)
      this.state.cart.push(newArr)
    else
      this.state.cart[foundValue].quantity += 1
      this.setState({cart:this.state.cart})
    console.log(this.state.cart)

  }

 empty = (index) => {
    this.setState({cart:[]})
  }

 remove = (index) => {
    this.state.cart.splice(index, 1)
    this.setState({cart:this.state.cart})
    // setCart([...cart])
  }
  
 incrDecr = (boolVal, index) => {
    (boolVal) ? this.state.cart[index].quantity += 1 : (this.state.cart[index].quantity - 1 === 0) ? this.state.cart[index].quantity = this.state.cart[index].quantity : this.state.cart[index].quantity -= 1;
    // setCart([...cart])
    this.setState({cart:this.state.cart})
  }



  render() { 
  return (
    <div className="App">

            <Nav />
      <div className='navBody col flexAIC'>    
  

      <Routes>
          <Route path="/" element={<Home  addToCart={this.addToCart}   getProduct={this.getProduct}/>} />
          <Route path="/login" element={<Login Credentials={this.state.Credentials}   auth={this.HandleSession} SignupHandler={this.SignUpHandler}/>} />
          <Route path='/cart' element={<Cart incrDecr={this.incrDecr} remove={this.remove}  empty={this.empty}  addToCart={this.addToCart}   />} />
     </Routes>

      </div>

     {/* <Home sessionId={this.state.sessionId} LogOutHandler={this.LogOutHandler} userData={this.state.Credentials[this.state.sessionId]}/> */}
    </div>
    )
  }
}
  
  export default App;