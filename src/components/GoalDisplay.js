
const GoalDisplay = (props) => {
    return (<div style={{display:"flex"}}>
        <div style={{textAlign:"left", padding:"5px 10px", display:"flex"}}>
            <div style={{padding:"0.6rem"}}/>

            <div style={{padding:"5px 10px", lineHeight:"1.7"}}>
                <div>Total Raised</div>
                <b style={{fontSize:"1.5rem", paddingRight:"15px"}}>{props.current}</b> of <span style={{padding:"0 10px"}}>{props.goal}</span>
                <div style={{fontSize:"12px"}}>{props.quantity} have given!</div>
            </div>
        </div>
        </div>
    )
}

export default GoalDisplay;