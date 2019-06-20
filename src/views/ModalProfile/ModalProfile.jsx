import React from "react";
import {Badge, Button, Modal} from "react-bootstrap";
import {ProfileContext} from "./../../contexts";
// img
import * as myPhoto from "./../../assets/img/myImg.png";
import LinearProgress from '@material-ui/core/LinearProgress';

const ModalProfile=(props)=>{

    return (
        <ProfileContext.Consumer>
            { context=>
                <div>
            <Modal show={context.showModal} OnHide={context.handleShowModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        More About Me
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="container">
                <div className="span3 well mt-2">
                    <center>
                        <a href="" onClick={e=>{e.preventDefault(); return context.handleShowModal}}>
                            <img src={myPhoto} name="aboutme"  alt="" width="244" height="244" className="img-circle"/>
                        </a>
                        <h3>Abdelfatah TAOUALA </h3>
                        <h5>FullStack Developer</h5>
                        <Badge variant="secondary">Casablanca Maroc</Badge>
                        </center>
                        <div>
                            <div>
                                <b>Bio :</b>
                            </div>
                            <div>
                                <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam illo quod et quam deleniti quia. Excepturi, vel perferendis natus nihil laborum quisquam. Rem architecto debitis inventore vero veniam aliquam saepe.
                        </p>
                            </div>
                        </div>
                    <div>
                        <b>Skills : </b>
                    </div>
                    <div className="skills">
                        <div>
                            Angular 2+
                            <LinearProgress color="secondary" variant="buffer" value={70} valueBuffer={80}/>
                            React
                            <LinearProgress variant="buffer" value={60}
                                            valueBuffer={70}/>
                            Spring (Boot / Data / Security / Cloud) with Java 8
                            <LinearProgress variant="buffer" value={50}
                                            valueBuffer={60}/>
                            Git
                            <LinearProgress variant="buffer" value={90}
                                            valueBuffer={100}/>
                            Jenkins , Drops, Docker, Gitlab, GitHub
                            <LinearProgress variant="buffer" value={60}
                                            valueBuffer={70}/>
                        </div>

                    </div>
                </div>
            </div>
          
                </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={context.handleShowModal}>
              Close
            </Button>
          </Modal.Footer>
            </Modal>  
                </div>
            }
        </ProfileContext.Consumer>
    )
}

export default ModalProfile;
