import React from 'react';
function LiveSearch(props) {

    console.log("sdf",props.arr)
    return ( 
        <>
         <div className="liveSuggestions card">
            {
                props.arr.map((prd)=><div onClick={()=>props.getProduct(prd.id)} className="row flexAIC p3 flexSB shover"><img src={prd.photograph} className="bRd5" style={{width:"50px",height:"50px"}} alt="" /> <p className='m1'>{prd.name}</p><p className='m1'>{prd.price}.Rs</p></div>
                )
            }
            
            </div>
            </>
     );
}

export default LiveSearch;