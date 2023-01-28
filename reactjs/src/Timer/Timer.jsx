import { useState, useEffect } from 'react'

const Timer = () => {
    const [time, setTime] = useState(0);
    var interval;
    useEffect(() => {
        interval = setInterval(() => {
            setTime(time + 1)
        }, 1000);
        return () => clearInterval(interval);
    })

    const handleStart = () => {
        interval = setInterval(() => {
            setTime(time + 1)
        }, 1000);

    }

    const handleStop = () => {
        clearInterval(interval);
    }

    return (
        <>
            <h4>Timer</h4>
            <div style={{ marginBottom: "2rem" }}>
                <h3>{time}</h3>
                <button onClick={handleStart}>start</button>
                <button onClick={handleStop}>stop</button>
                <button onClick={() => setTime(0)}>reset</button>
            </div>

        </>
    )
}

export default Timer