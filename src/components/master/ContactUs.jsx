import React from 'react';
import Foot from './Foot';
function ContactUs() {
    return ( 
        <>
           <div className="row m1" style={{minHeight:"90vh"}}>
                <div className="col flexAIC">
                    <h1 className='m1'>Contact Us</h1>
                    <p>Brought to you by the team behind Your Favourite Adda, The Bombay Canteen and Your Happy Place, O Pedro, Bombay Sweet Shop is a celebration of sweets that have moulded our happiest occasions.</p>
                  <div className="row flexJCC w100 m5">
                        <div className="col w20">
                            <h2>Contact No.</h2>
                            <p>+91 8756706608</p>
                        </div>
                        <div className="col w20">
                        <h2>Email.</h2>
                            <p>Jaikrishnaverma@gmail.com</p>
                        </div>
                        </div>
        
                </div>
             
           </div>
           <Foot />
        </>
     );
}

export default ContactUs;