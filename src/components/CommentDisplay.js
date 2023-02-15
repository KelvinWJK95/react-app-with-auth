import userLogo from "../images/icons8-user-32-2.png"

const CommentDisplay = (props) => {
    return (<div style={{display:"flex"}}>
        <div style={{textAlign:"left", padding:"5px 0", display:"flex"}}>
            <div style={{padding:"10px 5px 10px 0"}}>
                <img  src={userLogo}  alt="userLogo"/>
            </div>
            <div style={{fontSize:"12px", padding:"10px"}}>
                <div style={{fontFamily:"sans-serif", fontWeight:"900"}}>{props.user}</div>
                <div>{props.amount}<span style={{color:"gray", fontSize:"0.8rem", padding:"0 5px"}}>•</span>{props.when}</div>
                <div style={{fontSize:"0.8rem", padding:"5px 1rem 5px 0"}} className="Wrap-text">{props.message}</div>
            </div>
        </div>
        </div>
    )
}

export default CommentDisplay;