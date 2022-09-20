import React from 'react';
import databases from '../../Database/test';
import RowsOfcard from '../HomeElements/RowsOfCards';
function Product(props) {
    const data = databases.restaurants
    let prd = data.filter(x => (parseInt(x.id) === parseInt(props.currentId)))
    prd = prd[0]
    // console.log(prd)
    return (
        <>
            <div className="col w100">
                <div className="row flexJCC">
                    <div className="col w50 m3 p1 carderr">
                        <div className="col w100   bgWhite card">
                            <h2 className='m1'>{prd.name}</h2>
                            <div className="row" style={{ border: "1px solid grey" }}></div>
                            <p className="m1" style={{ fontSize: "22px" }}></p>

                            <div className="row" style={{ marginBottom: "20px" }}>
                                <div className="col w50">
                                    <img className="bRd5" src={prd.photograph} alt="" />
                                </div>
                                <div className="col p3 w50 flexSB">
                                    <div className="col">
                                        <h3 className='m1'>Cuisine type :  <span>{prd.cuisine_type}</span></h3>
                                        <h3 className='m1'>Price :  <span>{prd.price} Rs. per/Kg Only </span></h3>
                                        <p style={{color:"cadetblue"}}><span>About: </span>The traditional modak filling is made using fresh grated coconut and sugar or jaggery, along with nuts, raisins and a pinch of cardamom. This mix is cooked together till almost dry, cooled and filled into the rice dough balls before being shaped into the customary onion bulb.</p>
                                    </div>
                                    {/* <p style={{textAlign:'left'}}>Quantity :</p> */}
                                    {/* <div className="row">
                                        <button className="btn btn-black w33">-</button>
                                        <button className="btn w33" style={{border:"1px solid black"}}>56</button>
                                        <button className="btn btn-black w33">+</button>
                                    </div> */}
                                    <button className='btn btn-info' onClick={() => props.addToCart(prd)}>Add To Cart</button>

                                </div>
                            </div>

                        </div>
                        <div className="col" style={{marginTop:"4%"}}>
                        <RowsOfcard />
                        </div>
                        
                    </div>

                    <div className="col w33 m3  flexSB">
                        <table style={{ width: "100%" }}>
                            <tr><td><h3 style={{ textAlign: "left" }}>Reviews</h3></td></tr>
                            {
                                prd.reviews.map((rev) => <tr className="col  bgWhite card m1"><td><div className="col reviewn"><div className="row" style={{ justifyContent: 'space-between' }}><div className="col"><h4><i class="fa fa-user" aria-hidden="true"></i>{rev.name}</h4><span className='rating'>{rev.rating}<i class="fa fa-star" aria-hidden="true"></i></span></div><h5> {rev.date}</h5></div><div><p className='comments'>{rev.comments}</p></div></div></td></tr>
                                )
                            }

                        </table>
                        {/* <div className="col  bgWhite card">
                                    

                        </div>
                        <div className="col bgWhite card" style={{marginBottom:"20px"}}>
                        <div className="row flexAIC flexSB w100">
                          
                        </div>
                               
                        </div> */}


                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;