import { Component } from "react";
import Navigation from "./Navigation"
import Footer from "./Footer"

class Baselayout extends Component{
    render(){
        return(
            <div>
                <Navigation/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Baselayout