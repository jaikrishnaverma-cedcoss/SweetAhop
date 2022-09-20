import React from 'react';
import Foot from './Foot';
function About() {
    return (
        <>
            <div className="row m1"><h1 style={{ textDecoration: "underline" }}>About Us</h1></div>
            <div className="row p1">
                <div className="row m1 p1">
                    <div className="col w33"><img src="rrr.jpg" alt="" style={{ height: "300px", widht: "300px" }} /></div>
                    <div className="col w50 p3">
                        <p style={{ fontSize: "25px" }}>" Bombay Sweet Shop is a new celebratory venture by Hunger Inc.,
                            the company behind The Bombay Canteen and O Pedro. The timely launch marks the five year anniversary of Hunger Inc.
                            and fittingly puts the spotlight on the sweets that shaped all our happy occasions. However,
                            it’s not mithai as we know it. "</p>
                    </div>
                </div>
            </div>
            <div className="row m1">
                <p>The sweet shop, is a place you come to get lost in the wonder of mithai. 
                    From open mithai stations to freshly churned kulfi soft serve we’ve got it all. Willy Wonka’s 
                    Indian cousin is all you need to remember and you’ll know what we’re all about. Come experience it 
                    all in one of our mithai tours.
                    The sweet shop, is a place you come to get lost in the wonder of mithai. 
                    From open mithai stations to freshly churned kulfi soft serve we’ve got it all. Willy Wonka’s 
                    Indian cousin is all you need to remember and you’ll know what we’re all about. Come experience it 
                    all in one of our mithai tours.
                    The sweet shop, is a place you come to get lost in the wonder of mithai. 
                    From open mithai stations to freshly churned kulfi soft serve we’ve got it all. Willy Wonka’s 
                    Indian cousin is all you need to remember and you’ll know what we’re all about. Come experience it 
                    all in one of our mithai tours.
                </p>
            </div>
            <div className="row m1" style={{width: "70vw"}}>
                <div className="col w33 card m1 hover"><img src="rrr.jpg" alt="" style={{ height: "250px", widht: "250px" }} />
                <h3 className="m1" style={{textAlign:"center"}}>Jai</h3>
                <h5 className="m1" style={{textAlign:"center"}}>(Co-Founder)</h5>
                </div>
                <div className="col w33 card m1 hover"><img src="rrr.jpg" alt="" style={{ height: "250px", widht: "250px" }} />
                <h3 className="m1" style={{textAlign:"center"}}>Shahu</h3>
                <h5 className="m1" style={{textAlign:"center"}}>(Founder)</h5></div>
                <div className="col w33 card m1 hover"><img src="rrr.jpg" alt="" style={{ height: "250px", widht: "250px" }} />
                <h3 className="m1" style={{textAlign:"center"}}>Shiv</h3>
                <h5 className="m1" style={{textAlign:"center"}}>(Managing Director)</h5>
                </div>
            </div>
            <div className="row m5">
                <p>The sweet shop, is a place you come to get lost in the wonder of mithai. 
                    From open mithai stations to freshly churned kulfi soft serve we’ve got it all. Willy Wonka’s 
                    Indian cousin is all you need to remember and you’ll know what we’re all about. Come experience it 
                    all in one of our mithai tours.
                    The sweet shop, is a place you come to get lost in the wonder of mithai. 
                    From open mithai stations to freshly churned kulfi soft serve we’ve got it all. Willy Wonka’s 
                    Indian cousin is all you need to remember and you’ll know what we’re all about. Come experience it 
                    all in one of our mithai tours.
                </p>
            </div>
            <Foot/>
        </>
    );
}

export default About;