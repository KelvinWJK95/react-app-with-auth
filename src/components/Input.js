import React from "react";

class Input extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div style={{padding:"10px"}}>
            <input
            required 
            name={this.props.name}
            type={this.props.type}
            onChange={this.props.onChange}
            onKeyDown={this.props.onKeyDown}
            placeholder={this.props.placeholder}
            style={{padding:"10px", width: "75%"}}
            />
        </div>;
    }
}

export default Input;