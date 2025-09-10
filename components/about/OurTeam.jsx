import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  { img: '/images/about/abImg3.png', name: 'Ajayi Adedayo', role: 'President & founder of Arcventives LTD' },
  { img: '/images/about/abImg4.png', name: 'John Doe', role: 'Lead Engineer' },
  { img: '/images/about/abImg5.png', name: 'Jane Smith', role: 'Architect' },
  { img: '/images/about/abImg3.png', name: 'David Johnson', role: 'Project Manager' },
  { img: '/images/about/abImg4.png', name: 'Emily Davis', role: 'Field Operative' },
  { img: '/images/about/abImg5.png', name: 'Michael Brown', role: 'Technician' },
];

const ITEMS_PER_PAGE = 3;

const OurTeam = () => {
  const reduceMotion = useReducedMotion();
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0);

  const totalPages = Math.ceil(teamMembers.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setDirection(-1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setDirection(1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = teamMembers.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.6, ease: 'easeIn' },
    }),
  };

  return (
    <Con
      as={motion.section}
      initial={reduceMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left */}
      <motion.div className="left">
        <div className="pagination-con flex justify-end">
          <div className="pag flex items-center gap-4">
            <img
              onClick={handlePrev}
              src="/images/about/prevp.svg"
              alt="Previous slide"
              style={{
                opacity: currentPage === 1 ? 0.3 : 1,
                pointerEvents: currentPage === 1 ? 'none' : 'auto',
              }}
            />
            <p>{currentPage}/{totalPages}</p>
            <img
              onClick={handleNext}
              src="/images/about/nxtp.svg"
              alt="Next slide"
              style={{
                opacity: currentPage === totalPages ? 0.3 : 1,
                pointerEvents: currentPage === totalPages ? 'none' : 'auto',
              }}
            />
          </div>
        </div>


        <div className="pics-con">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentPage} // 👈 force re-mount when page changes
              className="flex gap-6" // keeps 3 in a row
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {currentItems.map((member, idx) => (
                <div key={idx} className="col">
                  <img className="mb-4" src={member.img} alt={`Team member ${idx + 1}`} />
                  <h2 className="name">{member.name}</h2>
                  <p className="role">{member.role}</p>
                  <motion.p
                    className="action"
                    whileHover={{ color: '#00AA59' }}
                    transition={{ duration: 0.3 }}
                  >
                    View Profile
                  </motion.p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </motion.div>

      {/* Right */}
      <motion.div className="right">
        <motion.h1>Our Team</motion.h1>
        <motion.p>
          At Arcventives Ltd, our strength lies in the collective expertise, passion, and
          professionalism of our team...
        </motion.p>
        <motion.p>
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
      p{
        color: #525252;
        font-family: Manrope;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 0;
      }
      .pag{
        img{
          cursor: pointer;
          width: 71px;
          height: 71px;
          @media (max-width: 1200px) {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
    .pics-con {

      display: flex;
      justify-content: flex-end;
      gap: 30px;
      @media (max-width: 1200px) {
        gap: 10px;
      }
      .col {
        max-width: 300px;
        cursor: pointer;
        transition: transform 0.3s ease;
        @media (max-width: 1200px) {
          max-width: 100px;
        }
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
          width: 200px;
          color: #525252;
          font-family: Manrope, sans-serif;
          font-size: 16px;
          font-weight: 400;
          margin-bottom: 20px;
          @media (max-width: 1200px) {
            width: 100px;
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
