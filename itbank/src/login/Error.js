import React from "react";
import '../css/login.css'

function Error({errorMessage, type}){
    return(
        <div id={"${type}-error"} className="error">{errorMessage}</div>
    );
}

export default Error;