import React from 'react';
import './styles/BadgeHome.css';
import { Link } from 'react-router-dom';
import PlatziLogo from '../images/platziconf-logo.svg';
import Astronauts from '../images/astronauts.svg';


class BadgeHome extends React.Component {
render () {
    return (
        <React.Fragment>
        <div className="Home">
            <div className="Home__Container">
            <img className="Home__img--platzi" src={PlatziLogo} alt="platzilogo"/>
            <h1>PRINT YOUR BADGES</h1>
            <p>The easiest way to manage your <br/> conforence </p>
            <Link to="/badges" className="btn btn-primary">
                start
            </Link>
            </div>
            
            <div className="Home__Container--stronauts">
            <img className="Home__img--astronauts" src={Astronauts} alt="astronouts" />    
            </div>
        </div>
        </React.Fragment>
        
    )    
  }
}

export default BadgeHome;

