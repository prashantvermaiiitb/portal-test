import usePortal from "../../hooks/usePortalHook";

const PortalHookDemo = ({ children }) => {
    //render our portal within the element which has the class or element 
    const Portal = usePortal(document.getElementById('portal-root'));
    // !Do We need Portal-Demo encapsulation here...
    // this encapsulation will remain here only in the main tree 
    // while the <Portal> tag will move to the body element
    return (
        <div className="Portal-Demo">
            <Portal>{children}</Portal>
        </div>
    );
}

export default PortalHookDemo;