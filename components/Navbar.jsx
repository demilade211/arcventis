'use client'

import React, { useState } from "react";
import styled from 'styled-components';
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'
import Router from "next/router"
import Quote from "./modals/Quote";
import Contact from "./modals/Contact";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [showModal, setShowModal] = useState({
        contact: false,
        quote: false,
    });
    const router = useRouter();
    const pathname = usePathname()

    const isActive = route => pathname === route;
    return (
        <LandingNavbarCon>
            <Contact mOpen={showModal.contact} handleModClose={() => setShowModal(prev => ({ ...prev, contact: false }))} />
            <Quote mOpen={showModal.quote} handleModClose={() => setShowModal(prev => ({ ...prev, quote: false }))} />
            <Bottom>
                <div className="w-[127px]" onClick={() => router.push(`/`)}> 
                    <img className="" src="/images/logo1.png" alt="img" />
                </div>
                <nav>
                    <ul>
                        <li onClick={() => router.push(`/`)}>{isActive("/") && <div className="line"></div>}Home</li>
                        <li onClick={() => router.push(`/about`)}>{isActive("/about") && <div className="line"></div>}About us</li>
                        <li onClick={() => router.push(`/services`)}>{isActive("/services") && <div className="line"></div>}Services</li>
                        <li onClick={() => router.push(`/all-projects`)}>{isActive("/all-projects") && <div className="line"></div>}Projects</li>
                        <li onClick={() => {
                            setShowModal(prev => ({ ...prev, contact: true }))
                            setShowNav(false)
                        }
                        } className="contact">
                            {isActive("/contact") && <div className="line"></div>}Contact Us
                        </li>

                        <li className="last" onClick={() => {
                            setShowModal(prev => ({ ...prev, quote: true }))
                            setShowNav(false)
                        }}>Request a Quote </li>
                    </ul>
                </nav>
                <div className='mobile-right'>
                    <img src="/images/ham.svg" alt="img" onClick={() => setShowNav(!showNav)} />
                </div>
                <div className={`mobile-nav ${showNav && "active"}`}>
                    <div className="close" onClick={() => setShowNav(false)} >
                        <svg onClick={() => setShowNav(!showNav)} xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                            <path d="M9.49998 9.5L15.0416 15.0417M9.49998 9.5L3.95831 3.95833M9.49998 9.5L3.95831 15.0417M9.49998 9.5L15.0416 3.95833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <ul>
                        <li onClick={() => router.push(`/`)}>Home</li>
                        <li onClick={() => router.push(`/about`)}>About us</li>
                        <li onClick={() => router.push(`/services`)}>Services</li>
                        <li onClick={() => router.push(`/all-projects`)}>Projects</li>
                        <li onClick={
                            () => {
                                setShowModal(prev => ({ ...prev, contact: true }))
                                setShowNav(false)
                            }
                        }>Contact Us</li>
                        <li onClick={() => {
                            setShowModal(prev => ({ ...prev, quote: true }))
                            setShowNav(false)
                        }}>Request a Quote</li>
                    </ul>
                </div>
            </Bottom>
        </LandingNavbarCon>
    )
}

const LandingNavbarCon = styled.header`
    width:100%;   
    background: #111;
`;



const Bottom = styled.div`
    width:100%;   
    height: 100%;
    padding: 15px 80px; 
    display: flex;
    justify-content: space-between;
    align-items: center;   
    @media (max-width: 1200px) { 
        padding: 20px 30px; 
    }
    .logo{ 
        cursor: pointer;
        @media (max-width: 600px) { 
            width: 131px; 
        }
    }
    nav{
        @media (max-width: 1200px) { 
            display:none; 
        }
        ul{
            display: flex;
            align-items: center;
            li{
                display: flex;
                align-items: center;
                list-style-type:none;
                margin:0 40px;
                color: #FFF;
                font-family: Manrope;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                cursor: pointer;
                position: relative;
                @media (max-width: 1360px) {  
                    margin:0 20px;
                }
                &:hover {  
                    color: #FFF; /* Remove background color on hover */  
                    transition: 200ms ease-in;
                } 
                .line{
                    width: 10px;
                    height: 13px; 
                    background: #00AA59; 
                    margin-right: 5px;
                }
                
            }
            .last{
                display: inline-flex;
                height: 60px;
                padding: 20px;
                justify-content: center;
                align-items: center;
                border-radius: 10px;
                border: 1px solid #FFF;
                margin-left: 100px;
            } 
        }
    }
    .mobile-right{
        display:none;
        img{
            margin-left:30px;
        }
        @media (max-width: 1200px) { 
            display:flex;
            align-items:center; 
        }
    }
    .mobile-nav{ 
        position: fixed; /* use fixed to cover viewport regardless of parent */
        top: 0;
        right: 0;
        width: 70%;
        height: 100vh;
        display: block;
        border: 0.5px solid rgba(255, 255, 255, 0.04);
        background: #FFF; 
        opacity: 0; 
        transition: 400ms ease-in-out;
        transform: translateX(100%); /* start hidden off-screen */
        z-index: 9999;

        &.active {
            transform: translateX(0); /* slide in */
            opacity: 1;
        }

        .close{
            display:flex;
            justify-content:flex-end;
            align-items:center; 
            background: #00AA59;
            padding: 17px 28px 18px 28px;
        }
        ul{
            li{
                padding: 21px 20px 20px 21px;
                border-bottom: 1px solid #F2F2F2;
                text-align:left;
                list-style-type:none; 
                color: #696969;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
            .contact{
                border-radius: 10px;
                border: 1px solid #F58634;
                padding: 20px 40px;
            }
        }
        @media (max-width: 1200px) { 
            display:block;  
        }
    }
`;

const NavButton = styled.button` 
    width: 172px;
    height: 44px;   
    padding: 10px 24px;
    border-radius: 4px;
    border:none;
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%); 
    line-height: normal;
    margin-left:30px; 
    color: #FFF;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400; 
    cursor:pointer;
    &:hover {
        background: none; /* Remove background color on hover */
        border: 2px solid #9A39FF; /* Add border on hover */
        color: #FFF; /* Text color on hover */
      }
    @media (max-width: 1200px) { 
        margin-left:0px;  
    }
`;

export default Navbar