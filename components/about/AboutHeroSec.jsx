import React from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'

const AboutHeroSec = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Con>
      <Left>
        <h1 className='mb-8'>Building More Than <br /> Structures  We Build Legacies.</h1>
        <p className='sub'>
          At Arcventives Ltd, construction goes beyond concrete. It's about shaping communities,
          solving real-world challenges, and creating structures that stand the test of time.
        </p>
        <div className="xl:flex items-center gap-2.5 hidden ">
          <Btn>Request a Quote </Btn>
          <Btn onClick={() => router.push(`/all-projects`)}>View our projects</Btn>
        </div>
        <div className="btns w-full lg:hidden mt-5 flex flex-col items-center">
          <GBtn>Request a Quote </GBtn> 
        </div>
      </Left>
      <Right>
        <img className="mt-5" src="/images/abhero.png" alt="img" />
      </Right>
      <div className='green-rec'></div>
      <div className='white-rec'></div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;  
  display: flex;
  background: #111;
  flex-direction: row-reverse;
  background: url('/images/abg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  
  padding: 90px;
  position: relative;
  @media (max-width: 1200px) {  
    flex-direction: column;
    height: auto;
    background: url('/images/mabhero.png');
    padding: 30px 20px;
  }
  .btns{
    padding: 0 30px;
  }
  .green-rec{
    width: 50%;
    height: 100px;
    position: absolute;
    bottom: 50px;
    left: 30px;
    background: #00AA59;
    z-index: 5;
    @media (max-width: 1200px) {  
      height: 50px;
      bottom: 25px;

    }
  }
  .white-rec{
    width: 50%;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #FFF;
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
    h1{
        color: #FFF;
        font-family: var(--font-phosphate-inline);
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        white-space: nowrap;
        @media (max-width: 1200px) { 
            font-size: 30px;
            white-space: normal;
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
  width: 50%; 
  height: 100%; 
  display:flex; 
  flex-direction: column;  
  justify-content: center; 
  padding-right: 80px;  
  padding-bottom: 80px;
  @media (max-width: 1200px) { 
    width:100%; 
    padding: 30px;   
  }
  @media (max-width: 380px) {   
  }
  .rec{
    width: 97%;
    height: 93px;
    background: #00AA59;
  }
  img{
    width: 97%;
    height: auto; 
    margin-left: 15px;
    @media (max-width: 1200px) { 
      margin-top: 0px; 
      margin-left: 0px;
      width: 100%;
    }
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

export default AboutHeroSec