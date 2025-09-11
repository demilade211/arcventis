'use client'

import React from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const router = useRouter();

    return (
        <Con>
            <FirstRow>
                <div className=''>
                    <div className="w-[127px] mb-3 cursor-pointer" onClick={() => router.push(`/`)}>
                        <img className="" src="/images/logo1.png" alt="img" />
                    </div>
                    <p>
                        From architectural design to construction execution, Arcventives delivers spaces that stand the test
                        of time—trusted by clients across residential, commercial, and industrial sectors.
                    </p>
                    <div className='flex items-center gap-2'>
                        <a href="https://www.facebook.com/share/1LP5fHveBP/" target="_blank" rel="noopener noreferrer">
                            <img className="cursor-pointer" src="/images/footer/fb.svg" alt="Facebook" />
                        </a>
                        <a href="https://x.com/arcventives?t=CGCnJfDzR_ifz3zle8PSFw&s=09" target="_blank" rel="noopener noreferrer">
                            <img className="cursor-pointer" src="/images/footer/tw.svg" alt="Twitter" />
                        </a>
                        <a href="https://www.instagram.com/arcventives?igsh=OTM1NXU5ZDExaWd0" target="_blank" rel="noopener noreferrer">
                            <img className="cursor-pointer" src="/images/footer/inst.svg" alt="Instagram" />
                        </a>
                        <a href="https://www.linkedin.com/company/arcventives-limited/" target="_blank" rel="noopener noreferrer">
                            <img className="cursor-pointer" src="/images/footer/linIn.svg" alt="LinkedIn" />
                        </a>
                    </div>
                </div>

                <div className='flex items-start gap-12'>
                    <div>
                        <p className='bold'>Contact Us</p>
                        <p className='flex items-center'><img className="mr-2" src="/images/footer/add.svg" alt="address" />350C MCDonald Akano, Omole Phase 1, <br />Ojodu Berger Lagos. Nigeria</p>
                        <p className='flex items-center'><img className="mr-2" src="/images/footer/pho.svg" alt="phone" />+234 802 3080 175, +234 809 8008 157</p>
                        <p className='flex items-center'><img className="mr-3" src="/images/footer/mail.svg" alt="mail" />Info@arcventives</p>
                    </div>
                    <div>
                        <p className='bold'>Quick Links</p>
                        <p className="cursor-pointer" onClick={() => router.push(`/`)}>Home</p>
                        <p className="cursor-pointer" onClick={() => router.push(`/about`)}>About Us</p>
                        <p className="cursor-pointer" onClick={() => router.push(`/services`)}>Services</p>
                        <p className="cursor-pointer" onClick={() => router.push(`/all-projects`)}>Projects</p>
                        {/* <p className="cursor-pointer" onClick={() => router.push(`/contact`)}>Contact Us</p> */}
                    </div>

                </div>

                <div className='hidden lg:block'>
                    <p className='bold'>OUR SERVICES</p>
                    <p>Architectural Design</p>
                    <p>Building Construction</p>
                    <p>ME Installations</p>
                    <p>Renovation & Remodeling</p>
                    <p>Construction Consultancy</p>
                </div>
                <div className='hidden lg:block'>
                    <p className='bold invisible'>cc</p>
                    <p>Structural Engineering</p>
                    <p>Project Management & Supervision</p>
                    <p>Quantity Surveying & Cost Estimation</p>
                    <p>Interior Fit-Out & Finishing</p>
                    <p>Civil & Infrastructure Works</p>
                </div>
            </FirstRow>

            <ThirdRow>
                <p>Copyright © {currentYear} <span>ARCVENTIVES LTD</span></p>
            </ThirdRow>
            <span className='credit'>Designed by <span>HayJay_Jr x Afo x TeeJay</span></span>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;       
    padding: 50px 0;
    background:#030304;  
    display: flex;
    flex-direction:column;
    align-items:center;
    position: relative;
    @media (max-width: 600px) { 
        padding: 50px 10px;
    }
    .credit{
        position: absolute;
        bottom: 20px; 
        color: #FFF;
        font-family: Manrope;
        font-size: 12px;
        font-weight: 300;
        white-space: nowrap;
        span{
            color: #00AA59;
            font-size: 14px;
            font-weight: 700;
        }
    }
    p{ 
        max-width: 363px;
        color: #FFF;
        font-family: Manrope;
        font-size: 14px;
        font-weight: 400;
        margin-bottom:10px; 
        text-align: left;
        @media (max-width: 1200px) {  
            font-size: 12px;
        }
    }
    .bold{
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: uppercase;
    }
    .logo{ 
        cursor: pointer;
        margin-bottom: 20px;
        @media (max-width: 600px) { 
            width: 131px; 
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
        gap: 20px;
    } 
`;

const ThirdRow = styled.div`  
    width: 100%;     
    display:flex;
    justify-content:center;   
    align-items:center;
    background: #00AA59;
    padding: 10px 0;
    p{
        text-align:center;
        color: #111; 
        margin-bottom: 0;
        font-size: 14px;
    }
`;

export default Footer;
