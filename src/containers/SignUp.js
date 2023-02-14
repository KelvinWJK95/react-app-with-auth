import React from "react";
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
import Input from '../components/Input.js'
import Button from '../components/RoundedButton.js'

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {email:"", password:"", error:"", success:"", disabled:false,
        errorMsg:{
            email: { message:"", hasError:false },
            password: { message:"", hasError:false }
        }};
    }
    goBack = () => {
        this.props.navigation(-1)
    }
    validation = () => {
        let errorMsg = {
            email: { message:"", hasError:false },
            password: { message:"", hasError:false }
        };
        let noError = true;

        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        if(!this.state.email){
            errorMsg.email = { message:"Please enter your email", hasError:true }
            noError = false;
        }else if(regex.test(this.state.email) === false){
            errorMsg.email = { message:"Please enter a valid email", hasError:true }
            noError = false;
        }

        if(!this.state.password){
            errorMsg.password = { message:"Please enter your password", hasError:true }
            noError = false;
        }

        this.setState({
            errorMsg:errorMsg
        });

        return noError
    }
    signUp = () => {
        if(!this.validation()){
            return;
        }

        this.setState({
            error: "",
            disabled: true
        })
        
        const formData = new FormData()
        formData.append("email", this.state.email)
        formData.append("password", this.state.password)
        fetch("http://35.192.17.83:81/register",{
            method: 'POST',
            body: formData
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.error){
                let errorMsg = ""
                if(data.error.includes("connection error")){
                    errorMsg = "There was an error with the server"
                }
                else{
                    errorMsg = data.error
                }
                
                this.setState({
                    error: errorMsg,
                    disabled: false
                });
            }
            else{
                this.setState({
                    success: "Sign up Successful!\nYou will be redirected back to login."
                });


                setTimeout(function () {
                    this.props.navigation("/login")
                }.bind(this),2000)
            }
        })
        .catch((error) => {
            this.setState({
                error: "There was an error with the server",
                disabled: false
            });
            console.log(error);
        });
    }
    handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            this.signUp()
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            errorMsg:{
                ...this.state.errorMsg,
                [event.target.name]: {
                    ...this.state.errorMsg[event.target.name], hasError:false
                }
            }
        });
    }
    render(){
        return <div><div style={this.state.disabled?{pointerEvents:"none", opacity:"0.4"}:{}} className="Signup-container">
        <h1 style={{padding:"20px"}}>Sign Up</h1>
        <div style={{color:"red"}}>{this.state.error}</div>
        <div style={{color:"green", whiteSpace: "pre-line"}}>{this.state.success}</div>
        <Input onChange={this.handleChange} name="email" placeholder="Email Address" error={this.state.errorMsg.email}/>
        <Input onChange={this.handleChange} onKeyDown={this.handleKeyDown} name="password" type="password" placeholder="Password" error={this.state.errorMsg.password}/>
        <Button name="Register" backgroundColor="#2AB2DE" width="80%" padding="10px"onClick={this.signUp}/>
        <button  onClick={this.goBack} className="Clickable-text-button">Back</button>
        <div style={{padding:"2rem"}}/>
        </div></div>;
    }
}

function SignupWithNavigation(props){
    const navigation = useNavigate();

    return <Signup {...props} navigation={navigation}/>
}
 
export default SignupWithNavigation;
