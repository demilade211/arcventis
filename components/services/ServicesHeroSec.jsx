import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import Quote from '../modals/Quote';

// List of rotating images
const images = [
  "/images/simg.png",
  "/images/services/simga.png",
  "/images/services/simgb.png",
  "/images/services/simgc.png",
  "/images/services/simgd.png",
];

const ServiceHeroSec = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [showModal, setShowModal] = React.useState({
    contact: false,
    quote: false,
  });

  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Auto-slide every 5s
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Con>
      <Quote
        mOpen={showModal.quote}
        handleModClose={() =>
          setShowModal(prev => ({ ...prev, quote: false }))
        }
      />

      <Left>
        <h1 className='mb-8'>Built to Deliver. <br />Designed to Last.</h1>
        <p className='sub'>
          We deliver end-to-end construction solutions — from design to execution — across residential, commercial, industrial, and public sectors.
          Every service is handled with precision, professionalism, and a focus on lasting value.
        </p>
        <div className="xl:flex items-center gap-2.5 hidden ">
          <Btn onClick={() => setShowModal(prev => ({ ...prev, quote: true }))}>
            Request a Quote
          </Btn>
          <Btn onClick={() => router.push(`/all-projects`)}>
            View our projects
          </Btn>
        </div> 
      </Left>
      <div className="btns w-full lg:hidden mt-5 flex ">
        <GBtn onClick={() => setShowModal(prev => ({ ...prev, quote: true }))}>
          Request a Quote
        </GBtn>
      </div>
      <Right>
        <div className='rec'></div>
        <SlideImg
          key={currentIndex} // 🔑 forces re-mount so animation replays
          src={images[currentIndex]}
          alt="service"
        />
      </Right>

      <div className='abs-rec'></div>
    </Con>
  )
}

/* 🔹 Animations */
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SlideImg = styled.img`
  width: 100%;
  height: auto;
  min-height: 400px;
  margin-top: -40px; 
  margin-left: 15px;
  animation: ${slideIn} 0.6s ease forwards;

  @media (max-width: 1200px) { 
    margin-top: 0;
    margin-left: 0; 
    min-height: auto;
  }
`;

/* 🔹 Layout + Styles */
const Con = styled.section`  
  width: 100%; 
  display: flex;
  background: #111;
  position: relative;
  background: url('/images/sabg1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;  
  @media (max-width: 1200px) {  
    flex-direction: column;
    height: auto;
    background: #111;
    background: url('/images/mhbag.png');
  } 
  .btns{
    padding: 0 30px;
  }
  .abs-rec{
    width: 50%;
    height: 100px;
    background: #111;
    position: absolute;
    bottom: -60px;
    left: 100px;
    z-index: 1; 
    @media (max-width: 1200px) { 
      width:50%;
      height: 45px; 
      bottom: -30px;
      left: 0;
    }
  }
`;

const Left = styled.div`   
  width: 50%;   
  padding-left:200px;  
  padding-top:80px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  @media (max-width: 1200px) { 
    width: 100%;
    font-size: 48px;
    padding: 30px 0;
    padding-bottom: 0;
    padding-left: 70px;
    padding-right: 50px;
    padding-top: 50px;
    margin-bottom: 60px;
  }
  @media (max-width: 768px) { 
    width: 100%;
    padding: 30px 0;
    padding-bottom: 0;
    padding-left: 60px;
    padding-right: 20px;
    padding-top: 50px;
    margin-bottom: 0;
  } 
    h1{
        color: #FFF;
        font-family: var(--font-phosphate-inline);
        font-size: 40px;
        font-weight: 400;
        text-transform: uppercase;
        @media (max-width: 1200px) { 
            font-size: 28px;
        }
    }
    .sub{
        width: 85%;
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
  width: 50%; 
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
    width: 98%;
    height: 100px;
    background: #00AA59;
    position: absolute; 
    bottom: -20px;
    left: -30px;
    z-index: 10;
    @media (max-width: 1200px) { 
      width:50%; 
      height: 50px;  
      top: 95%;
      left: 50%;
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
    border-radius: 10px;
    border: 1px solid #FFF;
    color: #FFF;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    white-space: nowrap;
    cursor:pointer;
    transition: 300ms ease-in-out;
  @media (max-width: 1200px) { 
      width: 100%; 
      border-radius: 5px;
      height: 50px;
  } 
  &:hover{
      transform: scale(1.05);
    }
`;

const GBtn = styled(Btn)`  
    width: 100%;
    background: #00AA59;
    border: none;
    margin-bottom: 10px;
`;

export default ServiceHeroSec
