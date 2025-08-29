import React from 'react'
import styled from 'styled-components';

const Gallery = () => {
    return (
        <Con>
            <div className='top'>
                <div className='flex justify-between items-center mt-20'>
                    <h1>Gallery</h1>
                    <div>
                        <img className="mt-5" src="/images/about/nxtp.svg" alt="img" />
                    </div>
                </div>
            </div>

            <div className="bottom">
                <img className="mt-5" src="/images/product/proimg01.png" alt="img" />
                <img className="mt-5" src="/images/product/proimg02.png" alt="img" />
                <img className="mt-5" src="/images/product/proimg02.png" alt="img" />
            </div>
        </Con>
    )
}

const Con = styled.section`  
  width: 100%;  
  background: #FFFFFF;
  padding: 80px;
  @media (max-width: 1200px) { 
        padding: 30px;
    }
  h1{
    font-size: 35px;
    font-weight: 400;
    font-family: Manjari;
  }
  .bottom{
      display: flex;
      gap: 20px;
      overflow: auto;
      img{
        max-width: 595px;
        max-height: 464px;
        @media (max-width: 1200px) { 
            max-width: 395px;
            max-height: 264px;
        }
      }
  }
`;

export default Gallery