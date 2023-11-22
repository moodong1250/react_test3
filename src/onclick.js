import React, { Component } from "react";

class Buttontest extends Component {
    buttonClick = (param) => {
    if(typeof param != 'string') param = "Click a"
    console.log('parm : '+ param);
    
}

render() {
    return (
        <>
        <button onclick={e => this.buttonClick("Click button")}>
            Click button </button>
            </>
    )
}
}
export default Buttontest;