import React from "react";
import { useHistory } from "react-router-dom";


function Navigation(){
    const history=useHistory()

    const handleRouteChange=(e)=>{
        let path=`${e.target.value}`
        history.push(path)
    }

    return (
        <div id='header-container'>
            <h1>Book Barn</h1>
            <div id="menuBtnDiv">
                <button onClick={handleRouteChange} value='/'>Home</button>
                <button onClick={handleRouteChange} value='/add-book'>Add a Book</button>
                <button>Browse</button>
                <button>Community</button>
            </div>

            <div id="loginBtnDiv">
                <button>Sign In</button>
                <button>Join</button>
            </div>
        </div>
    )
}

export default Navigation