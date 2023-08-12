import ReactDOM from "react-dom";
/**
 * Show Modal will be function
 * ! there is no cleanup strategy here 
 * @returns 
 */
const showModal = (MyHTMLElement) => {
    console.log("🚀 ~ file: index.jsx:7 ~ showModal ~ MyHTMLElement:", MyHTMLElement);
    return ReactDOM.createPortal(
        <div className="modal">
            <p>This is part of the modal</p>
            {MyHTMLElement}
        </div>,
        document.body
    );
}

export default showModal;