import { useNavigate } from "react-router-dom";
import PageHeader from "../components/page-header";
import PageHero from "../components/page-hero";

const AboutRoute = () => {
    let navigate = useNavigate();
    return (
    <>
   <PageHero 
    media={
      <img  src="images/tree-about.svg" width="631" height="403" alt="mind-garden-intro"/>
    }
    content={

      <>
        <h1 className='mind-garden-page-heading'>
          About The<br/>Garden
        </h1>
        

      </>
      
    }
    />

      <div className="container">
        About...
      </div>
    </>
    )
}


export default AboutRoute;