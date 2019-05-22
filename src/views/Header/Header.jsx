import React from 'react';
import { Nav } from 'react-bootstrap';
const Header = () => {
    return ( 
        <>
        <header>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item >
                    <Nav.Link href="/home">
                        Profile
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">
                        Experiences
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">
                        Technologies 
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" >
                        Projects 
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" >
                        Blogs 
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </header>
        </>
     );
}
 
export default Header;