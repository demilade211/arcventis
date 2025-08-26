import React from 'react'
import styled from 'styled-components';

const Legacy = () => {
    return (
        <Con>
            <div className='left'>
                <img className="mt-5" src="/images/about/abimg2.png" alt="img" />
            </div>
            <div className='right'>
                <h1>A Legacy of Trust and Impact</h1>
                <p>Over the years, Arcventives Ltd has earned its place as a trusted partner in the construction space. Our portfolio is a testament to our consistent delivery, our client relationships, and our commitment to raising standards.</p>
                <p>We measure success not just in buildings completed, but in the lives improved, partnerships built, and footprints left behind in the cities and communities we've helped shape.</p>
            </div>
        </Con>
    )
}

const Con = styled.section`  
  width: 100%;  
  display: flex; 
  background: #FFF;
  padding: 90px; 
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
export default Legacy