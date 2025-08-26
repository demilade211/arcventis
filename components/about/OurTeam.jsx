import React from 'react'
import styled from 'styled-components';

const OurTeam = () => {
    return (
        <Con>
            <div className='left'>
                <div className='pagination-con flex justify-end'>
                    <div>
                        <img className="mt-5" src="/images/about/nxtp.svg" alt="img" />
                    </div>
                </div>
                <div className='pics-con'>
                    <div className='col'>
                        <img className="mb-4" src="/images/about/abImg3.png" alt="img" />
                        <h2 className='name'>Ajayi Adedayo</h2>
                        <p className='role'>President & founder <br /> of Arcventives LTD</p>
                        <p className='action'>View Profile</p>
                    </div>
                    <div className='col'>
                        <img className="mb-4" src="/images/about/abImg4.png" alt="img" />
                        <h2 className='name'>Ajayi Adedayo</h2>
                        <p className='role'>President & founder <br /> of Arcventives LTD</p>
                        <p className='action'>View Profile</p>
                    </div>
                    <div className='col'>
                        <img className="mb-4" src="/images/about/abImg5.png" alt="img" />
                        <h2 className='name'>Ajayi Adedayo</h2>
                        <p className='role'>President & founder <br /> of Arcventives LTD</p>
                        <p className='action'>View Profile</p>
                    </div>

                </div>
            </div>
            <div className='right'>
                <h1>Our Team</h1>
                <p>At Arcventives Ltd, our strength lies in the collective expertise, passion, and professionalism of our team. From seasoned engineers and visionary architects to efficient project managers and skilled field operatives, every member plays a vital role in shaping the quality we're known for. We believe that great construction begins with great people. Our team is built on collaboration, trust, and a shared commitment to delivering results that go beyond expectations.</p>
                <p>Together, we bring ideas to life, solve complex challenges, and ensure that every project stands as a testament to our dedication and integrity.</p>
            </div>
        </Con>
    )
}

const Con = styled.section`  
  width: 100%;  
  display: flex; 
  background: #FFF;
  padding: 90px; 
  align-items: center;
  gap: 50px;
  flex-direction: row-reverse;
  @media (max-width: 1200px) {   
    flex-direction: column-reverse; 
    padding: 20px;
    gap: 0;
  }
  h1{
    color: #5D5D5D;
    font-family: Manjari;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
    @media (max-width: 1200px) {   
        font-size: 22px;
    }
  }
  p{
    color: #525252;
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
    @media (max-width: 1200px) {   
        font-size: 14px; 
    }
  }
  .left{
    width: 50%;
    @media (max-width: 1200px) {   
        width: 100%; 
        margin-bottom:20px;
    }
    .pagination-con{ 
        margin-bottom: 30px;
    }
    .pics-con{
        display: flex;
        justify-content: flex-end;
        gap: 30px;
        @media (max-width: 1200px) {   
            gap: 10px;
        }
        .col{
            .name{
                color: #111;
                font-family: Manjari;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                margin-bottom: 20px;
                @media (max-width: 1200px) {   
                    font-size: 14px; 
                }
            }
            .role{
                color: #525252;
                font-family: Manrope;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-bottom: 20px;
                @media (max-width: 1200px) {   
                    font-size: 12px; 
                }
            }
            .action{
                color: #525252;
                font-family: Manrope;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                @media (max-width: 1200px) {   
                    font-size: 12px;
                }
            }
        }
    }
  }
    .right{
        width: 50%; 
        @media (max-width: 1200px) {   
            width: 100%; 
            
        }
    }
`;

export default OurTeam