import { useNavigate } from "react-router-dom";
import PageHero from "../components/page-hero";

const SpeechRoute = () => {
    const navigate = useNavigate();
    return (
        <>
       <PageHero 
        media={
          <img  src="images/speech-hero-illus.svg" width="631" height="403" alt="mind-garden-intro"/>
        }
        content={
    
          <>
            <h1 className='mind-garden-page-heading'>
              Speech<br/>Game
            </h1>
            
    
          </>
          
        }
        />
    
          <div className="container">
            <h2>Welcome to the<br/>speech game.<img src="images/leaf.svg" /></h2>
    
    
            <div className="two-col align-vert-center">
              <div className="col">
                <p>This part of the test includes 1 question and should take around 5 minutes to take.</p>
                <p>It will test your language skills.</p>
                <p>Make sure you are comfortable and in an evironment that is free from distractions.</p>
              </div>

              <div className="col">
                <img src="images/about-speech-game.svg"/>
              </div>
            </div>


            
          </div>
          <div className="start-game-banner">
              <button className="button" onClick={() => navigate("/speech-module-app")}>
                Start the game
              </button>
            </div>
        </>
        )
}


export default SpeechRoute;