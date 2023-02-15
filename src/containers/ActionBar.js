import React from "react";
import { useNavigate } from "react-router-dom";
import './ActionBar.css'
import Button from '../components/RoundedButton.js'
import UserDisplay from "../components/UserDisplay";
import GoalDisplay from "../components/GoalDisplay";

class ActionBar extends React.Component {
    render(){
        return <div className="Actionbar-container">
        <div style={{paddingTop:"25px"}}/>
        <GoalDisplay current="$500" goal="$10,000" quantity="34"/>
        <UserDisplay user="Anonymous" amount="$50"/>
        <UserDisplay user="Anonymous" amount="$100"/>
        <UserDisplay user="Anonymous" amount="$1,000"/>
        <div style={{padding:"0.2rem"}}/>
        <Button name="Give" width="100%" padding="6px"  backgroundColor="rgb(161 83 247)"/>
        <Button name="Pledge" width="100%" padding="6px"  backgroundColor="rgb(137 42 241)"/>
        <div style={{padding:"0.8rem"}}/>
        </div>;
    }
}


function ActionBarwithNavigation(props){
    const navigation = useNavigate();

    return <ActionBar {...props} navigation={navigation}/>
}

export default ActionBarwithNavigation;
