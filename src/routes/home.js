import PageHeader from "../components/page-header";
import PageHero from "../components/page-hero";
import { useNavigate } from "react-router-dom";
const HomeRoute = () => {
  let navigate = useNavigate();
    return (
    <>
   <PageHero 
    media={
      <img  src="images/mind-garden-intro.svg" width="631" height="403" alt="mind-garden-intro"/>
    }
    content={

      <>
        <h1 className='mind-garden-page-heading'>
          The Mind<br/>Garden
        </h1>
        <div className="hero-ctas">
          <a className="button is-primary" href="#">Start your journey</a>
          <p>or <a href="#">Login</a></p>
        </div>

      </>
      
    }
    />

    <div className="container">
    <h2>Helping you<br/>with peace of mind.<img src="images/leaf.svg" /></h2>


    <div className='module-list'>

        <div className='module blue'>
        <h3>Speech Game</h3>
        <p>Test your speech skills in this interactive game</p>
        <a className='button is-secondary' onClick={() => navigate('/speech-module')}>Find out more</a>

        <div className='module-illus'>
            <img src='images/speech-illus.svg' />
        </div>
        </div>

        <div className='module blue'>
        <h3>Speech Game</h3>
        <p>Test your speech skills in this interactive game</p>
        <a className='button is-secondary'>Find out more</a>

        <div className='module-illus'>
            <img src='images/speech-illus.svg' />
        </div>
        </div>

        <div className='module blue'>
        <h3>Speech Game</h3>
        <p>Test your speech skills in this interactive game</p>
        <a className='button is-secondary'>Find out more</a>

        <div className='module-illus'>
            <img src='images/speech-illus.svg' />
        </div>
        </div>

        <div className='module blue'>
        <h3>Speech Game</h3>
        <p>Test your speech skills in this interactive game</p>
        <a className='button is-secondary'>Find out more</a>

        <div className='module-illus'>
            <img src='images/speech-illus.svg' />
        </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default HomeRoute;