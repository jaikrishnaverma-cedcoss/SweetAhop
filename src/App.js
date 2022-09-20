import React, { Component } from 'react';
import {Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/auth/Login'
import './BaseUI.css';
import './App.css';
import Nav from './components/master/Nav';
import Cart from './components/cart/Cart';
import Product from './components/master/Product';
import About from './components/master/Aboutus';
import ContactUs from './components/master/ContactUs';
import LiveSearch from './components/master/LiveSearch';
import databases from './Database/test';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={sessionId:-1,databases:databases.restaurants,Credentials:[],cart:[],search:[],input:"",currentProductId:-1,session:"Hello , Sign In"}
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
       
        this.setState({session:this.state.Credentials[this.state.sessionId].username})
        console.log(this.state.sessionId)

       })
       }
      }
    
  getProduct=(id)=>{
this.setState({currentProductId:parseInt(id)})
 document.getElementsByClassName("liveSuggestions")[0].style.display='none';
  }
  addToCart = (newData) => {
    // console.log(newData)
    let newArr = { ...newData, quantity: 1 }
    let foundValue = -1
    this.state.cart.map((x, i) => { if (newData.id === x.id) { foundValue = i } return "" });
    if (foundValue === -1)
      this.state.cart.push(newArr)
    else
      this.state.cart[foundValue].quantity += 1
      this.setState({cart:this.state.cart})
      alert("Item Added to Cart Successfully..!")
      console.log("cart",this.state.cart)
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

Filterer=(event)=>{
  let res = []
  let input_text = event.target.value.toLowerCase();
  if(input_text==="")
     input_text="X3#^*()"
          res = this.state.databases.filter((osx, i) => {
             return (this.state.databases[i].name.toLowerCase().startsWith(input_text))
            })
          this.setState({
              search: [...res]
          })
      }
changer=(index)=>{
this.setState({currentProductId:-1})
}


  render() { 
  return (
    <div className="App">

            <Nav session={this.state.session} changer={this.changer} Filterer={this.Filterer}/>
            <LiveSearch arr={this.state.search} getProduct={this.getProduct}/>
      <div style={{minHeight:"92.5vh"}} className='navBody col flexAIC lbg4'>    
  

      <Routes>
          <Route path="/" element={<Home  incrDecr={this.incrDecr} addToCart={this.addToCart}   prd={this.state.currentProductId} getProduct={this.getProduct}/>} />
          <Route path="/login" element={<Login Credentials={this.state.Credentials}   auth={this.HandleSession} SignupHandler={this.SignUpHandler}/>} />
          <Route path='/cart' element={<Cart arr={this.state.cart} incrDecr={this.incrDecr} remove={this.remove}  empty={this.empty}  addToCart={this.addToCart}   />} />
          <Route path="/About" element={<About />}/>    
          <Route path="/Contact_us" element={<ContactUs />}/>   
     </Routes>

      </div>

     {/* <Home sessionId={this.state.sessionId} LogOutHandler={this.LogOutHandler} userData={this.state.Credentials[this.state.sessionId]}/> */}
    </div>
    )
  }
}
  
  export default App;