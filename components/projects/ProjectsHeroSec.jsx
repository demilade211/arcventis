import React from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'

const ProjectsHeroSec = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Con>
      <Top>
        <p className='sub cursor-pointer'>
          <span onClick={() => router.push(`/`)}>{"Home > "}</span> <span onClick={() => router.push(`/services`)}>{"Services >> "}</span> {"Architectural Design >>> "} <span className='text-[#00AA59]'> Dreamview Estate</span>
        </p>
        <h1 className='mb-8'>RESIDENTIAL PROJECTS</h1>
      </Top>
      <Bottom>
        <img className="mt-5 object-center" src="/images/projects/proimg.png" alt="img" />
      </Bottom>

      <div className='abs-rec'></div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;
  height: 80vh;  
  background: #111;
  position: relative;
  overflow: visible;
  @media (max-width: 1200px) {  
    height: auto;
  }
  .btns{
    padding: 0 30px;
  }
  .abs-rec{
    width: 50%;
    height: 75px;
    background: #00AA59;
    position: absolute;
    bottom: -60px;
    left: 60%;
    z-index: 1;
    @media (max-width: 1200px) { 
      height: 45px; 
      bottom: 0;
    }
  }
`;

const Top = styled.div`   
    width: 100%; 
    padding-left :80px;  
    padding-top:80px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    @media (max-width: 1200px) { 
        padding: 30px;
    } 
    h1{
        color: #FFF;
        font-family: var(--font-phosphate-inline);
        font-size: 58px;
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

const Bottom = styled.div` 
  max-width: 95%;
  /* width: 100%;  */
  height: 100%;
  background: url('/images/pages/home/bg.svg');
  background-position: center center; 
  background-repeat: no-repeat;
  background-size: cover;  
  padding: 100px 50px;
  position: relative;
  overflow: hidden;
  z-index: 30;
  @media (max-width: 1200px) { 
    /* height: 50vh; */
    padding: 30px;  
  }
  @media (max-width: 380px) {  
    background: url('/images/pages/home/mbg.svg');  
  }
  img{
    width: 100%;
    height: 100%;
    margin-top: -25px; 
    margin-left: 15px;
    z-index: 30;
    @media (max-width: 1200px) { 
      margin-top: 0;
      margin-left: 0; 
    }
  }
`;

export default ProjectsHeroSec