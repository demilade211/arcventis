import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useRouter, usePathname } from 'next/navigation'
import Quote from '../modals/Quote';

// Rotating images
const images = [
  "/images/projects/proimg4.png",
  "/images/projects/proimg4a.png",
  "/images/projects/proimg4b.png",
  "/images/projects/proimg4c.png",
  "/images/projects/proimg4d.png"
];

const AllProjectsHeroSec = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [showModal, setShowModal] = React.useState({
    contact: false,
    quote: false,
  });

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(inputValue.trim());
    }, 500);
    return () => clearTimeout(handler);
  }, [inputValue]);

  // Auto-change image every 5s
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
        <h1 className='mb-8'>A Legacy Built, <br />One Project at a Time</h1>
        <p className='sub'>
          Explore a curated showcase of our completed and ongoing projects — each one a reflection of our craftsmanship,
          commitment, and client satisfaction across diverse sectors.
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
      <div className="btns w-full lg:hidden mt-5 flex flex-col items-center border-amber-700">
          <GBtn onClick={() => setShowModal(prev => ({ ...prev, quote: true }))}>
            Request a Quote
          </GBtn>
        </div>

      <Right>
        <div className='rec'></div>
        <SlideImg
          key={currentIndex}
          src={images[currentIndex]}
          alt="project"
        />
      </Right>

      <div className='abs-rec flex items-end'>
        <div>
          <Search>
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.0002 21L16.6572 16.657M16.6572 16.657C17.4001 15.9141 17.9894 15.0322 18.3914 14.0616C18.7935 13.0909 19.0004 12.0506 19.0004 11C19.0004 9.94942 18.7935 8.90911 18.3914 7.93848C17.9894 6.96785 17.4001 6.08591 16.6572 5.34302C15.9143 4.60014 15.0324 4.01084 14.0618 3.6088C13.0911 3.20675 12.0508 2.99982 11.0002 2.99982C9.9496 2.99982 8.90929 3.20675 7.93866 3.6088C6.96803 4.01084 6.08609 4.60014 5.34321 5.34302C3.84288 6.84335 3 8.87824 3 11C3 13.1218 3.84288 15.1567 5.34321 16.657C6.84354 18.1574 8.87842 19.0002 11.0002 19.0002C13.122 19.0002 15.1569 18.1574 16.6572 16.657Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search..."
            />
          </Search>
        </div>
      </div>
    </Con>
  )
}

/* 🔹 Animation */
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
  margin-top: -28px; 
  margin-left: 15px;
  animation: ${slideIn} 0.6s ease forwards;

  @media (max-width: 1200px) { 
    margin-top: 0;
    margin-left: 0; 
  }
`;

const Con = styled.section`  
  width: 100%;
  height: 100%;  
  display: flex;
  background: #111;
  position: relative;
  background: url('/images/sabg1.png') center/cover no-repeat;
  @media (max-width: 1200px) {  
    flex-direction: column;
    height: auto;
    background: url('/images/mhbag.png');
  }
  .btns{
    padding: 0 30px;
  }
  .abs-rec{
    width: 50%;
    height: 120px;
    background: #111;
    position: absolute;
    bottom: -100px;
    left: 15%;
    z-index: 1; 
    padding: 10px;
    padding-left: 30px;
    margin-bottom: 20px;
    @media (max-width: 1200px) { 
      width:30%;
      height: 45px; 
      bottom: 0;
      left: 0;
    }
  }
`;

const Search = styled.div`  
  display: flex;
  align-items: center;
  min-width: 41px;  
  padding: 18px 28px 18px 20px;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #FFF;
  background: none; 
  cursor: pointer; 
  @media (max-width: 1200px) { 
    display: none;
  }
  input{
    width:100%;
    background:none;
    border:none;
    outline:none;   
    color: #FFF;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &::placeholder{
      color: #FFF;
      opacity: 1;
      font-family: Manrope;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const Left = styled.div`   
    width: 50%;   
    padding-left:200px;  
    padding-top:80px;
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
            font-size: 30px;
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
  width: 50%; 
  height: 100%; 
  display:flex; 
  flex-direction: column;
  background: url('/images/pages/home/bg.svg') center/cover no-repeat;
  padding: 100px 50px;
  position: relative;
  @media (max-width: 1200px) { 
    width:100%; 
    padding: 30px;  
  }
  @media (max-width: 380px) {  
    background: url('/images/pages/home/mbg.svg') center/cover no-repeat;  
  }
  .rec{
    width: 90%;
    height: 100px;
    background: #00AA59;
    position: absolute;
    bottom: -30px;
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

export default AllProjectsHeroSec
