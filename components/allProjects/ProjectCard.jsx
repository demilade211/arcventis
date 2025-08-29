import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';

const ProjectCard = ({image, title, description}) => {
    return (
        <Con>
            <div className='col'>
                <img src={image} alt="img" />
                <div className='green-con'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Link href={"/products"} className='view'>View All</Link>
                </div>
            </div>
        </Con>
    )
}

const Con = styled.section`

    max-width: 463px;
    max-height: 688px; 
    .col{
        width: 100%;
        border-radius: 10px;
        background: #FFF;
        position: relative;
        overflow: hidden;

        img{
            width: 100%;
            border-radius: 10px; 
        }

        .green-con{
            width: 100%; 
            position: absolute;
            z-index: 4;
            bottom: 0;
            background: #00AA59;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius:10px;
            padding: 30px 40px;
            transition: all 0.3s ease;

            /* Desktop default: hidden */
            opacity: 0;
            visibility: hidden;

            @media (max-width: 1200px) {
                /* Mobile/tablet: always visible */
                opacity: 1;
                visibility: visible; 
                border-radius: 0 0 10px 10px;
                padding: 10px 10px;
                
            }

            h1{
                color: #FFF;
                font-family: Manjari;
                font-size: 30px;
                font-weight: 700;
                margin-bottom: 20px;
                @media (max-width: 1200px) {
                    font-size: 16px; 
                    margin-bottom: 10px;
                }
            }
            p{
                color: #FFF;
                font-family: Manrope;
                font-size: 18px;
                font-weight: 200;
                margin-bottom: 20px;
                @media (max-width: 1200px) {
                    font-size: 12px; 
                    margin-bottom: 10px;
                }
            }
            .view{
                display: inline-flex;
                padding: 7px 16px;
                justify-content: center;
                align-items: center;
                border-radius: 5px;
                background: #FFF;
                color: #000;  
                font-family: Manrope;
                font-size: 12px;
                font-weight: 400;
            }
        }

        /* Hover show effect on desktop */
        &:hover .green-con {
            opacity: 1;
            visibility: visible;
        }
    }
`
export default ProjectCard
