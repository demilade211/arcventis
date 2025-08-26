import React from 'react'
import styled from 'styled-components';
import Title2 from '../Title2';

const AboutArc = () => {
  return (
    <Con>
        <div className='left'>
            <Title2 first="About" sec="Arcventives" />
        </div>
        <div className='right'>
            <p>Founded with a passion for purposeful building, Arcventives Ltd is a Nigerian-based construction company committed to delivering high-quality, sustainable, and impactful projects.</p>
            <p>From modern homes and commercial hubs to large-scale infrastructure, we combine industry knowledge with forward-thinking solutions to bring our clients' visions to life.</p>
            <p>Our journey has been marked by integrity, precision, and a drive to exceed expectations at every turn.</p>
        </div>
    </Con>
  )
}

const Con = styled.section`  
  width: 100%;  
  display: flex; 
  background: #FFF;
  padding: 90px;
  @media (max-width: 1200px) {   
    flex-direction: column; 
    padding: 20px;
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
    }
  }
    .right{
        width: 50%; 
        @media (max-width: 1200px) {   
            width: 100%;  
        }
    }
`;

export default AboutArc