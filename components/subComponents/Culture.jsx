import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Title1 from '../Title1';

const cultureItems = [
    "01. Precision",
    "02. Trust",
    "03. Teamwork",
    "04. Innovation",
    "05. Responsibilty",
    "06. Sustainability",
    "07. Client Focus",
    "08. Safety"
];

const cultureContent = [
    {
        title: "Precision",
        subtitle: "Excellence in Execution",
        text: "We're not just builders — we're problem solvers. From planning to delivery, every step reflects our dedication to quality and precision.",
        img: "/images/culture/culImg1.png"
    },
    {
        title: "Trust",
        subtitle: "Integrity at the Core",
        text: "We believe great structures start with strong foundations — including trust. We prioritize transparency, honesty, and accountability in all client relationships.",
        img: "/images/culture/culImg2.png"
    },
    {
        title: "Teamwork",
        subtitle: "People-Driven Performance",
        text: "Our team is our greatest asset. We invest in talent, empower growth, and foster a collaborative environment where everyone thrives.",
        img: "/images/culture/culImg3.png"
    },
    {
        title: "Innovation",
        subtitle: "Innovation that Inspires",
        text: "From modern design tools to efficient building methods, we embrace technology and creativity to bring smarter solutions to life.",
        img: "/images/culture/culImg4.png"
    },
    {
        title: "Responsibility",
        subtitle: "Ownership & Accountability",
        text: "We take ownership of every project, no matter the scale. From timelines to safety, we remain accountable to our clients, our team, and the communities we build for.",
        img: "/images/culture/culImg5.png"
    },
    {
        title: "Sustainability",
        subtitle: "Eco-Conscious Construction",
        text: "We believe in building for the future. Our methods are guided by eco-conscious practices and sustainable designs that minimize impact and maximize value.",
        img: "/images/culture/culImg6.png"
    },
    {
        title: "Client Focus",
        subtitle: "Client-Centric Approach",
        text: "At the heart of every structure we build is a client’s vision. We listen, we adapt, and we deliver with a sharp focus on satisfaction and long-term relationships.",
        img: "/images/culture/culImg7.png"
    },
    {
        title: "Safety",
        subtitle: "Protecting People & Projects",
        text: "We prioritize a zero-compromise approach to safety for our workers, partners, and the people who live and work in our spaces.",
        img: "/images/culture/culImg8.png"
    }
];

