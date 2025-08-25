import React from 'react'
import styled from 'styled-components';
import Title1 from '../Title1';

const ReadyToStart = () => {
    return (
        <Con>
            <div className='grey-con'>
                <div className='left'>
                    <img src="/images/reImg.png" alt="img" />
                </div>
                <div className='right'> 
                    <Title1 noBar={true} heading={`Ready to Start Your Next Project?`} para={`Let's help you bring your vision to life — whether you're building from the ground up, renovating, or expanding. Share your ideas and get a tailored quote, fast and hassle-free.`}/>
                    <p className='par'>Fast. Professional. No obligations.</p>
                    <Btn>Get a Quote</Btn>
                </div>
            </div>
        </Con>
    )
}

const Con = styled.section`
    width: 100%;
    background: #fff;
    padding: 20px 90px;
    @media (max-width: 1200px) {   
        padding: 20px;
    } 

    .grey-con {
        width: 100%;
        min-height: 300px;
        border-radius: 10px;
        background: #E5E5E5;
        padding: 67px;
        display: flex;
        gap: 30px;
        @media (max-width: 1200px) {   
            padding: 20px;
            flex-direction: column;
        } 
        .left{
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (max-width: 1200px) {   
                width: 100%; 
            }  
        }
        .right{
            width: 50%; 
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media (max-width: 1200px) {   
                width: 100%;  
            }
            .par{
                color: #525252;
                font-family: Manrope;
                font-size: 18px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-bottom: 30px;
                @media (max-width: 1200px) {   
                    font-size: 14px;
                }
            }
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
    background: #2E3177;
    border: 1px solid #FFF; 
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
      border-radius: 5px;
      height: 40px;
  } 
  @media (min-width: 2000px) { 
    padding: 15px 24px;
  }
`;
export default ReadyToStart