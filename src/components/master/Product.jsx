import React from 'react';
import databases from '../../Database/test';
function Product(props) {
    const data=databases.restaurants
    let prd=data.filter(x=>(parseInt(x.id)===parseInt(props.currentId)))
    prd=prd[0]
    console.log(prd)
    return ( 
        <>
     <div className="col w100">
                <div className="row flexJCC">
                    <div className="col w50  m3 p1 bgWhite card">
                        <h2 className='m1'>{prd.name}</h2>
                        <div className="row" style={{ border: "1px solid grey" }}></div>
                        <p className="m1" style={{ fontSize: "22px" }}></p>
      
                            <div className="row" style={{marginBottom:"20px"}}>
                                <div className="col">
                           <img className="bRd5" src={prd.photograph} alt="" />
                                </div>
                                <div className="col p3">
                                    <h3 className='m1'>Cuisine type:  <span>{prd.cuisine_type}</span></h3>
                                    <h3 className='m1'>Price:  <span>{prd.price} Rs. Only</span></h3>
                                    
                                </div>
                            </div>

                         
                    </div>

                    <div className="col w33 m3  flexSB">
                        <div className="col  bgWhite card">
                            <div className="row flexSB m1">
                                <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC" style={{ backgroundColor: "#bababa" }}></div><p className='p3'>Not Visited</p></div>
                                <div className="row flexAIC w50"><div className="square btn-danger row flexJCC flexAIC"></div><p className='p3'>Not Answerd</p></div>
                            </div>
                            <div className="row flexSB m1">
                                <div className="row flexAIC w50"><div className="square btn-success  row flexJCC flexAIC" ></div><p className='p3'>Answerd</p></div>
                                <div className="row flexAIC w50"><div className="square btn-info  row flexJCC flexAIC"></div><p className='p3'>Marked For Review</p></div>
                            </div>
                            <div className="row flexSB m1">
                                {/* <div className="row flexAIC w50"><div className="square btn-info" ></div><p className='p3'>Not Visited</p></div> */}
                                <div className="row flexAIC w100"><div className="square btn-warning"></div><p className='p3'>Answerd & Marked For Review</p></div>
                            </div>
                            

                        </div>
                        <div className="col bgWhite card" style={{marginBottom:"20px"}}>
                        <div className="row flexAIC flexSB w100">
                          
                        </div>
                               
                        </div>


                    </div>
                </div>
            </div>
        </>
     );
}

export default Product;