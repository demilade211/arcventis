import React from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion } from 'framer-motion';

const OurTeam = () => {
  const reduceMotion = useReducedMotion();

  // Variants
  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
      {/* Left */}
      <motion.div className="left" variants={stagger}>
        <motion.div
          className="pagination-con flex justify-end"
          variants={reduceMotion ? {} : fadeUp}
        >
          <img className="mt-5" src="/images/about/nxtp.svg" alt="Next slide" />
        </motion.div>

        <div className="pics-con">
          {['/images/about/abImg3.png', '/images/about/abImg4.png', '/images/about/abImg5.png'].map(
            (src, idx) => (
              <motion.div
                key={idx}
                className="col"
                variants={reduceMotion ? {} : fadeUp}
                whileHover={{
                  y: -8,
                  boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3 },
                }}
                style={{ willChange: 'transform' }}
              >
                <img className="mb-4" src={src} alt={`Team member ${idx + 1}`} />
                <h2 className="name">Ajayi Adedayo</h2>
                <p className="role">
                  President & founder <br /> of Arcventives LTD
                </p>
                <motion.p
                  className="action"
                  whileHover={{ color: '#00AA59' }}
                  transition={{ duration: 0.3 }}
                >
                  View Profile
                </motion.p>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* Right */}
      <motion.div className="right" variants={stagger}>
        <motion.h1 variants={reduceMotion ? {} : fadeRight}>Our Team</motion.h1>
        <motion.p variants={reduceMotion ? {} : fadeRight}>
          At Arcventives Ltd, our strength lies in the collective expertise, passion, and
          professionalism of our team. From seasoned engineers and visionary architects to efficient
          project managers and skilled field operatives, every member plays a vital role in shaping
          the quality we're known for. We believe that great construction begins with great people.
          Our team is built on collaboration, trust, and a shared commitment to delivering results
          that go beyond expectations.
        </motion.p>
        <motion.p variants={reduceMotion ? {} : fadeRight}>
          Together, we bring ideas to life, solve complex challenges, and ensure that every project
          stands as a testament to our dedication and integrity.
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
  align-items: center;
  gap: 50px;
  flex-direction: row-reverse;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
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
    .pagination-con {
      margin-bottom: 30px;
    }
    .pics-con {
      display: flex;
      justify-content: flex-end;
      gap: 30px;
      @media (max-width: 1200px) {
        gap: 10px;
      }
      .col {
        cursor: pointer;
        transition: transform 0.3s ease;
        .name {
          color: #111;
          font-family: Manjari, sans-serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 20px;
          @media (max-width: 1200px) {
            font-size: 14px;
          }
        }
        .role {
          color: #525252;
          font-family: Manrope, sans-serif;
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 20px;
          @media (max-width: 1200px) {
            font-size: 12px;
          }
        }
        .action {
          color: #525252;
          font-family: Manrope, sans-serif;
          font-size: 18px;
          font-weight: 400;
          @media (max-width: 1200px) {
            font-size: 12px;
          }
        }
      }
    }
  }
  .right {
    width: 50%;
    @media (max-width: 1200px) {
      width: 100%;
    }
  }
`;

export default OurTeam;
