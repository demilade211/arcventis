'use client'

import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <Con>
            <FirstRow>
                <div className='first'>
                    <div className='mb-10'><img src="/images/components/flogo.png" alt="img" /></div>
                    <div className='mb-10'>
                        <p>Get it on</p>
                        <div><img src="/images/components/fps.png" alt="img" /></div>
                    </div>
                    <div className='mb-10'>
                        <p>Available on the</p>
                        <div><img src="/images/components/fas.png" alt="img" /></div>
                    </div>
                </div>
                <div className='second'>
                    <h4>COMPANY</h4>
                    <p> About Us </p>
                    <p>Ambassadors</p>
                    <p>Acceptable Use Policy</p>
                    <p>Referral Policy</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>FAQ</p>
                </div>
                <div className='third'>
                    <h4>NEED HELP?</h4>
                    <p>Support@Tippifynow.com</p>

                    <h4 className='mt-10'>NEED HELP?</h4>
                    <div className='soc-con flex items-center mb-4'> 
                        <img  src="/images/components/insta.svg" alt="img" />
                        <p className='ml-3'>Instagram</p>
                    </div>
                    <div className='soc-con flex items-center mb-4'> 
                        <img  src="/images/components/x.svg" alt="img" />
                        <p className='ml-3'>Twitter</p>
                    </div>
                    <div className='soc-con flex items-center mb-4'> 
                        <img  src="/images/components/tele.svg" alt="img" />
                        <p className='ml-3'>Telegram</p>
                    </div>
                </div>
                <div className='third'>
                    <h4>LOCATIONS</h4>
                    <p>12, Bakare Crescent, Akiode <br/> Ojodu Berger. Lagos</p>
                </div>
            </FirstRow>
            {/* <ThirdRow>
                <p>Copyright © {currentYear} <span>TPL Trinitypact Limited</span></p>
            </ThirdRow> */}
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;      
    padding: 80px 70px 40px 70px;
    background:#030304;;  
    display: flex;
    flex-direction:column;
    align-items:center;
    @media (max-width: 600px) { 
        padding: 50px 10px;
    }
    p{ 
        color: #FFF;
        font-family: "Big Shoulders Display";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 2.5px;
        margin-bottom:20px;
        white-space:nowrap;
        @media (max-width: 1200px) { 
            text-align: center;
            font-size: 14px;
        }
    }
`;

const FirstRow = styled.div`  
    width: 99%;    
    display: flex; 
    justify-content:space-between;  
    margin-bottom:30px;
    @media (max-width: 1200px) { 
        justify-content: center;
        align-items:center;
        flex-direction: column;
    }
    @media (min-width: 1400px) {  
        width: 70%;
    }
    .first{     
        margin-bottom:40px; 
        @media (max-width: 1200px) { 
            display: flex;
            flex-direction:column;
            align-items: center;
            width: 100%;
            img{
                height: 40px;
            }  
        } 
        h4{
            color: #FFF;
            font-family: "Big Shoulders Display";
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            margin-bottom:20px;
            @media (max-width: 1200px) { 
                text-align: center;
                font-size: 14px;
            }
        }
        
    }
    .second{  
        display:flex;
        flex-direction:column; 
        margin-bottom:40px;
        @media (max-width: 1200px) { 
            align-items: center;
        }
        h4{
            color: #FFF;
            font-family: "Big Shoulders Display";
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            margin-bottom:20px;
            @media (max-width: 1200px) { 
                text-align: center;
                font-size: 14px;
            }
        } 
    }
    .third{  
        display:flex;
        flex-direction:column; 
        margin-bottom:40px;
        @media (max-width: 1200px) { 
            align-items: center;
        }
        h4{
            color: #FFF;
            font-family: "Big Shoulders Display";
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: 2.5px;
            text-transform: uppercase;
            margin-bottom:20px;
            @media (max-width: 1200px) { 
                text-align: center;
                font-size: 14px;
            }
        }
        .soc-con{
            p{
                margin-bottom:0;
            }
        }
        
    }
    
`;

const ThirdRow = styled.div`  
    width: 100%;     
    display:flex;
    justify-content:center;   
    p{
        text-align:center;
        span{
            color: #F58634;
        }
    }
`;

const VerticalDivider = styled.section`  
  width: 2px;
  height: 19px;
  background: #D434FE; 
  margin:0 15px;
`;

export default Footer