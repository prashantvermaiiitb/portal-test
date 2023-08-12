import { useState } from "react";
import { ClipLoader } from "react-spinners";

const outerContainer = {
    "backgroundColor": "grey",
    "padding": "20px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    opacity: 0.9,
    // "text-align": "center",
    // display: "flex",
    // "align-items": "center",
    // "justify-content": "center",
}

const innerContainerStyle = {
    "textAlign": "center",
    display: "flex",
    "alignItems": "center",
    "justifyContent": "center",
    height: "100vh",

}

const hide = { display: 'none' }

const Greeting = ({ message, children }) => {
    const [hide, setHide] = useState(true)
    if (!hide) {
        return null;
    }
    return (
        <div style={outerContainer}>
            <button onClick={e => setHide(false)}>hide me</button>
            <div style={innerContainerStyle}>

                <ClipLoader />
                <br />
                <span >{message}</span>
                {children}
            </div>
        </div>

    );
}

export default Greeting;