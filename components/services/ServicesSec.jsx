import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import Title1 from '../Title1';

const ServicesSec = ({image, title, description, coverImage, position}) => {
    return (
        <Con className={position}>
            <ServicesCon>
                <div className='service'>
                    <img src={image} alt="img" />
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Link href={"/service"} className="learn-more">
                        Learn More
                        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                            <path d="M1.5 7L16.5 7M16.5 7L10.875 1M16.5 7L10.875 13" stroke="#00AA59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </ServicesCon>
            <img className="mt-5" src={coverImage} alt="img" />
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;    
    padding: 90px;
    background: rgba(241, 241, 241, 1); 
    display: flex;
    gap: 50px;
    @media (max-width: 1200px) {  
        flex-direction: column-reverse;
        padding: 20px 20px;
        gap: 10px;
    }
    img{
        width: 50%;
        height: auto;
        object-fit: cover;
        @media (max-width: 1200px) {  
            width: 100%;
            margin-top: 30px;
        } 
    }
`

const ServicesCon = styled.div`  
    width: 100%;
    column-gap: 20px;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2,1fr); 
        column-gap: 10px;
        row-gap: 40px;
    } 
    .service{
        width: 100%;
        height: 400px;
        display: flex;
        flex-direction: column;  
        position: relative; 
        padding: 20px;
        @media (max-width: 1200px) {
            height: auto;
            min-height: 233px;
            padding: 10px;
        } 
        .green-bar{
            width: 100%;
            height: 0;
            background: #00AA59; 
            position: absolute;
            bottom: 0;
            left: 0;
            transition: height 0.3s ease;
            @media (max-width: 1200px) {
                display: none;
                width: 57px;
                height: 10px;
            }
        }
         &:hover .green-bar {
            height: 15px;
            @media (max-width: 1200px) {
                height: 0;
            }
        }
        .learn-more {
            color: rgba(82, 82, 82, 1);
            font-family: Manrope;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            cursor: pointer;
            position: relative;
            display: inline-flex;
            align-items: center;
            white-space: nowrap; 
            @media (max-width: 1200px) {
                display: inline-flex;
                padding: 7px 45px;
                justify-content: center;
                align-items: center;  
                border-radius: 5px;
                background: #111;
                color: #FFF;
                font-family: Manrope;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
            .arrow {
                display: none;
                margin-left: 8px;
            }

            &:hover {
                color: rgba(0, 170, 89, 1);
                @media (max-width: 1200px) {
                    color: #FFF;
                }
                .arrow {
                    display: inline;
                    @media (max-width: 1200px) {
                        display: none;
                    }
                }
            }
        }
        img{
            width: 100px;       
            height: 100px;
            margin-bottom: 20px;
            @media (max-width: 1200px) {
                width: 80px;
                height: 80px;
            }
        }
        h3{
            color: #404040;
            font-family: Manjari;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: normal; 
            margin-bottom: 20px;
            @media (max-width: 1200px) {
                font-size: 16px;
            }
        }
        p{
            width: 98%;
            color: #525252;
            font-family: Manrope;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal; 
            margin-bottom: 40px;
            @media (max-width: 1200px) {  
                margin-bottom: 10px;
                font-size: 12px;
                max-width: 250px;
            }
        }
    }
    

`
export default ServicesSec