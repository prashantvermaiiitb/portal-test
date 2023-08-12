import { useCallback, useEffect, useState } from "react";
import ReactDOM from 'react-dom';

/**
 * This is not a functional component. This is a hook hence this is taking el
 * as the argument not props if we see.
 * @param {*} el 
 * @returns 
 */
const usePortal = (el) => {
    /**
     * creating Portal State that has 
     * - Portal :- Component inside that 
     * - remove() :- as the clean up function in that
     */
    const [portal, setPortal] = useState({
        render: () => null, // should be a react component 
        remove: () => null // clean-up function
    });

    /**
     * Create portal function to create a portal on the NODE 
     * passed here, This should be present in the HTML prior
     * to calling this function
     * @return {render,remove}
     */
    const createPortal = useCallback((el) => {
        /**
         * Functional Component for the Portal at the DOM node present in index.html
         * @param {*} param0 
         * @returns 
         */
        const Portal = ({ children }) => ReactDOM.createPortal(children, el);
        /**
         * cleanUp function needed for unmounting the React DOM node once we are done with Portal.
         * This will be called from useEffect that we will have later on when this component loads 
         * as we need to do the clean up once the portal is not needed.
         */
        const remove = () => ReactDOM.unmountComponentAtNode(el);
        return { render: Portal, remove };
    }, []);


    useEffect(() => {
        /**
         * remove the portal if there is already on this DOM node first before mounting a new one
         * this is need to remove the memory leaks.
         */
        if (el) portal.remove();
        /**
         * create a new portal on the Dom element provided now in the index.html
         * Getting a new value for the Portal state object {render,remove}
         */
        const newPortal = createPortal(el);
        /**
         * This will cause the Portal to render, given that we are setting the new state.
         */
        setPortal(newPortal);
        /**
         * CleanUp function for the Portal, when user exits the page or delete portal from memory
         */
        return () => newPortal.remove();
    }, [el]);

    /**
     * Returning render function reference from the portal object.
     * This will be used to instantiate the Portal Object.
     */
    return portal.render;
}

export default usePortal;