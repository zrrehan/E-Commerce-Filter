function Input({handleChange, value, title, name, color}) {
    return(
        <>
            <label className="sidebar-label-container">
                <input onChange = {handleChange} className = "radio-input" type = "radio" value = {value} name = {name}/>
                <span className="checkmark" style = {{backgroundColor: color}}></span>{title}
            </label><br></br>
        </>
    );
}


export default Input;