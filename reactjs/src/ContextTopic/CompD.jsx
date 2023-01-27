import React, { useContext } from 'react'
import { context } from '../App'
const CompD = () => {
    const contextData = useContext(context)
    return (
        <>

            <div>CompD</div>
            {
                contextData
            }
        </>

    )
}

export default CompD