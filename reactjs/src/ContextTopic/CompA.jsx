import React from 'react'
import CompB from "./CompB";
import "./style.css";



const CompA = () => {
    return (
        <>
            <ul>
                <li>
                    CompA
                </li>

                    <CompB />
            </ul>

        </>
    )
}

export default CompA
