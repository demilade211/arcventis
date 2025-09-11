'use client'

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import Quote from '../modals/Quote';

const AboutHeroSec = () => {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/images/abhero.png",
    "/images/about/abheroa.png",
    "/images/about/abherob.png",
    "/images/about/abheroc.png",
    "/images/about/abherod.png"
  ];

  const [showModal, setShowModal] = useState({
    contact: false,
    quote: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // 3s interval like HeroSec
    return () => clearInterval(interval);
  }, [images.length]);

  // Variants
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <Con>
      <Quote mOpen={showModal.quote} handleModClose={() => setShowModal(prev => ({ ...prev, quote: false }))} />

      {/* LEFT SIDE */}
      <Left
        as={motion.div}
        initial={reduceMotion ? 'visible' : 'hidden'}
        animate="visible"
      >
        <motion.h1
          className="mb-8"
          variants={reduceMotion ? {} : fadeLeft}
          style={{ willChange: 'transform' }}
        >
          Building More Than <br /> Structures We Build Legacies.
        </motion.h1>

        <motion.p
          className="sub"
          variants={reduceMotion ? {} : fadeUp}
          style={{ willChange: 'transform' }}
        >
          At Arcventives Ltd, construction goes beyond concrete. It's about shaping communities,
          solving real-world challenges, and creating structures that stand the test of time.
        </motion.p>

        <motion.div
          className="xl:flex items-center gap-2.5 hidden"
          variants={reduceMotion ? {} : fadeUp}
        >
          <MotionBtn
            onClick={() => setShowModal(prev => ({ ...prev, quote: true }))}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Request a Quote
          </MotionBtn>
          <MotionBtn
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(`/all-projects`)}
          >
            View our projects
          </MotionBtn>
        </motion.div>


      </Left>
      <div className="btns w-full lg:hidden mt-5 flex flex-col items-center">
        <MotionGBtn
          onClick={() => setShowModal(prev => ({ ...prev, quote: true }))}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Request a Quote
        </MotionGBtn>
      </div>
      {/* RIGHT SIDE WITH SLIDE-IN */}
      <Right>
        <SlideImg
          key={currentIndex} // re-mount triggers animation
          src={images[currentIndex]}
          alt="about hero"
        />
      </Right>

      <div className="green-rec"></div>
      <div className="white-rec"></div>
    </Con>
  );
};

/* STYLES */
const Con = styled.section`
  width: 100%;
  display: flex;
  background: url('/images/abg.png') center/cover no-repeat;
  flex-direction: row-reverse;
  padding: 90px;
  position: relative;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: auto;
    background: url('/images/mabhero.png') center/cover no-repeat;
    padding: 30px 20px;
  }
  .btns {
    padding: 0 30px;
  }
  .green-rec {
    width: 50%;
    height: 100px;
    position: absolute;
    bottom: 50px;
    left: 30px;
    background: #00aa59;
    z-index: 5;
    @media (max-width: 1200px) {
      height: 50px;
      bottom: 25px;
    }
  }
  .white-rec {
    width: 50%;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    @media (max-width: 1200px) {
      height: 50px;
    }
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 30px;
  }
  h1 {
    color: #fff;
    font-family: var(--font-phosphate-inline);
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
    white-space: nowrap;
    @media (max-width: 1200px) {
      font-size: 30px;
      white-space: normal;
    }
  }
  .sub {
    width: 90%;
    color: #fff;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      width: 100%;
      font-size: 12px;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 80px;
  padding-bottom: 80px;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 30px;
  }
`;

const SlideImg = styled.img`
  width: 97%;
  height: auto;
  min-height: 400px;
  margin-left: 15px;
  margin-top: 20px;
  animation: slideIn 0.6s ease forwards;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1200px) {
    margin: 0;
    width: 100%;
    min-height: auto;
  }
`;

const Btn = styled.button`
  width: 160px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #fff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms ease-in-out;
  @media (max-width: 1200px) {
    width: 100%;
    border-radius: 5px;
    height: 50px;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const MotionBtn = motion(Btn);
const MotionGBtn = motion(styled(Btn)`
  width: 100%;
  background: #00aa59;
  border: none;
  margin-bottom: 10px;
`);

export default AboutHeroSec;
