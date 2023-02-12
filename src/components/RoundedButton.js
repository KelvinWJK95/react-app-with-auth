import React from "react";

class Button extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div style={{padding:"10px"}}>
            <button 
            onClick={this.props.onClick}
            style={{padding:"15px", fontSize:"1rem", width: "80%", border:"0px", borderRadius:"24px", color:"white", backgroundColor:this.props.backgroundColor, cursor:"pointer"}}>
            {this.props.name}
            </button>
        </div>;
    }
}

export default Button;