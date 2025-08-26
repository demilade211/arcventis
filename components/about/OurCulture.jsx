import React from 'react'
import styled from 'styled-components';
import Title2 from '../Title2';

const OurCulture = () => {
    return (
        <Con>
            <div className='left'>
                <Title2 first="Our" sec="Culture:" extra="Built on Purpose"/>
            </div>
            <div className='right'>
                <p>At the core of Arcventives is a culture defined by integrity, innovation, and excellence. We believe in empowering our people, putting the client first, and embracing new technologies and methods that make construction smarter and more sustainable.</p>
                <p>Explore how our values guide everything we do, from the boardroom to the job site.</p> 
            </div>
        </Con>
    )
}

const Con = styled.section`  
  width: 100%;  
  display: flex; 
  justify-content: flex-start;
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


export default OurCulture