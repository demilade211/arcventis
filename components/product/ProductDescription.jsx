import React from 'react'
import styled from 'styled-components';

const ProductDescription = () => {
    return (
        <Con>
            <Top>
                <h1>Dreamview Estate</h1>
                <p>The Haven Residence is a two-storey luxury residential building situated in the heart of Lekki Phase 1, Lagos. Designed to offer both comfort and elegance, this home blends contemporary architectural lines with high-performance construction detailing.</p>
            </Top>

            <Bottom>
                <p>This 5-bedroom detached duplex features spacious en-suite rooms, two private lounges, a fully fitted kitchen with modern cabinetry, and a pent floor terrace that opens into a serene skyline view. The design prioritizes natural lighting and ventilation, with strategically placed windows, open-plan living areas, and high ceilings enhancing the interior ambiance.
                <br/><br/>
                Externally, the building showcases a minimalist yet bold aesthetic — with textured cladding, concealed drainage, and glass balustrades giving it a refined look. The structure is supported by reinforced concrete foundations, load-bearing columns, and slab systems designed for long-term integrity.
                <br/><br/>
                Our team handled every phase from architectural design and structural engineering to construction supervision and MEP installations. The finishing features include imported Spanish tiles, POP ceilings, energy-efficient lighting, and bespoke joinery throughout.
                <br/><br/>
                Security features like motion sensor lights, CCTV cabling, and gate automation were integrated during construction to meet the client’s smart-home requirements.
                </p>

                <Right>
                    <div className='canva'>
                        <img className="" src="/images/product/proimg04.png" alt="img" />
                    </div>
                    <div></div>
                </Right>
            </Bottom>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;
    background: rgba(241, 241, 241, 1);
    padding: 90px;
    @media (max-width: 1200px) { 
        padding: 30px;
    }
`;

const Top = styled.div`
    width: 100%;
    margin: 50px 0;
    h1{
        font-size: 35px;
        font-weight: 400;
        font-family: Manjari;
        margin-bottom: 10px;
    }
    p{
        font-size: 18px;
        color: #525252;
        line-height: 1.8;
    }
`

const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    color: rgba(82, 82, 82, 1);
    gap: 50px;
    @media (max-width: 1200px) { 
        flex-direction: column-reverse;
        align-items: start;
    }
    p{
        width: 50%;
        font-size: 18px;
        @media (max-width: 1200px) { 
            width: 100%;
        }
    }
`

const Right = styled.div` 
    width: 50%;
    @media (max-width: 1200px) { 
        width: 100%;
    }
    .canva{
        width: 100%;
        height: 464px;
        background: rgba(238, 238, 238, 1);
        border-radius: 10px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }
`

export default ProductDescription