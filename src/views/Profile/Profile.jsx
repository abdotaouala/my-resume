import React from 'react';
import  ModalProfile  from "./../ModalProfile/ModalProfile";
import { ProfileContext } from "./../../contexts";
// img
import * as myPhoto from "./../../assets/img/myImg.png";
import * as angular from "./../../assets/img/angular.png";
import * as spring from "./../../assets/img/spring.png";
import * as react from "./../../assets/img/react.png";



const Profile=()=>{
    return (
        <ProfileContext.Consumer>
            {
                context=> <div className="container">
                <div className="span3 well mt-5">
                    <center>
                        <a href="#" onClick={context.handleShowModal}>
                            <img src={myPhoto} name="aboutme"  alt="" width="244" height="244" className="img-circle"/>
                        </a>
                        <h3>Abdelfatah TAOUALA</h3>
                        <h5>FullStack Developer</h5>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam illo quod et quam deleniti quia. Excepturi, vel perferendis natus nihil laborum quisquam. Rem architecto debitis inventore vero veniam aliquam saepe.
                        </p>
                        <div>
                            <a >
                                <img src={angular} name="aboutme" alt="" width="50" height="50" className="img-circle"/>
                            </a>
                            <a >
                                <img src={react} name="aboutme" alt="" width="50" height="50" className="img-circle"/>
                            </a>
                            <a >
                                <img src={spring
                                } name="aboutme" alt="" width="50" height="50" className="img-circle"/>
                            </a>
                        </div>     
                        <em>click my face for more</em>
                        <ModalProfile/>    
                    </center>
                </div>
            </div>
          
            }
         </ProfileContext.Consumer>
    )
}
export default Profile;