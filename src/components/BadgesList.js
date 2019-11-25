import React from 'react';
// iconos 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// fin de iconos 
import './styles/BadgesList.css';
class BadgesList extends React.Component {

    render(){
        return (
         <div className="Container">
         <ul className="list-unstyled">
             {this.props.badges.map(badge => {
                 return (
                     <div key={badge.id}  className="list">
                         <img className="list__container--image" src={badge.avatarUrl} alt="avatar"></img>
                     <li className="list__container" >
                         
                         <p className="list__container--name">
                             {badge.firstName} {badge.lastName}
                         </p>
                        
                         <span style={{ color:"#00acee" }}>
                         <FontAwesomeIcon icon={faTwitter} /> @{badge.twitter}
                         </span>
                         
                         <p className="container--job">
                             {badge.jobTitle}
                         </p>

                     </li>
                     </div>
                 )
             })}
         </ul>
         </div>
        )
    }
}


export default BadgesList;