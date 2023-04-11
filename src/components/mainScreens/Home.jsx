import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import images from '../../utils/images';
import './Home.css';


const Home = () => {

  return (
    <div className='Home'>
      <div className='saparator'>
        <img src='src/assets/narendra_modi-removebg-preview.png' alt='' srcset='' />
      </div>
      <div className='saparator2'>
        <div>
          <img src='src/assets/AshokStamb.png' alt='' />
        </div>
        <motion.div className='CompanyName' animate={{ x: 10 }}>
          <h1>NATIONAL FOOD SECURITY PORTAL</h1>
          <h3>Department of Food and Public Distribution Govt. of India</h3>
        </motion.div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default Home;
