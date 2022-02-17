import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link
} from "react-router-dom";

import HomeRoute from "../routes/home";
import AboutRoute from "../routes/about";
import SpeechRoute from "../routes/speech-module-intro";
import SpeechAppRoute from "../routes/speech-module-app";
const PageHeader = () => {

    return (
        <Router>
            <div className="mind-garden-page-header">
                <div className="container">
                    <div className="mind-garden-inner-page-header">
                        <div className="mind-garden-logo-anchor">
                            Logo
                        </div>

                        <nav className="mind-garden-site-navigation">
                            <ul>
                                <li>
                                    <NavLink activeClassName="active" to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" activeClassName="active">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/support" activeClassName="active">Support</NavLink>
                                </li>
                            </ul>
                        </nav>

                        <div className="mind-garden-page-header-ctas desktop-only">
                            <Link className="button is-primary" to="/">Signup</Link>
                            <Link className="button is-secondary" to="/">Login</Link>
                        </div>
                    </div>

                    
                </div>
                
            </div>

            <Routes>
                <Route path="/" element={<HomeRoute/>} />
                <Route path="/about" element={<AboutRoute/>} />
                <Route path="/speech-module" element={<SpeechRoute />} />
                <Route path="/speech-module-app" element={<SpeechAppRoute />} />
            </Routes>
        </Router>
        

    )
}

export default PageHeader;