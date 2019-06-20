import React from 'react';
import {Link} from "react-router-dom";
import "./Header.scss";
import {Nav} from "react-bootstrap";


const Header = () => {
    return (
        <header>
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Item>
                    <Link to="/">
                        Profile
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/experiences">Experiences</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/technologies">
                        Technologies
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/projects">
                        Projects
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/blogs">
                        Blogs
                    </Link>
                </Nav.Item>
            </Nav>
        </header>
     );
}
 
export default Header;
