import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { authContext } from "../../Context/Authprovider";

const NavigationBar = () => {
  const { user ,logOut} = useContext(authContext);
  console.log(user);
  

  const handleLogOut = () => {
      logOut()
          .then()
          .catch(error => console.log(error));
  }

  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
           
                <Link className="p-2" to="/">Home</Link>
   
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
             {user && <Nav.Link href="#deets" className="text-success text-sm">{user.email}</Nav.Link>}

              {user && (
                <Nav.Link href="#deets">
                  <FaUserCircle style={{ fontSize: "1.5rem" }}></FaUserCircle>
                </Nav.Link>
              )}

              {user ? (
                <Button onClick={handleLogOut}  className="btn-sm h-25  mt-1" variant="secondary">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button className="btn  mt-1" variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
