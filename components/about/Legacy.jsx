import React from 'react'
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';

const Legacy = () => {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const fadeScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <Con
      as={motion.section}
      initial={reduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={stagger}
    >
      <motion.div className="left" variants={reduceMotion ? {} : fadeScale}>
        <img className="mt-5" src="/images/about/abImg2.png" alt="img" />
      </motion.div>

      <motion.div className="right" variants={stagger}>
        <motion.h1 variants={reduceMotion ? {} : fadeUp}>
          A Legacy of Trust and Impact
        </motion.h1>
        <motion.p variants={reduceMotion ? {} : fadeUp}>
          Over the years, Arcventives Ltd has earned its place as a trusted partner in the construction space. Our portfolio is a testament to our consistent delivery, our client relationships, and our commitment to raising standards.
        </motion.p>
        <motion.p variants={reduceMotion ? {} : fadeUp}>
          We measure success not just in buildings completed, but in the lives improved, partnerships built, and footprints left behind in the cities and communities we've helped shape.
        </motion.p>
      </motion.div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;  
  display: flex; 
  background: #FFF;
  padding: 90px; 
  align-items: center;
  gap: 50px;
  @media (max-width: 1200px) {   
    flex-direction: column; 
    padding: 20px;
    gap: 0;
  }
  h1 {
    color: #5D5D5D;
    font-family: Manjari, sans-serif;
    font-size: 35px;
    font-weight: 400;
    margin-bottom: 30px;
    @media (max-width: 1200px) {   
      font-size: 22px;
    }
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
      margin-bottom: 20px;
    }
  }
  .right {
    width: 50%; 
    @media (max-width: 1200px) {   
      width: 100%; 
    }
  }
`;

export default Legacy;
