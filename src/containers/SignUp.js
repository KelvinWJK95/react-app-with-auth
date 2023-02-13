import React from "react";
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
import Input from '../components/Input.js'
import Button from '../components/RoundedButton.js'

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {email:"", password:"", error:"", success:"", disabled:false};
    }
    goBack = () => {
        this.props.navigation(-1)
    }
    validation = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                error: "Please enter a valid email"
            });
            return false;
        }
        return true;
    }
    signUp = () => {
        if(!this.validation()){
            return;
        }

        this.setState({
            error: "",
            disabled: true
        });
        
        const formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
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
            [event.target.name]: event.target.value
        });
    }
    render(){
        return <div style={this.state.disabled?{pointerEvents:"none", opacity:"0.4"}:{}} className="Container">
        <h1 style={{padding:"20px"}}>Sign Up</h1>
        <div style={{color:"red"}}>{this.state.error}</div>
        <div style={{color:"green", whiteSpace: "pre-line"}}>{this.state.success}</div>
        <Input onChange={this.handleChange} name="email" placeholder="Email Address"/>
        <Input onChange={this.handleChange} onKeyDown={this.handleKeyDown} name="password" type="password" placeholder="Password"/>
        <Button name="Register" backgroundColor="#2AB2DE" onClick={this.signUp}/>
        <a style={{cursor:"pointer", userSelect:"none", fontSize:"14px"}} onClick={this.goBack}>Back</a>
        </div>;
    }
}

export default function(props){
    const navigation = useNavigate();

    return <Signup {...props} navigation={navigation}/>
}
