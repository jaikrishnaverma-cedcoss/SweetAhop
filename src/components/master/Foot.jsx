import React from 'react';
import './foot.css'
function Foot() {
    return ( 
        <>
        <div className=" col clr2 flexAIC">
  <div className="row  flexSB" style={{padding:"2% 5%"}}>
    <div className="col w50">
        <h2 className='m1' style={{marginLeft:"0px"}}>ABOUT</h2>
        <p style={{marginLeft:"0px"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus minus dolore odio ratione provident sunt rerum explicabo, veniam nisi aperiam accusantium. Id consequatur suscipit dolor maiores rerum iste in nostrum illum, fugit libero possimus voluptatibus necessitatibus asperiores itaque architecto aut.</p>
    </div>
    <div className="col w20">
        <h2 className='m1' style={{marginLeft:"0px"}}>Categories</h2>
        <li>Meetha</li>
        <li>Dry Fruits</li>
        <li>Halawa</li>
    </div>
    <div className="col w20">
    <h2 className='m1' style={{marginLeft:"0px"}}>Quick Links</h2>
        <li>Meetha</li>
        <li>Dry Fruits</li>
        <li>Halawa</li>
    </div>
  </div>      
    <hr  style={{border:"1px solid white",width:"90%"}}/>
 <div className="row m1" style={{width:"90%",marginBottom:"3%"}} >
    <p style={{marginLeft:"0px"}}>Copyright © 2017 All Rights Reserved by Scanfcode.</p>
 </div>
        </div>
        </>
     );
}

export default Foot;