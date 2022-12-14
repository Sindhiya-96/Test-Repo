import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from 'react-router-dom';

function Interest(){
    return (<>

<Navbar bg="white" expand="lg" className="others_nav">
      <Container fluid>
      <Navbar.Brand  className="brand-style me-auto"><NavLink to='/'>BAIDYA SAHA</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto others_navlink ">
            <Nav.Link className=" navbar1_link fs-5"><NavLink to='/' className='fs-5 text-decoration-none text-secondary'>Home</NavLink></Nav.Link>
            
            <NavDropdown title="Teaching" id="basic-nav-dropdown3" className="navbar1_link fs-5 ">
              <NavDropdown.Item className='fs-5'><NavLink to='/philosophy'  className='fs-5 text-decoration-none text-secondary'>Philosophy</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/pgcourses'  className='fs-5 text-decoration-none text-secondary'>PG Courses</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/ugcourses'  className='fs-5 text-decoration-none text-secondary'>UG Courses</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/supervision'  className='fs-5 text-decoration-none text-secondary'>Supervision</NavLink></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research Highlights" id="basic-nav-dropdown3" className="navbar1_link fs-5 ">
              <NavDropdown.Item className='fs-5'><NavLink to='/interest'  className='fs-5 text-decoration-none text-secondary'>Interests</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fs-5'><NavLink to='/blog'  className='fs-5 text-decoration-none text-secondary'>Publications</NavLink></NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link className="hover-shadow navbar1_link fs-5"><NavLink to='/admin'  className='fs-5 text-decoration-none text-secondary'>Administration</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5 "><NavLink to='/awards'  className='fs-5 text-decoration-none text-secondary'>Awards</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5 "><NavLink to='/others'  className='fs-5 text-decoration-none text-secondary'>Others</NavLink></Nav.Link>
            <Nav.Link className="hover-shadow navbar1_link fs-5"><NavLink to='/contact'  className='fs-5 text-decoration-none text-secondary'>Contact Us</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
{/*----------------------------------------------Interest Navbar ends-------------------------------------------*/}

<Container fluid className="bg-dark h-50 py-5 border-bottom border-5">
 <Container className="py-5 ">
        <Card className="py-4 px-4 border-0 rounded-0"> 
        <Card.Text className="text-center text-uppercase fs-1 fw-bolder py-4 text-white bg-dark text-decoration-underline"> Research Interest</Card.Text>
        </Card>
        </Container> 
</Container>

{/*----------------------------------------------Interest title ends--------------------------------------------*/}

<Card.Text className="mx-auto text-center text-decoration-underline mt-5 text-uppercase fs-3 py-4 fw-bold w-75">Highlights of my research achievements</Card.Text>
<Card className="w-75 mx-auto rounded-0 border border-1 border-info interest_abtc1 mb-5 ">
    <Card.Body>
    <ListGroup variant="flush interest_about">
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary ">Recently awarded prestigious Discovery grant for five years (2020-2025) and a launch supplement grant as an
                      early career researcher</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Received Grant on ???Machine Learning based Rapid Self-Assessment and Understanding of COVID-19 Disease
                      Progression to Support Public Policy Decisions funded by Concordia University of Edmonton</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Successfully completed prestigioius Basic Science research fund, awarded by Conacyt, Mexico titled ???Potential
                      Association between imaging phenotypes and genomic biomarkers for diagnosis of cancer??? as an early career researcher</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Developed Bounding Box algorithm for brain tumor localization which are well received by Imaging Community</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Developed various algorithms to tackle different complex medical imaging problems such as optimal sequence
                      selection for deformable registration,white matter lesion segmentation from MRI, leukocyte segmentation and
                      tracking, pulmonary disease detection from proton MRI and Myocardial Border Tracking from Cardiac MRI</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Published articles in prestigious venues such as MICCAI, ACCV, ECML, Pattern Recognition, and American
                      Journal of Neuroradiology, and Pattern Recognition</ListGroup.Item>
      <ListGroup.Item className="py-3 mx-4 interest_pt fs-5 text-secondary">Our research articles received 510 google scholar citations and 9823 reads in research gates till today. My
                      present h-index, i10-index, and RG score are 9, 9, and 14.15 respectively</ListGroup.Item>
    </ListGroup>
    </Card.Body>
</Card>

{/*----------------------------------------------------Interest About ends-----------------------------------------*/}

<Container fluid className="int_card_bg py-5">
    <Container className='my-5' >
        <Row className="mx-auto w-75">
            <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top border-info border-5   "> 
                <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Machine Learning & AI</Card.Text>
                <Col className='text-center mt-4'><Button  className=" text-center mt-4 btn btn-dark " variant="dark" ><NavLink to='/interestsub' className='fs-5 text-decoration-none text-white'>Learn More</NavLink></Button></Col>
            </Col>
            <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top  border-5  border-info ">
                <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Computer Vision & Image Processing</Card.Text>
                <Col className='text-center mt-4'><Button  className=" text-center btn btn-dark " variant="dark"><NavLink to='/interestsub' className='fs-5 text-decoration-none text-white'>Learn More</NavLink></Button></Col>
            </Col>
            <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top  border-5  border-info">
                <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Natural Language Processing</Card.Text>
                <Col className='text-center mt-4'><Button  className=" text-center btn  btn-dark" variant="dark"><NavLink to='/interestsub' className='fs-5 text-decoration-none text-white'>Learn More</NavLink></Button></Col>
            </Col>
            
        </Row>
        <Row className="mt-5 mx-auto w-75">
        <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top  border-5  border-info">
            <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Industry 4.0</Card.Text>
            <Col className='text-center mt-4'><Button  className=" text-center mt-4 btn  btn-dark " variant="dark"><NavLink to='/interestsub' className='fs-5 text-decoration-none text-white'>Learn More</NavLink></Button></Col>
        </Col>
        <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top  border-5  border-info">
            <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Cognitive Science</Card.Text>
            <Col className='text-center mt-4'><Button  className=" text-center mt-4 btn  btn-dark" variant="dark"><NavLink to='/interestsub' className='fs-5 text-decoration-none text-white'>Learn More</NavLink></Button></Col>
        </Col>
        <Col sm className="bg-white py-4 me-4 mb-3 interest_card border-top  border-5  border-info">
            <Card.Text className='text-center fs-6 fw-bold text-uppercase px-5 py-3'>Multimodal Signal Processing</Card.Text>
            <Col className='text-center mt-4'><Button  className=" text-center btn  btn-dark " variant="dark"><NavLink to='/interestsub' className='fs-5 text-decoration-none text-white'>Learn More</NavLink></Button></Col>
        </Col>
        </Row>
    </Container>
</Container>

{/*----------------------------------------------------Interest topics ends-----------------------------------------*/}
<Card.Footer className="text-center fs-5 bg-white rounded-0 border-top pt-3 pb-2 text-secondary fw-normal others_card">Copyright &copy; 2022</Card.Footer>
    </>);
}

export default Interest;