import React, { useState } from 'react';
import Cards from './HomeElements/Cards';
import RowsOfcard from './HomeElements/RowsOfCards';
import Foot from './master/Foot';
import Product from './master/Product';
function Home(props) {
  const [prd,setPrd]=useState(-1);
  const getProduct=(id)=>{
    setPrd(id)
  }
  if(prd===-1)
  {
  return (
    <>
     <div className="nav2 clr3 row w100 flexAIC flexSA" style={{ marginTop: "0.85%" }}>
     <button className="btn btn-trans fclBlack">NAMKEEN</button>
     <button className="btn btn-trans fclBlack">CHOCOLATE</button>
     <button className="btn btn-trans fclBlack">MITHAI</button>
     <button className="btn btn-trans fclBlack">CELECRATION BOXES</button>
     <button className="btn btn-trans fclBlack">GIFTING</button>
        <button className="btn btn-trans fclBlack">ABOUT</button>
        <button className="btn btn-trans fclBlack">CONTACT US</button>
      </div>

      <div className="nav2 clr2 row w100 flexAIC" >
        <marquee behavior="" direction="">
          <span className="" style={{width:"800px"}}>Upto 30% Off On This Weekend Shop Exclusively.......! </span>
        </marquee>
      </div>

      <div className="w100 col lbg1 ">
        <img style={{ width: "100%" }} src="banner.jpg" alt="" />
        <h1 className='m3' style={{ color: "white", textAlign: "Center", marginBottom: "1%", fontFamily: "Ballet" }}>Home Sweet Home</h1>
        <p className='' style={{ color: "white", textAlign: "Center", marginBottom: "1%", fontSize: "18px" }}>From indulgent mithai, chocolatey sweets and sugar doused treats, we have something to put everyone in a good mood!</p>
        <div className="row w100 flexJCC" style={{ marginBottom: "5%" }}>
          <hr style={{ border: "1px solid white", width: "20%", textAlign: "center" }} /></div>
        <Cards getProduct={getProduct}/>
        <RowsOfcard />
      </div>
      <Foot />
    </>
  );
  }
  else{
    return(
      <>
      <Product currentId={prd}  addToCart={props.addToCart}  />
      </>
    );
  }
}

export default Home;