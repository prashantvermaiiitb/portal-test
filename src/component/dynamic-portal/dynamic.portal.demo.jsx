import { Suspense, useRef, useState } from "react";
import showModal from "../modal";

const getStaticDialogComponent = (msg) => Promise.resolve(<div>{msg}</div>);
/**
 * Loading Greet component lazy load
 * @returns 
 */
const getGreetingDialog = async () => {
    let { default: Greeting } = await import('../modal/greeting');
    // return Greeting.default;//(msg) => <Greeting>{msg}</Greeting>
    return Greeting;
}

const getHelloWorldWrapper = async () => {
    let { default: HelloWorld } = await import('../web-component/index');
    // return Greeting.default;//(msg) => <Greeting>{msg}</Greeting>
    return HelloWorld;
}


/**
 * Function for launching the Modal in a Portal
 * @param {*} props 
 * @returns 
 */
const MyModal = (props) => {
    console.log("🚀 ~ file: App.js:6 ~ MyModal ~ props:", props);
    const { children } = props;
    // return showModal(<Suspense fallback={<p>loading ... </p>}>{children}</Suspense>);
    // !creating the portal after recieving the components 
    return showModal(children);
}

/**
 * Loader component
 * @returns 
 */
const Loader = () => <p>loading the component from import... </p>;

/**
 * Dynamic Portal creation Demo component 
 * @param {*} props 
 * @returns 
 */
const DynamicPortalCreationDemo = (props) => {

    const [modal, setModal] = useState(false);
    const ModalElement = useRef(null);
    const { msg } = props;

    const toggleModal = (e) => {
        // console.log("🚀 ~ file: App.js:17 ~ toggleModal ~ modal:", modal);
        // const btnText = 'Hello World !! Promise Resolution..';
        // getGreetingDialog()
        getHelloWorldWrapper()
            .then(jsxElement => {
                if (jsxElement) {
                    console.log("🚀 ~ file: App.js:27 ~ toggleModal ~ jsxElement:", jsxElement,msg);
                    ModalElement.current = jsxElement;
                    setModal(!modal);
                }
            });
    };
    // console.log("🚀 ~ file: dynamic.portal.demo.jsx:63 ~ toggleModal ~ ModalElementInstance:", ModalElementInstance)

    return (
        <div>
            <Suspense fallback={<Loader />}>
                <>
                    <button onClick={toggleModal} > Click to create Portal</button>
                    {(modal
                        && ModalElement.current
                        && <MyModal><ModalElement.current message={msg} /></MyModal>)}
                </>
            </Suspense>
        </div>
    );
}

export default DynamicPortalCreationDemo;