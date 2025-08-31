'use client'

import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'

const HeroSection = () => {
  const router = useRouter();
  const pathname = usePathname();

  const images = ["/images/himg1.png", "/images/himg2.png", "/images/himg3.png", "/images/himg4.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Con>
      <Left>
        <h1 className='mb-8'>Building Tomorrow's <br /> Legacy, Today!</h1>
        <p className='sub'>
          From architectural design to construction execution, Arcventives delivers spaces that stand the test
          of time—trusted by clients across residential, commercial, and industrial sectors. Ready to start your
          next construction project? We are available to provide a Free estimate within 24 hours
        </p>
        <div className="xl:flex items-center gap-2.5 hidden ">
          <Btn>Request a Quote </Btn>
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
    background: none;
  }
  .btns{
    padding: 0 30px;
  }
`;

const Left = styled.div`   
  width: 60%;   
  padding-left: 120px;  
  display: flex;
  flex-direction: column;
  justify-content: center; 
  @media (max-width: 1200px) { 
      width: 100%;
      padding: 30px;
      padding-bottom: 0;
  } 
  h1{
      color: #FFF;
      font-family: var(--font-phosphate-inline);
      font-size: 65px;
      font-weight: 400;
      text-transform: uppercase;
      @media (max-width: 1200px) { 
          font-size: 28px;
      }
  }
  .sub{
      width: 90%;
      color: #FFF;
      font-family: Manrope;
      font-size: 18px;
      font-weight: 400;
      margin-bottom: 20px;
      @media (max-width: 1200px) { 
          width: 100%;
          font-size: 12px;
      }
  } 
`;

const Right = styled.div`  
  width: 40%; 
  display:flex; 
  flex-direction: column;
  background: url('/images/pages/home/bg.svg');
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;  
  padding: 100px 50px;
  padding-top: 30px;
  @media (max-width: 1200px) { 
    width:100%; 
    padding: 30px;  
  }
  @media (max-width: 380px) {  
    background: url('/images/pages/home/mbg.svg');  
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
  height: 500px; 
  margin-top: -78px; 
  margin-left: 15px;
  animation: ${slideIn} 0.5s ease forwards;
  @media (max-width: 1200px) {  
    width: 97%; 
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
