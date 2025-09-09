import React from 'react'
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import Quote from '../modals/Quote';

const AllProjectsHeroSec = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [showModal, setShowModal] = React.useState({
      contact: false,
      quote: false,
    });

  return (
    <Con>
      <Quote mOpen={showModal.quote} handleModClose={() => setShowModal(prev => ({ ...prev, quote: false }))} />
      <Left>
        <h1 className='mb-8'>A Legacy Built, <br />One Project at a Time</h1>
        <p className='sub'>
          Explore a curated showcase of our completed and ongoing projects each one a reflection of our craftsmanship, commitment, and client satisfaction across diverse sectors.
        </p>
        <div className="xl:flex items-center gap-2.5 hidden ">
          <Btn onClick={() => setShowModal(prev => ({ ...prev, quote: true }))}>Request a Quote </Btn>
          <Btn onClick={() => router.push(`/all-projects`)}>View our projects</Btn>
        </div>

        <div className="btns w-full lg:hidden mt-5 flex flex-col items-center">
          <GBtn onClick={() => setShowModal(prev => ({ ...prev, quote: true }))}>Request a Quote </GBtn>
        </div>
      </Left>
      <Right>
        <div className='rec'></div>
        <img className="mt-5" src="/images/projects/proimg4.png" alt="img" />
      </Right>

      <div className='abs-rec'></div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;
  height: 100%;  
  display: flex;
  background: #111;
  position: relative;
  /* margin-bottom: 50px; */
  @media (max-width: 1200px) {  
    flex-direction: column;
    height: auto;
  }
  .btns{
    padding: 0 30px;
  }
  .abs-rec{
    width: 50%;
    height: 60px;
    background: #111;
    position: absolute;
    bottom: -60px;
    left: 15%;
    z-index: 1;
    @media (max-width: 1200px) { 
      width:30%;
      height: 45px; 
      bottom: 0;
      left: 0;
    }
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
  position: relative;
  @media (max-width: 1200px) { 
    width:100%; 
    padding: 30px;  
  }
  @media (max-width: 380px) {  
    background: url('/images/pages/home/mbg.svg');  
  }
  .rec{
    width: 100%;
    height: 100px;
    background: #00AA59;
    position: absolute;
    top: 350px;
    left: -50px;
    z-index: 10;
    @media (max-width: 1200px) { 
      width:50%; 
      height: 50px;  
      top: 95%;
      left: 50%;
    }
  }
  img{
    width: 100%;
    height: auto;
    margin-top: -78px; 
    margin-left: 15px;
    @media (max-width: 1200px) { 
      margin-top: 0;
      margin-left: 0; 
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

export default AllProjectsHeroSec