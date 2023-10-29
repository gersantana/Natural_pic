import { createContext } from "react";

const picContext = createContext()

const picPorvider  = ({children}) => {

    const data = {}

    return (
        <picContext.Provider value={data}>{children}</picContext.Provider>
    )
}

export default picContext
export {picPorvider} 
