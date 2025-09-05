'use client'

import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import Quote from '../modals/Contact';

const HeroSection = () => {
  const router = useRouter();
  const pathname = usePathname();

  const images = ["/images/himg1.png", "/images/himg2.png", "/images/himg3.png", "/images/himg4.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState({
    contact: false,
    quote: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Con>
      <Quote mOpen={showModal.quote} handleModClose={() => setShowModal(prev => ({ ...prev, quote: false }))} />
      <Left>
        <h1 className=''>Building Tomorrow's <br /> Legacy, Today!</h1>
        <p className='sub'>
          From architectural design to construction execution, Arcventives delivers spaces that stand the test
          of time—trusted by clients across residential, commercial, and industrial sectors. Ready to start your
          next construction project? We are available to provide a Free estimate within 24 hours
        </p>
        <div className="xl:flex items-center gap-2.5 hidden ">
          <Btn onClick={() => setShowModal(prev => ({ ...prev, quote: true }))}>Request a Quote </Btn>
          <Btn onClick={() => router.push(`/all-products`)}>View our projects</Btn>
        </div>
      </Left>
      <Right>
        <div className='rec'></div>
        {/* key ensures re-mount on index change → animation restarts */}
        <SlideImg
          key={currentIndex}
          src={images[currentIndex]}
          alt="hero"
        />
      </Right>
      <div className="btns w-full lg:hidden mt-5 flex flex-col items-center">
        <GBtn>Request a Quote </GBtn>
        <Btn onClick={() => router.push(`/all-projects`)}>View our projects</Btn>
      </div>
    </Con>
  )
}

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Con = styled.section`  
  width: 100%;   
  display: flex;
  background: url('/images/hbag.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  
  @media (max-width: 1200px) {  
    flex-direction: column;
    height: auto;
    background: url('/images/mhbag.png');
    background-size: cover; 
  }
  .btns{
    padding: 0 30px;
  }
`;

const Left = styled.div`   
  width: 60%;   
  padding-left: 130px;  
  display: flex;
  flex-direction: column;
  justify-content: center; 
  @media (max-width: 1360px) { 
    font-size: 48px; 
  }
  @media (max-width: 1200px) { 
    width: 100%;
    font-size: 48px;
    padding: 30px 0;
    padding-bottom: 0;
    padding-left: 100px;
    padding-right: 50px;
    margin-bottom: 60px;
  }
  @media (max-width: 768px) { 
    width: 100%;
    padding: 30px 0;
    padding-bottom: 0;
    padding-left: 50px;
    padding-right: 20px;
    margin-bottom: 0;
  } 
  h1{
      color: #FFF;
      font-family: var(--font-phosphate-inline);
      font-size: 65px;
      font-weight: 400;
      text-transform: uppercase; 
      margin-bottom: 30px;
      @media (max-width: 1360px) { 
          font-size: 48px;
      }
      @media (max-width: 1200px) { 
          font-size: 28px;
          margin-top: 40px;
          margin-bottom: 0;
      }
      @media (max-width: 768px) { 
          font-size: 28px;
          margin-top: 20px;
          margin-bottom: 0;
      }
  }
  .sub{
      width: 87%;
      color: #FFF;
      font-family: Manrope;
      font-size: 18px;
      font-weight: 400; 
      margin-bottom: 20px;
      @media (max-width: 1360px) { 
          font-size: 16px;
      }
      @media (max-width: 1200px) { 
          margin-top: 20px;
          width: 100%;
          font-size: 12px;
          margin-bottom: 0;
      }
  } 
`;

const Right = styled.div`  
  width: 40%; 
  display:flex; 
  flex-direction: column; 
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;  
  padding: 100px 50px;
  padding-top: 30px;
  @media (max-width: 1200px) { 
    width:100%; 
    padding: 30px;  
  } 
  .rec{
    width: 86%;
    height: 93px;
    background: #00AA59;
    @media (max-width: 1200px) {  
        width: 97%; 
    }
  }
`;

const SlideImg = styled.img`
  width: 86%; 
  min-height: 500px;
  margin-top: -78px; 
  margin-left: 15px;
  animation: ${slideIn} 0.5s ease forwards;
  @media (max-width: 1200px) {  
    width: 97%; 
    min-height: 200px;
    height: auto;
  }
`;

const Btn = styled.button`
  width: 160px;
  height: 60px;
  display: flex;
  justify-content:center;
  align-items:center;
  border-radius: 10px;
  border: 1px solid #FFF;
  color: #FFF;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  cursor:pointer;
  @media (max-width: 1200px) { 
      width: 100%; 
      border-radius: 5px;
      height: 50px;
  } 
`;

const GBtn = styled(Btn)`  
  width: 100%;
  background: #00AA59;
  border: none;
  margin-bottom: 10px;
`;

export default HeroSection
