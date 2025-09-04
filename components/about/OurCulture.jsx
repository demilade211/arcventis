import React from 'react'
import styled from 'styled-components';
import Title2 from '../Title2';
import { motion, useReducedMotion } from 'framer-motion';

const OurCulture = () => {
  const reduceMotion = useReducedMotion();

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <Con
      as={motion.section}
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <motion.div className="left" variants={reduceMotion ? {} : fadeLeft}>
        <Title2 first="Our" sec="Culture:" extra="Built on Purpose" />
      </motion.div>

      <motion.div className="right" variants={stagger}>
        <motion.p variants={reduceMotion ? {} : fadeRight}>
          At the core of Arcventives is a culture defined by integrity, innovation, and excellence. We believe in empowering our people, putting the client first, and embracing new technologies and methods that make construction smarter and more sustainable.
        </motion.p>
        <motion.p variants={reduceMotion ? {} : fadeRight}>
          Explore how our values guide everything we do, from the boardroom to the job site.
        </motion.p>
      </motion.div>
    </Con>
  );
};

const Con = styled.section`  
  width: 100%;  
  display: flex; 
  justify-content: flex-start;
  background: #FFF;
  padding: 90px;
  @media (max-width: 1200px) {   
    flex-direction: column; 
    padding: 20px;
  }
  p {
    color: #525252;
    font-family: Manrope, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 30px;
    @media (max-width: 1200px) {   
      font-size: 14px; 
    }
  }
  .left {
    width: 50%;
    @media (max-width: 1200px) {   
      width: 100%; 
    }
  }
  .right {
    width: 50%; 
    @media (max-width: 1200px) {   
      width: 100%;  
    }
  }
`;

export default OurCulture;
