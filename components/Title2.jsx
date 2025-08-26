import React from 'react'
import styled from 'styled-components';

const Title2 = ({first,sec,extra}) => {
  return (
    <Con>
        <div className='green-bar'></div>
        <div>
            <h1>{first} <span>{sec}</span> {extra}</h1> 
        </div> 
    </Con>
  )
}

const Con = styled.header`
    width:100%; 
    margin-bottom:30px;
    .green-bar{
        width: 98px;
        height: 15px;
        background: #00AA59;
        margin-bottom: 20px;
        @media (max-width: 1200px) {
            width: 57px;
            height: 10px;
        }
    } 
    h1{ 
        color: #5D5D5D;
        font-family: Manjari;
        font-size: 44px;
        font-style: normal;
        font-weight: 100;
        line-height: normal;
        margin-bottom: 40px;
        @media (max-width: 1200px) {
            font-size: 22px; 
            width: 100%;
        }
        span{
            color: #00AA59;
            font-family: Manjari;
            font-size: 44px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            @media (max-width: 1200px) {
                font-size: 22px;  
            }
        }
    }
    p{
        width: 80%;
        color: #525252;
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        @media (max-width: 1200px) {
            font-size: 14px; 
            width: 100%;
        }
    }
`;

export default Title2