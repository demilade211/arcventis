import React from 'react'
import styled from 'styled-components';

const Title1 = ({heading,para}) => {
  return (
    <Con>
        <div className='green-bar'></div>
        <div className='r2 flex items-end justify-between lg:items-center'>
            <h1>{heading}</h1>
            <span>See All <img className='' alt="img" src='/images/seeall.svg'/></span>
        </div>
        <p>{para}</p>

    </Con>
  )
}

const Con = styled.header`
    width:100%; 
    margin-bottom:60px;
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
    .r2{
        margin-bottom: 15px;
    }
    h1{
        width: 100%;
        color: #2E3177;
        font-family: Manjari;
        font-size: 44px;
        font-style: normal;
        font-weight: 400;
        line-height: normal; 
        @media (max-width: 1200px) {
            font-size: 22px; 
            width: 100%;
        }
    }
    span{
        white-space: nowrap;
        color: #525252;
        font-family: Manrope;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        display: flex;
        @media (max-width: 1200px) {
            display: inline-flex;
            padding: 7px 16px 7px 17px;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            background: #00AA59;
            color: #FFF;
            font-family: Manrope;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        img{
            margin-left: 10px; 
            @media (max-width: 1200px) {
                display: none;
            }
        }
    }
    p{
        width: 100%;
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

export default Title1