import { color } from 'framer-motion';
import React , { useRef }from 'react'

import {FaBars , FaTimes } from "react-icons/fa"
import Login from '../mainScreens/AuthScreens/Login';
import "./navbar.css"
const Navber = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img className='logo_image' src="src/assets/lol.png"/>
			<h2><span className='logo-text'>Secure</span>-Ration</h2>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Services</a>
				<a href="/#">Contact</a>
				<a href="/login">Log in</a>
				<a href="/Signup">KYC Sign Up</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navber