import React from 'react'
import styled from 'styled-components';
import Title from '../Title';

const TracingFootprints = () => {
    return (
        <Con>
            <div className='left'>
                <div className='pics'>
                    <div className='top'>
                        <div>
                            <img src="/images/s3img1.png" alt="img" />
                        </div>
                        <div>
                            <img src="/images/s3img2.png" alt="img" />
                        </div>
                    </div>
                    <div className='bottom'>
                        <div>
                            <img src="/images/s3img3.png" alt="img" />
                        </div>
                        <div>
                            <img src="/images/s3img4.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='right'>
                <Title
                    heading="Tracing Our Footprints in the Built Environment"
                    para="Over the years, we've partnered with visionary clients and delivered outstanding results across residential, commercial, and industrial projects. Here's a look at what we've built—and the impact we continue to make."
                />
                <div className='num-con'>
                    <div className='col'>
                        <h2>1000+</h2>
                        <p>Satisfied Clients <br/>& Companies</p>
                    </div>
                    <div className='col'>
                        <h2>95%</h2>
                        <p>We stand with 99%<br/> success rate</p>
                    </div>
                    <div className='col'>
                        <h2>100+</h2>
                        <p>Projects completed<br/> Succesfully</p>
                    </div>
                </div>
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;    
    padding: 20px 40px;
    background: #FFFFFF;
    display: flex;
    @media (max-width: 1200px) {  
        flex-direction: column-reverse;
        padding: 20px 20px;
    } 
    .left{   
        width: 50%; 
        margin-bottom: 20px;
        @media (max-width: 1200px) {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        .pics{
            width: 90%;
            .top{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                margin-bottom: 10px;
                gap: 10px; 
            }
            .bottom{
                width: 100%;
                display: flex; 
                justify-content: center;
                align-items: flex-start;
                gap: 10px;
            }
        }
    }
    .right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        margin-bottom: 20px;
        @media (max-width: 1200px) {
            width: 100%;
            padding: 0 10px; 
        }
        .num-con{
            width: 100%;
            display: flex; 
            align-items: center; 
            .col{ 
                display: flex;
                flex-direction: column; 
                margin-right: 40px;
                @media (max-width: 1200px) {
                    margin-right: 20px; 
                }
                h2{
                    color: #2E3177;
                    font-family: Manjari;
                    font-size: 44px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;
                    @media (max-width: 1200px) {
                        font-size: 20px;  
                    }

                }
                p{
                    color: #525252;
                    font-family: Manrope;
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal; 
                    @media (max-width: 1200px) {
                        font-size: 12px;  
                    }
                    @media (max-width: 400px) {
                        font-size: 10px;  
                    }
                }
            }
        }
    }
  `

export default TracingFootprints