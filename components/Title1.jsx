import React from 'react'
import styled from 'styled-components';

const Title1 = ({ heading, para, to, dark=false,noBar=false }) => {
  return (
    <Con $dark={dark} $noBar={noBar}>
      {!noBar&&<div className='green-bar'></div>}
      <div className='r2 flex items-end justify-between lg:items-center'>
        <h1>{heading}</h1>
        {to && (
          <span>
            See All {dark ?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M4.5 12.5H19.5M19.5 12.5L13.875 6.5M19.5 12.5L13.875 18.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              :
              <img alt="img" src='/images/seeall.svg' />
            }
          </span>
        )}
      </div>
      <p>{para}</p>
    </Con>
  )
}

const Con = styled.header`
  width: 100%;
  margin-bottom: ${({ $noBar }) => ($noBar ? '20px' : '60px')};

  .green-bar {
    width: 98px;
    height: 15px;
    background: ${({ $dark }) => ($dark ? '#FFF' : '#00AA59')}; /* ✅ white if dark */
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      width: 57px;
      height: 10px;
    }
  }

  .r2 {
    margin-bottom: 15px;
  }

  h1 {
    width: 100%;
    color: ${({ $dark }) => ($dark ? '#FFF' : '#2E3177')}; /* ✅ white if dark */
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

  span {
    white-space: nowrap;
    color: ${({ $dark }) => ($dark ? '#FFF' : '#525252')}; /* ✅ white if dark */
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
      background: ${({ $dark }) => ($dark ? '#FFF' : '#00AA59')};
      color: ${({ $dark }) => ($dark ? '#000' : '#FFF')}; /* ✅ inverted text if dark */
      font-family: Manrope;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    img {
      margin-left: 10px;
      @media (max-width: 1200px) {
        display: none;
      }
    }
    svg{
      margin-left: 10px;
      @media (max-width: 1200px) {
        display: none;
      }
    }
  }

  p {
    width: 100%;
    color: ${({ $dark }) => ($dark ? '#FFF' : '#525252')}; /* ✅ white if dark */
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

export default Title1;
