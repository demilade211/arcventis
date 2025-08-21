import React from 'react'
import styled from 'styled-components';

const Trusted = () => {
    return (
        <Con>
            <div className='green-con'>
                <div className='white-bar'></div>
                <div className='text-con'>
                    <p>Trusted by <span>CLIENTS</span>. Powered by <span>EXPERIENCE</span>.
                    </p>
                    <p>Delivered by <span>ENGINEERS</span> who know how to build right.</p>
                </div>
            </div>
        </Con>
    )
}

const Con = styled.section`  
  width: 100%;   
  background: #0B0606; 
  padding: 20px 0;
  @media (max-width: 1200px) {  
     
  } 
  .green-con{
    width: 100%;
    height: 100%;
    display: flex; 
    align-items: center;
    background: #00AA59;
    padding: 23px 0px 23px 144px;
    @media (max-width: 1200px) {
      padding: 23px 27px 22px 28px;
      justify-content: center;
    }
    .white-bar{
        width: 20px;
        height: 117px;
        background: #FFF;
        margin-right: 28px;
        @media (max-width: 1200px) {
            display: none;
        }
    }
    .text-con{ 
        p{
            color: #FFF;
            font-family: Manjari;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;  
            @media (max-width: 1200px) {
                font-size: 14px;
                text-align: center;
            }
            span{
                color: #242020;
                font-family: Manjari;
                font-size: 25px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                @media (max-width: 1200px) {
                    font-size: 14px;
                }
            }
        }
    }
  }
`;

export default Trusted