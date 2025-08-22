import React from 'react'
import styled from 'styled-components';
import Title1 from '../Title1';

const Projects = () => {
    return (
        <Con>
            <Title1
                to="/projects"
                heading="Our Projects"
                para="Explore what we've been building across sectors. From elegant residential homes to large-scale commercial and infrastructure projects, here's a glimpse into the craftsmanship and innovation behind our recent work."
                dark
            />
            <div className='row2'>
                <div className='col'>
                    <img src="/images/projects/proImg1.png" alt="img" />
                    <div className='green-con'>
                        <h1>Residential</h1>
                        <p>Elegant homes designed for comfort, beauty, and long-term value.</p>
                        <div className='view'>View All</div>
                    </div>
                </div>
                <div className='col'>
                    <img src="/images/projects/proImg2.png" alt="img" />
                    <div className='green-con'>
                        <h1>Residential</h1>
                        <p>Elegant homes designed for comfort, beauty, and long-term value.</p>
                        <div className='view'>View All</div>
                    </div>
                </div>
                <div className='col'>
                    <img src="/images/projects/proImg3.png" alt="img" />
                    <div className='green-con'>
                        <h1>Residential</h1>
                        <p>Elegant homes designed for comfort, beauty, and long-term value.</p>
                        <div className='view'>View All</div>
                    </div>
                </div>
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;    
    padding: 90px;
    background: #111;
    @media (max-width: 1200px) {  
        flex-direction: column-reverse;
        padding: 20px 20px;
    } 
    .row2{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 20px;
        row-gap: 80px;
        @media (max-width: 1200px) {
            grid-template-columns: repeat(2,1fr); 
            column-gap: 10px;
            row-gap: 10px;
        } 
        .col{
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
    }
`
export default Projects
