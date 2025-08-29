import React from 'react'
import styled from 'styled-components';

const WhoAreWe = () => {
  return (
    <Con>
        <div className='left'> 
            <img className="mt-5" src="/images/about/abImg1.png" alt="img" />
        </div>
        <div className='right'>
            <h1>Who Are We</h1>
            <p>We are a collective of engineers, architects, project managers, and visionaries working together to raise the bar in the construction industry. At Arcventives, we approach each project with precision, professionalism, and a deep understanding of our client's goals.</p>
            <p>Our vision is to be a leading force in sustainable and innovative construction—delivering solutions that improve lives, transform spaces, and build resilient communities.</p>
            <p>To achieve this, our mission is simple: deliver high-quality construction services through expert collaboration, cutting-edge practices, and a commitment to long-term value.</p>
            <p>Every day, we build not just with materials, but with purpose — putting people, process, and performance at the center of our operations.</p>
        </div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;  
  display: flex; 
  background: #FFF;
  padding: 90px;
  flex-direction: row-reverse;
  align-items: center;
  gap: 50px;
  @media (max-width: 1200px) {   
    flex-direction: column; 
    padding: 20px;
    gap: 0;
  }
  h1{
    color: #5D5D5D;
    font-family: Manjari;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
    @media (max-width: 1200px) {   
        font-size: 22px;
    }
  }
  p{
    color: #525252;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
    @media (max-width: 1200px) {   
        font-size: 14px; 
    }
  }
  .left{
    width: 50%;
    @media (max-width: 1200px) {   
        width: 100%; 
        margin-bottom:20px;
    }
  }
    .right{
        width: 50%; 
        @media (max-width: 1200px) {   
            width: 100%; 
            
        }
    }
`;

export default WhoAreWe