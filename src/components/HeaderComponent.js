import React, { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand, NavItem, Collapse, Nav, NavbarToggler, Button,
 Modal, ModalBody, ModalHeader, FormGroup, Form, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom'; 

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false, 
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav() {
        this.setState(
            {isNavOpen: !this.state.isNavOpen}
        )
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event) {
        this.toggleModal();
        alert("User: " + this.username.value + " Password: " + this.password.value 
        + " Checked: " + this.remember.checked );
        event.preventDefault();
    }

    render() {

        return(
        <React.Fragment>
            <Navbar white expand ='md'>
                <div className = "container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className='mr-auto' href="/">
                        <img src='assets/images/logo.png' height='30' width = '41' alt='Ristorance Con Fusion' />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/home'>
                                <span className='fa fa-home fa-lg'></span> Home
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className='nav-link' to='/todo'>
                                <span className='fa fa-info fa-lg'></span> Todo
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className='nav-link' to='/menu'>
                                <span className='fa fa-list fa-lg'></span> Menu
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className='nav-link' to='/contactus'>
                            <span className='fa fa-address-card fa-lg'></span> Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className='ml-auto' navbar> 
                        <NavItem>
                            <Button outline onClick={this.toggleModal}>
                                <span className='fa fa-sign-in'></span> Login
                            </Button>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className = 'col-12 col-sm-6'>
                            <h1>Things to do</h1>
                            <p>First todo app</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            {/* Modal */}
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor='username'>User Name</Label>
                            <Input type='text' id='username' name='username' 
                                innerRef={input => this.username = input}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='password'>Password</Label>
                            <Input type='password' id='password' name='password' 
                                innerRef={input => this.password = input}
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type='checkbox' name='remember'
                                innerRef = {input => this.remember = input} />
                                Remember
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Button type='submit' value='submit' color='primary'>Login</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
        )

    }
}
export default Header;