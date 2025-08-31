'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../Title'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

// === Variants for reusable animations ===
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay }
  })
}

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const TracingFootprints = () => {
  return (
    <Con>
      {/* Left side: Images */}
      <motion.div
        className='left'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='pics'>
          <div className='top'>
            <motion.div variants={fadeUp} custom={0.1}>
              <img src="/images/s3img1.png" alt="img" />
            </motion.div>
            <motion.div variants={fadeUp} custom={0.3}>
              <img src="/images/s3img2.png" alt="img" />
            </motion.div>
          </div>
          <div className='bottom'>
            <motion.div variants={fadeUp} custom={0.5}>
              <img src="/images/s3img3.png" alt="img" />
            </motion.div>
            <motion.div variants={fadeUp} custom={0.7}>
              <img src="/images/s3img4.png" alt="img" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Right side: Text + Numbers */}
      <div className='right'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeRight}
        >
          <Title
            heading="Tracing Our Footprints in the Built Environment"
            para="Over the years, we've partnered with visionary clients and delivered outstanding results across residential, commercial, and industrial projects. Here's a look at what we've built—and the impact we continue to make."
          />
        </motion.div>

        <motion.div
          className='num-con'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div className='col' variants={fadeUp} custom={0.2}>
            <h2><CountUp end={1000} duration={2} />+</h2>
            <p>Satisfied Clients <br />& Companies</p>
          </motion.div>

          <motion.div className='col' variants={fadeUp} custom={0.4}>
            <h2><CountUp end={95} duration={2} />%</h2>
            <p>We stand with 99%<br /> success rate</p>
          </motion.div>

          <motion.div className='col' variants={fadeUp} custom={0.6}>
            <h2><CountUp end={100} duration={2} />+</h2>
            <p>Projects completed<br /> Successfully</p>
          </motion.div>
        </motion.div>
      </div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;    
  padding: 20px 40px;
  background: #FFFFFF;
  display: flex;
  @media (max-width: 1200px) {  
    flex-direction: column-reverse;
    padding: 20px 20px;
  } 
  .left{   
    width: 50%; 
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .pics{
      width: 90%;
      .top, .bottom{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px; 
        margin-bottom: 10px;
      }
    }
  }
  .right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      width: 100%;
      padding: 0 10px; 
    }
    .num-con{
      width: 100%;
      display: flex; 
      align-items: center; 
      margin-top: 20px;
      .col{ 
        display: flex;
        flex-direction: column; 
        margin-right: 40px;
        @media (max-width: 1200px) {
          margin-right: 20px; 
        }
        h2{
          color: #2E3177;
          font-family: Manjari;
          font-size: 44px;
          font-weight: 700;
          @media (max-width: 1200px) {
            font-size: 20px;  
          }
        }
        p{
          color: #525252;
          font-family: Manrope;
          font-size: 18px;
          font-weight: 500;
          @media (max-width: 1200px) {
            font-size: 12px;  
          }
          @media (max-width: 400px) {
            font-size: 10px;  
          }
        }
      }
    }
  }
`

export default TracingFootprints
