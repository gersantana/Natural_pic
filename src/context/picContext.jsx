import { createContext } from "react";
import PropTypes from "prop-types"

const PicContext = createContext()

const PicPorvider  = ({children}) => {

    const data = {}

    return (
        <PicContext.Provider value={data}>{children}</PicContext.Provider>
    )
}

PicPorvider.propTypes = {
    children: PropTypes.array.isRequired
}

export default PicContext
export {PicPorvider} 
