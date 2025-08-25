'use client'

import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <Con>
            <FirstRow>
                <div className=''>
                    <div className="logo flex items-end" onClick={() => router.push(`/`)}>
                        <div className="bg-amber-50"><img className="w-full h-full" src="/images/logo.svg" alt="img" /></div>
                        <img className="" src="/images/logo-txt.svg" alt="img" />
                    </div>
                    <p>
                        From architectural design to construction execution, Arcventives delivers spaces that stand the test
                        of time—trusted by clients across residential, commercial, and industrial sectors.
                    </p>
                    <div className='flex items-center gap-2'>
                        <img className="cursor-pointer" src="/images/footer/fb.svg" alt="img" />
                        <img className="cursor-pointer" src="/images/footer/tw.svg" alt="img" />
                        <img className="cursor-pointer" src="/images/footer/inst.svg" alt="img" />
                        <img className="cursor-pointer" src="/images/footer/linIn.svg" alt="img" />
                    </div>
                </div>
                <div className='flex items-start gap-12'>
                    <div>
                        <p className='bold'>Contact Us</p>
                        <p className='flex items-center'><img className="mr-2 cursor-pointer" src="/images/footer/add.svg" alt="img" />350C MCDonal Akano, Omole Phase 1, <br />Ojodu Berger Lagos. Nigeria</p>
                        <p className='flex items-center'><img className="mr-2 cursor-pointer" src="/images/footer/pho.svg" alt="img" />+234 802 3080 175, +234 809 8008 157.</p>
                        <p className='flex items-center'><img className="mr-3 cursor-pointer" src="/images/footer/mail.svg" alt="img" />Hello@arcventives.com</p>
                    </div>
                    <div>
                        <p className='bold'>Quick Links</p>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Products</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <p className='bold'>OUR SERVICES</p>
                    <p>Architectural Design</p> 
                    <p>Building Construction</p> 
                    <p>ME  Installations</p> 
                    <p>Renovation & Remodeling</p> 
                    <p>Construction Consultancy</p> 
                </div>
                <div className='hidden lg:block'>
                    <p className='bold invisible'> cc</p> 
                    <p>Structural Engineering</p> 
                    <p>Project Management & Supervision</p> 
                    <p>Quantity Surveying & Cost Estimation</p> 
                    <p>Interior Fit-Out & Finishing</p> 
                    <p>Civil & Infrastructure Works</p>
                </div>

            </FirstRow>
            {/* <ThirdRow>
                <p>Copyright © {currentYear} <span>TPL Trinitypact Limited</span></p>
            </ThirdRow> */}
        </Con >
    )
}

const Con = styled.section`  
    width: 100%;       
    padding: 90px 0;
    background:#030304;;  
    display: flex;
    flex-direction:column;
    align-items:center;
    @media (max-width: 600px) { 
        padding: 50px 10px;
    }
    p{ 
        max-width: 363px;
        color: #FFF;
        font-family: Manrope;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom:10px; 
        text-align: left;
        @media (max-width: 1200px) {  
            font-size: 12px;
        }
    }
    .bold{
        font-weight: 700;
        margin-bottom: 20px;
        white-space: nowrap;
        text-transform: uppercase;
    }
    .logo{ 
        cursor: pointer;
        margin-bottom: 20px;
        @media (max-width: 600px) { 
            width: 131px; 
        }
        div{
            margin-right: 5px;
            padding: 0;
        }
    }
`;

const FirstRow = styled.div`     
    display: flex;  
    align-items: flex-start;
    gap: 50px;
    margin-bottom:30px;
    @media (max-width: 1200px) {  
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
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