import React from 'react'
import styled from 'styled-components';

const Title = ({heading,para}) => {
  return (
    <Con>
        <div className='green-bar'></div>
        <div>
            <h1>{heading}</h1>
            {/* <span>See All</span> */}
        </div>
        <p>{para}</p>
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
        width: 80%;
        color: #2E3177;
        font-family: Manjari;
        font-size: 44px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 40px;
        @media (max-width: 1200px) {
            font-size: 22px; 
            width: 100%;
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

export default Title