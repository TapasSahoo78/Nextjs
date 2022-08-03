import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';

function Header() {
    return (
        <Navbar bg="success" expand="lg">
            <Container fluid>
                <Link href="/">
                    <Navbar.Brand >
                        <Image src='svg-2.svg' alt='no img' height={50} width={45} />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link href="/" passHref>
                            <Nav.Link className='mynavtext'><strong>Home</strong></Nav.Link>
                        </Link>


                        {/* <Link href="/contact">
                            <Nav.Link as="a" href="/contact">
                                Contact
                            </Nav.Link>
                        </Link>

                        <Link href="/about">
                            <Nav.Link as="a" href="/about">
                               About
                            </Nav.Link>
                        </Link> */}

                        <NavDropdown title="Blog" id="navbarScrollingDropdown" className="fw-bold mynavtext">
                            <Link href="/post" passHref>
                                <NavDropdown.Item className='mynavtext1'><strong>Blog1</strong></NavDropdown.Item>
                            </Link>
                            <Link href="/post" passHref>
                                <NavDropdown.Item className='mynavtext1'>
                                    <strong> Blog2 </strong>
                                </NavDropdown.Item>
                            </Link>

                            <NavDropdown.Divider />
                            <Link href="/post" passHref>
                                <NavDropdown.Item className='mynavtext1'>
                                    <strong> Blog3 </strong>
                                </NavDropdown.Item>
                            </Link>
                        </NavDropdown>

                        <Link href="/post" passHref>
                            <Nav.Link className='mynavtext'>
                                <strong>Link</strong>
                            </Nav.Link>
                        </Link>
                        <Link href="/about" passHref>
                            <Nav.Link className='mynavtext'><strong>About</strong></Nav.Link>
                        </Link>

                        <Link href="/contact" passHref>
                            <Nav.Link className='mynavtext'><strong>Contact</strong></Nav.Link>
                        </Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="primary w-25">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header;