import { useRef, useState } from "react";
import PortalWrapperComponent from "./portal.wrapper.component";
import './portal.wrapper.css'

const getGreetComponent = async () => {
    const { default: Greeting } = await import('../modal/greeting');
    return Greeting;
}

const getWebComponent = async () => {
    const { default: WebComponent } = await import('../web-component/index');
    return WebComponent;
}

const PortalWrapperDemo = (props) => {

    const [isPortalOn, setIsPortalOn] = useState(false);
    const modal = useRef(null);
    const togglePortal = (e) => {
        getGreetComponent()
            .then(module => {
                // console.log("🚀 ~ file: index.jsx:24 ~ togglePortal ~ module:", module);
                const GreetingComponent = module;
                getWebComponent().then(webComponentModule => {
                    const HelloWorldWebComponent = webComponentModule;
                    modal.current = () => {
                        return (<PortalWrapperComponent>
                            <div>This is a Portal wrapper demo..</div>
                            <GreetingComponent message={props.message}>
                                <HelloWorldWebComponent />
                            </GreetingComponent>
                        </PortalWrapperComponent>);
                    };
                    setIsPortalOn(!isPortalOn);
                });
            });
    }
    return (<div className="portal-wrapper-container">
        <button className="open-portal-button" onClick={togglePortal}>Click to open portal</button>
        {isPortalOn && modal.current && <modal.current />}
    </div>);
}

export default PortalWrapperDemo;