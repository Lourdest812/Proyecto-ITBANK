import React from "react";
import '../css/login.css'

function Button({action, type}){
    return(
        <div className="buttons">
                    <div className="button-class">
                        <button className="button" type={type}>{action}</button>
                    </div>
        </div>
    );
}

export default Button;