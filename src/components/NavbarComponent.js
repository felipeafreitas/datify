import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";
import "./NavbarComponent.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavbarComponent() {
  return (
    <header>
      <Navbar
        style={{ background: "#0CCA4A" , width: '100vw', maxWidth: '1200px' }}
        className="navbar-outer p-3 container "
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="mr-2 d-inline-block align-top"
          />
          <strong>Datify</strong>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="https://github.com/sincopeiro/datify">
              View on Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

// {/* <nav className='navbar fixed-top navbar-expand-lg navbar-light pt-4 container'>
// 	<div className='container-fluid'>
// 		<a className='navbar-brand' href='/'>
// 			<img
// 				src={logo}
// 				alt=''
// 				width='30'
// 				height='24'
// 				className='mr-2 d-inline-block align-top'
// 			/>
// 			<strong>Datify</strong>
// 		</a>
// 		<div className='sticky-top'>
// 			<button
// 				className='navbar-toggler'
// 				type='button'
// 				data-toggle='collapse'
// 				data-target='#navbarSupportedContent'
// 				aria-controls='navbarSupportedContent'
// 				aria-expanded='false'
// 				aria-label='Toggle navigation'
// 			>
// 				<span className='navbar-toggler-icon'></span>
// 			</button>

// 			<div
// 				className='collapse navbar-collapse'
// 				id='navbarSupportedContent'
// 			>
// 				<ul className='navbar-nav mr-auto'>
// 					<li className='nav-item'>
// 						<a className='nav-link' href='#'>
// 							About
// 						</a>
// 					</li>
// 					<li className='nav-item'>
// 						<a className='nav-link' href='#'>
// 							Contact Us
// 						</a>
// 					</li>
// 					<a
// 						href='https://github.com/sincopeiro/datify'
// 						className='btn btn-secondary'
// 						type='button'
// 					>
// 						View on Github
// 					</a>
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// </nav> */}
