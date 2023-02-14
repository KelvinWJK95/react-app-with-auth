import React from "react";

class Button extends React.Component {
    render(){
        return <div style={{padding:this.props.padding}}>
            <button 
            onClick={this.props.onClick}
            style={{padding:"15px", fontWeight:"bold", fontSize:"1rem", width:this.props.width, border:"0px", borderRadius:"24px", color:"white", backgroundColor:this.props.backgroundColor, cursor:"pointer"}}>
            {this.props.name}
            </button>
        </div>;
    }
}

export default Button;