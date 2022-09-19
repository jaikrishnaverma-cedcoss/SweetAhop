import React from 'react';
import './Nav.css'
import { Link } from "react-router-dom";
function Nav(props) {
   return (

      <>
         <div className="nav clr4" style={{width:"98%"}}>
          <Link to='/' style={{display:"block",height:"100%",width:"8%"}}>
            <img src="logoshop.png" alt="" className="logo" />
          </Link>  
            <div className="row w20 flexAIC ">
            <div className="row bRd5 p3 flexAIC hover">
              <div className="col">
              <i className="fa fa-map-marker" style={{fontSize:"30px"}} aria-hidden="true"></i>
               </div>
              <div className="col">
               <p>Hello</p>
               <h4>Select Your Address</h4>
               </div> 
            </div>
            </div>
            <div className="searchbox w33 clr4">
               <input type="text" className='' />
               <select name="" className='border-outline-none bRd5 clr4' id="">
                  <option value="All">All</option>
               </select>
            </div>
          <button className='btn clr3 categories row flexAIC' style={{width:"9%"}}> <h5>Categories</h5> &nbsp;<i className="fa fa-angle-down" aria-hidden="true"></i> </button>
            <div className="col flexAIC w20"> 
            <div className="col bRd5 p3 flexAIC hover">
               <Link to='/login' className="row flexAIC"  style={{width:"100%"}}><p>Hello , Sign In</p></Link>
               <h4>Account & Details <i className="fa fa-angle-down" aria-hidden="true"></i></h4>
            </div>
            </div>
            <div className="col w20 flexAIC ">
            <div className="col bRd5 p3 flexAIC hover">
               <p>Returns</p>
               <h4>& Orders <i className="fa fa-angle-down" aria-hidden="true"></i></h4>
            </div>
            </div>
            <button className="btn btn-black clr2  " style={{width:"6%"}} ><Link  className="anc" to='/cart' ><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Link></button>

         </div>


      </>
   );
}

export default Nav;