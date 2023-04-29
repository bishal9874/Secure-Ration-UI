import { color } from 'framer-motion';
import React , { useRef }from 'react'
import { useNavigate  } from 'react-router-dom';
import {FaBars , FaTimes } from "react-icons/fa"
import { getToken , removeToken} from '../../services/localStorage';
import Login from '../mainScreens/AuthScreens/Login';
import "./navbar.css"
import { Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { unSetUsertoken } from '../../features/authSlice';
const Navber = () => {
	const {access_token} = getToken()
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const navigate = useNavigate()
	const dispatch =useDispatch()
	const handleLogout = () => {
	  dispatch(unSetUsertoken({access_token:null}))
	  removeToken()
	  navigate('/login')
	}
	return (
		<header>
			<img className='logo_image' src="src/assets/lol.png"/>
			<h2><span className='logo-text'>Secure</span>-Ration</h2>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Services</a>
				<a href="/#">Contact</a>
				{access_token ? <> <a href="/dashboard">Dashboard</a> <Button  color='warning' size='large' onClick={handleLogout} sx={{ mt: 0.3 }}>Logout</Button> </> : 
				<> 
				<a href="/login">Log in</a>
				<a href="/Signup">KYC Sign Up</a>  
				 </>
				
				}
				
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