const Culture = ({ no }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const [isDropOpen, setIsDropOpen] = useState(false);

    // Manual click handler
    const handleClick = (idx) => {
        setPrevIndex(activeIndex);
        setActiveIndex(idx);
        setIsDropOpen(false);
    };

    // Auto change every 3 sec
    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex(activeIndex);
            setActiveIndex((prev) => (prev + 1) % cultureContent.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <Con>
            {!no && (
                <Title1
                    heading="Our Culture"
                    para="At Arcventives Ltd, our vision is to build structures that stand the test of time while fostering trust, innovation, and excellence in every project we undertake. Beyond concrete and steel, our culture is shaped by purpose, people, and passion for the built environment."
                />
            )}
            {/* Mobile dropdown */}
            <ItemCon>
                <div
                    className="mobile-green-con"
                    onClick={() => setIsDropOpen(!isDropOpen)}
                >
                    <p>{cultureItems[activeIndex]}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.83327 7.5001C5.66847 7.50013 5.50739 7.54903 5.37038 7.6406C5.23338 7.73217 5.12659 7.8623 5.06353 8.01455C5.00048 8.1668 4.98397 8.33433 5.01611 8.49596C5.04825 8.65758 5.12759 8.80605 5.2441 8.9226L9.41077 13.0893C9.56704 13.2455 9.77896 13.3333 9.99993 13.3333C10.2209 13.3333 10.4328 13.2455 10.5891 13.0893L14.7558 8.9226C14.8723 8.80605 14.9516 8.65758 14.9838 8.49596C15.0159 8.33433 14.9994 8.1668 14.9363 8.01455C14.8733 7.8623 14.7665 7.73217 14.6295 7.6406C14.4925 7.54903 14.3314 7.50013 14.1666 7.5001L5.83327 7.5001Z"
                            fill="white"
                        />
                    </svg>
                </div>
                {isDropOpen && (
                    <div className="drop-con">
                        {cultureItems.map((item, idx) => (
                            <div
                                key={idx}
                                className="item"
                                onClick={() => handleClick(idx)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </ItemCon>

            {/* Desktop + Shared Content */}
            <div className="row2">
                <Left>
                    <div className="green-con">
                        {cultureItems.map((item, idx) => (
                            <div
                                className="item"
                                key={item}
                                onClick={() => handleClick(idx)}
                            >
                                <div
                                    className="line"
                                    style={{ opacity: activeIndex === idx ? 1 : 0 }}
                                ></div>
                                <p className={activeIndex === idx ? "active" : ""}>
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="info-con">
                        <h1>{cultureContent[activeIndex].title}</h1>
                        <h2>{cultureContent[activeIndex].subtitle}</h2>
                        <p>{cultureContent[activeIndex].text}</p>
                        <span className="read-more">
                            Read More
                            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                                <path d="M1.5 7L16.5 7M16.5 7L10.875 1M16.5 7L10.875 13" stroke="#00AA59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                </Left>
                <Right>
                    <div
                        key={activeIndex}
                        className={`image-wrapper ${
                            activeIndex > prevIndex ? "slide-left" : "slide-right"
                        }`}
                    >
                        <img src={cultureContent[activeIndex].img} alt="culture" />
                    </div>
                </Right>
            </div>
        </Con>
    );
}; 


const Con = styled.section`  
    width: 100%;    
    padding: 90px;
    background: rgba(255, 255, 255, 1); 
    @media (max-width: 1200px) {  
        flex-direction: column-reverse;
        padding: 20px 20px;
    } 
    .row2{
        display: flex;
        @media (max-width: 1200px) {  
            flex-direction: column-reverse; 
        } 

    }
`
const ItemCon = styled.section`  
    width: 100%;     
    display: none;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 20px;
    @media (max-width: 1200px) {  
        display: block; 
    }  
    .mobile-green-con{
        width: 100%;
        height: 50px;
        border-radius: 5px;
        background: #00AA59;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        cursor: pointer;
        position: relative; /* so .drop-con can anchor to it */
        z-index: 2; /* make sure it's above */
        p{
            color: #FFF;
            font-family: Manjari;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }
    .drop-con {
        position: absolute;
        top: 100%;      /* ✅ place it right below .mobile-green-con */
        left: 0;
        width: 100%;
        border-radius: 10px;
        background: #FFF;
        padding: 10px 3px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        z-index: 1;
        
        .item {
            padding: 10px 20px;
            border-bottom: 1px solid #E8E8E8;
            cursor: pointer;
        }

        .item:last-child {
            border-bottom: none;
        }
    }

`

const Left = styled.div`  
    width: 60%; 
    display:flex;
    align-items: center;
    @media (max-width: 1200px) {  
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    } 
    .green-con{
        width: 341px;
        min-width: 341px;
        display: inline-flex;
        padding: 40px 18px 40px 0;
        flex-direction: column; 
        min-height: 200px;
        border-radius: 10px;
        background: #00AA59;
         @media (max-width: 1200px) {  
            display: none;
        } 
        .item{
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            .line{
                width: 21px;
                height: 3px;
                border-radius: 0 2px 2px 0;
                background: #FFF;
                margin-right: 15px;
            }
            p{
                color: rgba(255, 255, 255, 0.40);
                font-family: Manjari;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                cursor: pointer;
            }
            .active{
                color: #FFF;
                font-family: Manjari;
                font-size: 26px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }
    }
    .info-con{
        margin-left: 30px;
        @media (max-width: 1200px) {   
            margin-left: 0px;
            margin-top: 20px;
        } 
        h1{
            color: #2E3177;
            font-family: Manjari;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 40px;
            @media (max-width: 1200px) {   
                font-size: 12px; 
                margin-bottom: 15px;
            } 
        }
        h2{
            width: 90%;
            color: #111;
            font-family: Manjari;
            font-size: 44px;
            font-style: normal;
            font-weight: 100;
            line-height: normal;
            margin-bottom: 40px;
            @media (max-width: 1200px) {   
                width: 100%;
                font-size: 22px; 
                margin-bottom: 15px;
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
                margin-bottom: 15px;
            } 
        }
        .read-more {
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
    }
`

const Right = styled.div`  
    width: 40%;     
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden; 
    border-radius: 10px;
    @media (max-width: 1200px) {
        width: 100%;
        position: relative;
        min-height: 250px; /* ensures space for image */

    }
    .image-wrapper {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        animation-duration: 0.6s;
        animation-fill-mode: forwards;
        border-radius: 10px;
        @media (max-width: 1200px) {
            position: relative; /* let image flow in mobile */ 
        }
    }

    .slide-left {
        animation-name: slideFromLeft;
    }

    .slide-right {
        animation-name: slideFromRight;
    }

    img {  
        border-radius: 10px;
        @media (max-width: 1200px) {
            width: 100%;
            max-width: 100%;

        }

    }

    @keyframes slideFromLeft {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }

    @keyframes slideFromRight {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;


export default Culture