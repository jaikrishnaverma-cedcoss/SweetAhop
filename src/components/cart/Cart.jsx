import React from 'react';

function Cart(props) {
    if (props.arr.length === 0)
        return <></>;
    else
        return (
            <>
                <div className="main row flexJCC p1">
                    <div className="container card" style={{width:"50%"}}>
                        <table >
                           <thead>
                           <tr className='bgBlack dbg2 bRd5'>
                                <td colSpan="6" className='bRd5'>    <h2>Shopping Cart</h2></td>
                                <td className='bRd5'><button className="btn btn-trans" onClick={props.empty}>Empty Cart</button></td>
                            </tr>
                            <tr className=''>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                           </thead>
                            {
                                props.arr.map((prd,i) => {
                                    return <tr><td>{prd.id}</td>
                                    <td><img src={prd.image} style={{width:"50px",height:"50px"}} alt="" /></td>
                                    <td>{prd.name}</td>
                                    <td>{prd.price}</td>
                                    <td className='row flexJCC'><div className="row flexAIC"><button onClick={()=>props.incrDecr(false,i)} className="btn btn-black">-</button><button className="btn">{prd.quantity}</button><button onClick={()=>props.incrDecr(true,i)} className="btn btn-black">+</button></div></td>
                                    <td>{parseInt(prd.price)*parseInt(prd.quantity)}</td>
                                    <td><button className="btn btn-danger" onClick={()=>props.remove(i)}>Remove</button></td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>
                </div>
            </>
        );
}

export default Cart;