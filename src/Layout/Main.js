import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftSide from '../Shared/LeftSide/LeftSide';
import RightSide from '../Shared/RightSide/RightSide';
import NavigationBar from '../Shared/Nav/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>

          <Container>
            <Row>
                <Col lg="2" className='d-none d-lg-block'>
                <LeftSide></LeftSide>
                </Col>
               
                <Col lg="7">

                  <Outlet></Outlet>
                  
                </Col>
                
                <Col lg="3">
                <RightSide></RightSide>
                </Col>

            </Row>
          </Container>
          <Footer></Footer>
        </div>
    );
};

export default Main;