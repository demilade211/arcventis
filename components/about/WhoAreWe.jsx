import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';

const WhoAreWe = () => {
  const reduceMotion = useReducedMotion();

  // Variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <Con
      as={motion.section}
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Left image */}
      <motion.div
        className="left"
        variants={reduceMotion ? {} : fadeLeft}
        style={{ willChange: 'transform' }}
      >
        <img className="mt-5" src="/images/about/abImg1.png" alt="Arcventives team at work" />
      </motion.div>

      {/* Right content */}
      <motion.div className="right" variants={staggerContainer}>
        <motion.h1 variants={reduceMotion ? {} : fadeDown}>Who Are We</motion.h1>
        <motion.p variants={reduceMotion ? {} : fadeUp}>
          We are a collective of engineers, architects, project managers, and visionaries working
          together to raise the bar in the construction industry. At Arcventives, we approach each
          project with precision, professionalism, and a deep understanding of our client's goals.
        </motion.p>
        <motion.p variants={reduceMotion ? {} : fadeUp}>
          Our vision is to be a leading force in sustainable and innovative construction—delivering
          solutions that improve lives, transform spaces, and build resilient communities.
        </motion.p>
        <motion.p variants={reduceMotion ? {} : fadeUp}>
          To achieve this, our mission is simple: deliver high-quality construction services through
          expert collaboration, cutting-edge practices, and a commitment to long-term value.
        </motion.p>
        <motion.p variants={reduceMotion ? {} : fadeUp}>
          Every day, we build not just with materials, but with purpose — putting people, process,
          and performance at the center of our operations.
        </motion.p>
      </motion.div>
    </Con>
  );
};

const Con = styled.section`
  width: 100%;
  display: flex;
  background: #fff;
  padding: 90px;
  flex-direction: row-reverse;
  align-items: center;
  gap: 50px;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 20px;
    gap: 0;
  }
  h1 {
    color: #5d5d5d;
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

export default WhoAreWe;
