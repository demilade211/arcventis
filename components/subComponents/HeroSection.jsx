'use client'

import React from 'react'
import styled from 'styled-components';
import Router from "next/router"
import { useRouter, usePathname } from 'next/navigation'

const HeroSection = () => {
  const router = useRouter();
  const pathname = usePathname();

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
        <img className="mt-5" src="/images/himg1.png" alt="img" />
      </Right>
      <div className="btns w-full lg:hidden mt-5 flex flex-col items-center">
        <GBtn>Request a Quote </GBtn>
        <Btn onClick={() => router.push(`/all-projects`)}>View our projects</Btn>
      </div>

    </Con>
  )
}

const Con = styled.section`  
  width: 100%;  
  display: flex;
  background: #111;
  @media (max-width: 1200px) {  
    flex-direction: column;
    height: auto;
  }
  .btns{
    padding: 0 30px;
  }
`;

const Left = styled.div`   
    width: 60%;   
    padding-left :80px;  
    padding-top:80px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    @media (max-width: 1200px) { 
        width: 100%;
        padding: 30px;
    } 
    h1{
        color: #FFF;
        font-family: var(--font-phosphate-inline);
        font-size: 70px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        @media (max-width: 1200px) { 
            font-size: 30px;
        }
    }
    .sub{
        width: 90%;
        color: #FFF;
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 20px;
        @media (max-width: 1200px) { 
            width: 100%;
            font-size: 12px;
        }
    } 
`;

const Right = styled.div`  
  width: 40%; 
  height: 100%; 
  display:flex; 
  flex-direction: column;
  background: url('/images/pages/home/bg.svg');
  background-position: center center; 
  background-repeat: no-repeat;
  background-size: cover;  
  padding: 100px 50px;
  @media (max-width: 1200px) { 
    width:100%; 
    padding: 30px;  
  }
  @media (max-width: 380px) {  
    background: url('/images/pages/home/mbg.svg');  
  }
  .rec{
    width: 97%;
    height: 93px;
    background: #00AA59;
  }
  img{
    width: 97%;
    height: auto;
    margin-top: -78px; 
    margin-left: 15px;
  }
`;

const Btn = styled.button`
    width: 160px;
    height: 60px;
    padding: 20px;
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 12px 24px;  
    border-radius: 10px;
    border: 1px solid #FFF;
    line-height: normal; 
    color: #FFF;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
    cursor:pointer;
    outline:none;
  @media (max-width: 1200px) { 
      width: 100%; 
      border-radius: 5px;
      height: 50px;
  } 
  @media (min-width: 2000px) { 
    padding: 15px 24px;
  }
`;

const GBtn = styled(Btn)`  
    width: 100%;
    background: #00AA59;
    border: none;
    margin-bottom: 10px;
`;

export default HeroSection