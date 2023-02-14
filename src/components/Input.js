
const Input = (props) => {
    return (
        <div style={{padding:"10px 50px"}}>
            <input
            required 
            name={props.name}
            type={props.type}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            placeholder={props.placeholder}
            style={{padding:"10px", width: "100%", boxSizing: "border-box", borderWidth:"0 0 1px", outline:"0"}}
            />
            {(props.error.hasError)?<div style={{textAlign:"left", fontSize:"11px", color:"red"}}>{props.error.message}</div>:<></>}
        </div>
    )
}

export default Input;