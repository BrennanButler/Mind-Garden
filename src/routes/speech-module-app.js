import React, { useState } from 'react';

const SpeechAppRoute = () => {

    const [ isGameRunning, setGameRunning ] = useState(false);

    return (
        <div className='container'>
            
            <div className="module-game-canvas">
                <img className='canvas-icon' src="images/microphone.svg"/>
                { isGameRunning ? 
                    <>
                        <p>Game is running</p>
                        <button onClick={() => setGameRunning(false) }>stop game</button>
                    </>
                :
                    <button onClick={() => setGameRunning(true) }>Start game</button>
                }
                
            </div>

            <div className='module-game-help'>
                <img src="images/leaf.svg"/>
                <p>Try to say out loud as many words as you can think of that start with the letter ‘P’</p>
            </div>
        </div>
    )
}

export default SpeechAppRoute;