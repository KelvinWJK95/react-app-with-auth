import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import Input from '../components/Input.js'
import Button from '../components/RoundedButton.js'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class Login extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }
    constructor(props){
        super(props);
        this.state = {email:"", password:"", error:"", disabled:false};
    }
    signUp = () => {
        this.props.navigation("/signup")
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
    login = () => {
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
        fetch("http://127.0.0.1:8081/login",{
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
                if(data.token){
                    setTimeout(function () {
                        const { cookies } = this.props;
                        cookies.set('token', data.token, { path: '/' });
                    }.bind(this),1500)
                }else{
                    this.setState({
                        error: "Token not found",
                        disabled: false
                    });
                }
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
            this.login()
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render(){
        return <div style={this.state.disabled?{pointerEvents:"none", opacity:"0.4"}:{}} className="Container">
        <h1 style={{padding:"20px"}}>Sign In</h1>
        <div style={{color:"red"}}>{this.state.error}</div>
        <Input onChange={this.handleChange} name="email" placeholder="Email Address"/>
        <Input onChange={this.handleChange} onKeyDown={this.handleKeyDown} name="password" type="password" placeholder="Password"/>
        <Button name="Login" backgroundColor="#2ADE9A" onClick={this.login}/>
        <a onClick={this.signUp} className="Clickable-Text">Sign Up</a>
        </div>;
    }
}


function LoginWithNavigation(props){
    const navigation = useNavigate();

    return <Login {...props} navigation={navigation}/>
}

export default withCookies(LoginWithNavigation);
