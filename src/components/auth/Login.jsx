import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {switch:"login" ,Credentials:[],tmpUsername:"",tmpPassword:"",tmpContact:"",SessionId:-1,notify:""}
    }
    Changebtn=(event)=>
    {
        this.setState({switch:event},()=>{
            this.setState({notify:""})
        })

        // console.log(event)
    }
    ChangeUsername=event=>{
   this.setState({tmpUsername:event.target.value})
    }
    ChangePassword=event=>{
        this.setState({tmpPassword:event.target.value})
    }
    ChangeContact=event=>{
        this.setState({tmpContact:event.target.value})
    }
    LoginHandler=event=>{
        let flag=-1;
        this.props.Credentials.map((obj,i)=>{
            if(obj.username===this.state.tmpUsername && obj.password===this.state.tmpPassword)
            flag=i
            return i
        })
        if(flag!==-1)
        this.setState({SessionId:flag},()=>
        {
            this.setState({notify:"Logged IN."})
            this.props.auth(this.state.SessionId)
    })
        else
         this.setState({notify:"Invalid Username Or Password"})
    }
    SignupHandler=event=>{
        if(this.state.tmpUsername!==""&&this.state.tmpContact!==""&&this.state.tmpPassword!=="")
        {
            let obj={username:this.state.tmpUsername,password:this.state.tmpPassword,contact:this.state.tmpContact}
            this.state.Credentials.push(obj)
            this.props.SignupHandler(obj)
            this.setState({Credentials:this.state.Credentials},()=>{
                console.log(this.state.Credentials)
                this.setState({notify:"Signup Successfully!"})
            })
        }
        else{

            this.setState({notify:"fill all details!"})
        }
    }
    render() { 
        if(this.state.switch==="login")
        {
        return ( 
            <>
            <div className="login lbg4">
                <img id="logo" src="logoshop.png" alt="" />
                <p className="notify">{this.state.notify}</p>
                <div className="form col">
                    <div className="col">
                   <label >Username</label>
                    <input onChange={this.ChangeUsername} value={this.tmpUsername} placeholder="Enter Your Username" className="btn  bgWhite"type="text" />
                    </div>
                    <label>Password</label>
                    <input onChange={this.ChangePassword} value={this.tmpPassword} placeholder="Enter Password" className="btn  bgWhite" type="password" />
                </div>
                <div className="foot">
              <p >Dont have any Account <a href="#" onClick={()=>this.Changebtn("Signup")} className='linker'>Signup</a></p>
      <button onClick={this.LoginHandler} className="btn btn-black">{this.state.switch}</button>
                </div>
            </div>
            </>
         );
        }
        if(this.state.switch==="Signup")
        {
            return ( 
                <>
                <div className="login sign lbg4">
                    <img id="logo" src="mcdonald-g3a79aa200_640.png" alt="" />
                    
                <p className="notify">{this.state.notify}</p>
                     {/* <iframe src="https://giphy.com/embed/0DYL4Yz6wwG0DfEBs9"  className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mcdonaldsuk-mcdonalds-uk-change-a-little-lot-0DYL4Yz6wwG0DfEBs9"></a></p> */}
                    <div className="form col">
                        <div className="col">
                       <label>Username</label>
                        <input onChange={this.ChangeUsername} value={this.tmpUsername}  placeholder="Enter Username" className="btn bgWhite"type="text" />
                        </div>
                        <label>Password</label>
                        <input onChange={this.ChangePassword} value={this.tmpPassword}  placeholder="Enter New Password" className="btn bgWhite" type="password" />
                    
                        <label>Contact</label>
                        <input onChange={this.ChangeContact} value={this.tmpContact}  placeholder="Enter Contact No." className="btn bgWhite" type="text" />
                        </div>
                    <div className="foot signn">
              <p >Already have Account <a href="#" onClick={()=>this.Changebtn("login")} className='linker'>LogIn</a></p>
      <button  onClick={this.SignupHandler} className="btn btn-info">{this.state.switch}</button>

          </div>
                </div>
                </>
             );
        }
    }
}
 
export default Login;