import React from 'react'
import styled from 'styled-components';
import Title1 from '../Title1';
import { motion } from 'framer-motion';

// ===== Motion variants (clean, premium easing)
const containerVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.12 }
  }
};

const leftImgVariant = {
  hidden: { opacity: 0, x: -40, rotate: -0.5 },
  visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const rightVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const textVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

const btnVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 22, delay: 0.05 } }
};

const ReadyToStart = () => {
  return (
    <Con>
      <motion.div
        className='grey-con'
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div className='left' variants={leftImgVariant}>
          {/* Gentle float is handled in CSS; no mask so image stays crisp */}
          <img className="float" src="/images/reImg.png" alt="img" />
        </motion.div>

        <motion.div className='right' variants={rightVariant}>
          <motion.div variants={textVariant}>
            <Title1
              noBar={true}
              heading={`Ready to Start Your Next Project?`}
              para={`Let's help you bring your vision to life — whether you're building from the ground up, renovating, or expanding. Share your ideas and get a tailored quote, fast and hassle-free.`}
            />
          </motion.div>

          <motion.p className='par' variants={textVariant}>
            Fast. Professional. No obligations.
          </motion.p>

          <motion.div variants={btnVariant}>
            <Btn
              as={motion.button}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 28px rgba(46,49,119,0.35)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 18 }}
            >
              Get a Quote
            </Btn>
          </motion.div>
        </motion.div>
      </motion.div>
    </Con>
  )
}

const Con = styled.section`
  width: 100%;
  background: #fff;
  padding: 20px 90px;
  @media (max-width: 1200px) {   
    padding: 20px;
  } 

  .grey-con {
    width: 100%;
    min-height: 300px;
    border-radius: 12px;
    background: #E5E5E5;
    /* subtle texture + light sweep for premium feel */
    background-image:
      radial-gradient(1200px 300px at -10% 0%, rgba(255,255,255,0.25), transparent 60%);
    padding: 67px;
    display: flex;
    gap: 30px;
    will-change: transform, opacity;
    @media (max-width: 1200px) {   
      padding: 20px;
      flex-direction: column;
    } 
    .left{
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 1200px) {   
        width: 100%; 
      }  
      img{
        width: 100%;
        max-width: 520px;
        height: auto;
        border-radius: 10px;
        filter: drop-shadow(0 8px 24px rgba(0,0,0,0.15));
        transform: translateZ(0); /* GPU */
      }
      /* Gentle float loop (disabled for reduced motion) */
      .float{
        animation: floatY 6s ease-in-out infinite;
      }
      @media (prefers-reduced-motion: reduce){
        .float{ animation: none; }
      }
    }
    .right{
      width: 50%; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      @media (max-width: 1200px) {   
        width: 100%;  
      }
      .par{
        color: #525252;
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 30px;
        @media (max-width: 1200px) {   
          font-size: 14px;
        }
      }
    }
  } 

  @keyframes floatY {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-8px); }
    100% { transform: translateY(0); }
  }
`;

const Btn = styled.button`
  width: 160px;
  height: 60px;
  display: inline-flex;
  justify-content:center;
  align-items:center;
  padding: 12px 24px;  
  border-radius: 10px;
  background: #2E3177;
  border: 1px solid #FFF; 
  color: #FFF;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  cursor:pointer;
  outline:none;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.25s ease;
  /* initial soft glow to draw attention once visible */
  box-shadow: 0 6px 18px rgba(46,49,119,0.25);

  /* Shine sweep on hover */
  &:before{
    content: "";
    position: absolute;
    top: 0;
    left: -140%;
    width: 120%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.45) 50%, rgba(255,255,255,0) 100%);
    transform: skewX(-12deg);
    transition: left .7s ease;
    pointer-events: none;
  }
  &:hover:before{
    left: 140%;
  }

  /* Focus ring for accessibility */
  &:focus-visible{
    outline: 3px solid rgba(46,49,119,0.45);
    outline-offset: 2px;
  }

  @media (max-width: 1200px) {  
    border-radius: 5px;
    height: 40px;
  } 
  @media (min-width: 2000px) { 
    padding: 15px 24px;
  }
`;

export default ReadyToStart
