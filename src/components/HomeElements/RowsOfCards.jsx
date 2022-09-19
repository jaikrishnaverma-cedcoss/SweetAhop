import React, { useEffect, useState } from 'react';
import databases from '../../Database/test';
import './rowsOfCards.css'
function RowsOfcard() {
    const data=databases.restaurants
    const [index,setIndex]=useState(0);
    if(index>=(data.length-4))
    setIndex(0);
    useEffect(() => {
        const interval = setInterval(() => {
            console.log(index+"   "+data.length) ;
                
          setIndex(prev=>prev+1);
        }, 2000);
        return () => clearInterval(interval);
      }, []);

    return ( 
        <>
    
        <div className="row card row rowsOfCards lbg1" >
            <div className="row">
       <div className="col bRd5"><img className='bRd5' src={data[index].photograph} alt="" /><h4></h4></div>
       <div className="col bRd5"><img className='bRd5' src={data[index+1].photograph} alt="" /><h4></h4></div>
       <div className="col bRd5"><img className='bRd5' src={data[index+2].photograph} alt="" /><h4></h4></div>
       <div className="col bRd5"><img className='bRd5' src={data[index+3].photograph} alt="" /><h4></h4></div>
            
           </div>
          
        </div>
        </>
     );
}

export default RowsOfcard;