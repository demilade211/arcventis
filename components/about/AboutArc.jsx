import React from 'react';
import styled from 'styled-components';
import Title2 from '../Title2';
import { motion, useReducedMotion } from 'framer-motion';

const AboutArc = () => {
  const reduceMotion = useReducedMotion();

  // Variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <Con>
      <motion.div
        className="left"
        initial={reduceMotion ? { opacity: 1 } : 'hidden'}
        whileInView={reduceMotion ? { opacity: 1 } : 'visible'}
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeLeft}
        style={{ willChange: 'transform' }}
      >
        <Title2 first="About" sec="Arcventives" />
      </motion.div>

      <motion.div
        className="right"
        initial={reduceMotion ? { opacity: 1 } : 'hidden'}
        whileInView={reduceMotion ? { opacity: 1 } : 'visible'}
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeRight}
        style={{ willChange: 'transform' }}
      >
        <p>
          Founded with a passion for purposeful building, Arcventives Ltd is a Nigerian-based
          construction company committed to delivering high-quality, sustainable, and impactful
          projects.
        </p>
        <p>
          From modern homes and commercial hubs to large-scale infrastructure, we combine industry
          knowledge with forward-thinking solutions to bring our clients' visions to life.
        </p>
        <p>
          Our journey has been marked by integrity, precision, and a drive to exceed expectations at
          every turn.
        </p>
      </motion.div>
    </Con>
  );
};

const Con = styled.section`
  width: 100%;
  display: flex;
  background: #fff;
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

export default AboutArc;
