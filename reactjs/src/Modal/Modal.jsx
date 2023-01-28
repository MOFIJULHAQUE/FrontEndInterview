import React, { useEffect } from 'react'

const Modal = ({ data }) => {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }

    }, []);
    return (
        <>
            <div className="model_wrapper" onClick={data}></div>
            <div className='modal'>
                <p className='close' onClick={data}>X</p>
                <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus obcaecati repellendus </p>
                <button onClick={data}>Accept it</button>
            </div>
        </>
    )
}

export default Modal;
