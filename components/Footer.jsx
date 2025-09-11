'use client'

import React, { useState } from 'react'
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const router = useRouter();

    const [hoveredIcon, setHoveredIcon] = useState(null);

    const socialIcons = [
        { name: 'fb', link: 'https://www.facebook.com/share/1LP5fHveBP/', alt: 'Facebook' },
        { name: 'tw', link: 'https://x.com/arcventives?t=CGCnJfDzR_ifz3zle8PSFw&s=09', alt: 'Twitter' },
        { name: 'inst', link: 'https://www.instagram.com/arcventives?igsh=OTM1NXU5ZDExaWd0', alt: 'Instagram' },
        { name: 'linIn', link: 'https://www.linkedin.com/company/arcventives-limited/', alt: 'LinkedIn' },
    ];

    const services = [
        "Architectural Design",
        "Building Construction",
        "Structural Engineering",
        "Renovation & Remodeling",
        "Construction Consultancy",
        "ME Installations",
        "Project Management & Supervision",
        "Quantity Surveying & Cost Estimation",
        "Interior Fit-Out & Finishing",
        "Civil & Infrastructure Works"
    ];

    // Generate slug from service name
    const getSlug = (name) =>
        name.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");

    return (
        <Con>
            <FirstRow>
                <div>
                    <div className="w-[127px] mb-3 cursor-pointer" onClick={() => router.push(`/`)}>
                        <img src="/images/logo1.png" alt="logo" />
                    </div>
                    <p>
                        From architectural design to construction execution, Arcventives delivers spaces that stand the test
                        of time—trusted by clients across residential, commercial, and industrial sectors.
                    </p>
                    <div className='flex items-center gap-2'>
                        {socialIcons.map((icon) => (
                            <a key={icon.name} href={icon.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    className="cursor-pointer"
                                    src={`/images/footer/${hoveredIcon === icon.name ? 'g' + icon.name : icon.name}.svg`}
                                    alt={icon.alt}
                                    onMouseEnter={() => setHoveredIcon(icon.name)}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                />
                            </a>
                        ))}
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
                        <QuickLink onClick={() => router.push(`/`)}>Home</QuickLink>
                        <QuickLink onClick={() => router.push(`/about`)}>About Us</QuickLink>
                        <QuickLink onClick={() => router.push(`/services`)}>Services</QuickLink>
                        <QuickLink onClick={() => router.push(`/all-projects`)}>Projects</QuickLink>
                    </div>
                </div>

                {/* Services split into 2 columns */}
                <div className='hidden lg:block'>
                    <p className='bold'>OUR SERVICES</p>
                    {services.slice(0, 5).map((s, i) => (
                        <ServiceLink
                            key={i}
                            onClick={() => router.push(`/services/${getSlug(s)}`)}
                        >
                            {s}
                        </ServiceLink>
                    ))}
                </div>
                <div className='hidden lg:block'>
                    <p className='bold invisible'>cc</p>
                    {services.slice(5).map((s, i) => (
                        <ServiceLink
                            key={i}
                            onClick={() => router.push(`/services/${s}`)}
                        >
                            {s}
                        </ServiceLink>
                    ))}
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

const QuickLink = styled.p`
    cursor: pointer;
    transition: color 0.3s ease;
    &:hover {
        color: #00AA59;
    }
`;

// Hover effect for service links
const ServiceLink = styled.p`
    cursor: pointer;
    transition: color 0.3s ease, transform 0.2s ease;
    &:hover {
        color: #00AA59;
        transform: translateX(4px);
    }
`;

export default Footer;
