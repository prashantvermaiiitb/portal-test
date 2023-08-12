import { useEffect } from "react";
import { createPortal } from "react-dom";
/**
 * Simple portal wrapper component that's opening a Portal
 * @param {*} param0 
 * @returns 
 */
const PortalWrapperComponent = ({ children }) => {
    const mount = document.getElementById('portal-root');
    const el = document.createElement('div');
    useEffect(
        () => {
            mount.appendChild(el);
            return () => mount.removeChild(el)
        }, [el, mount]
    );
    return (createPortal(children, el));
}

export default PortalWrapperComponent;