import'bootstrap/dist/css/bootstrap.min.css'
import img from'./fpic.jpg'
import img2 from'./spic.jpg'
import img3 from'./tpic.jpg';
import Carousel from'react-bootstrap/Carousel'

import Nav from'react-bootstrap/Nav';
import Navbar from'react-bootstrap/Navbar';


export default function First(){
    return(
        <> <div className="container-fluid row bg-primary">
       <div className="container bg-white d-flex">
            <div  className='row'>
            <div className='col-lg-1'>
                    <h2 className='heading1'><span  className='heading2'>1</span>PAGE</h2>
                </div>
</div>
                <div className='col-lg-5'>&nbsp;</div>
                <div  className='row '>

                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                     <Nav.Link href ="/"className='text-primary'> HOME</Nav.Link>
                                     <Nav.Link href ='/'className='text-primary'> ABOUT US</Nav.Link>
                                     <Nav.Link href ='/'className='text-primary'> OUR SERVICE</Nav.Link>
                                     <Nav.Link href ='/'className='text-primary'> OUR PROTFOLIO</Nav.Link>
                                     <Nav.Link href ='/'className='text-primary'> CONTACT US</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
       <div className='container-fluid '>
       <Carousel>
            <Carousel.Item>
                <img className="d-block w-100"   src={img3}alt="First slide"/>
                    <Carousel.Caption className='caption'>
                        <h3>Game Development</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button className='butpage1 bg-light text-primary'>GET STARTED</button>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "  src={img2} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Game Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                       
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "  src={img} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Game Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                       
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

           </div> 
           </div>
    
        </>
    )
}

