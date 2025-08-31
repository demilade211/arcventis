import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Title1 from '../Title1';

const projectData = [
    {
        title: "Residential",
        desc: "Elegant homes designed for comfort, beauty, and long-term value.",
        images: [
            "/images/projects/proImg1.png",
            "/images/projects/proImg2.png",
            "/images/projects/proImg3.png"
        ]
    },
    {
        title: "Commercial",
        desc: "Functional and innovative spaces for businesses to thrive.",
        images: [
            "/images/projects/proImg2.png",
            "/images/projects/proImg3.png",
            "/images/projects/proImg1.png"
        ]
    },
    {
        title: "Infrastructure",
        desc: "Building the backbone of communities with reliable infrastructure.",
        images: [
            "/images/projects/proImg3.png",
            "/images/projects/proImg1.png",
            "/images/projects/proImg2.png"
        ]
    }
];

const Projects = () => {
    const colsRef = useRef([]);
    const [activeIndexes, setActiveIndexes] = useState(Array(projectData.length).fill(0));

    // Scroll reveal
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                    }
                });
            },
            { threshold: 0.2 }
        );

        colsRef.current.forEach((col) => {
            if (col) observer.observe(col);
        });

        return () => observer.disconnect();
    }, []);

    // Auto-change images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndexes((prev) =>
                prev.map((idx, projectIdx) =>
                    (idx + 1) % projectData[projectIdx].images.length
                )
            );
        }, 3000); // ✅ 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <Con>
            <Title1
                to="/all-projects"
                heading="Our Projects"
                para="Explore what we've been building across sectors. From elegant residential homes to large-scale commercial and infrastructure projects, here's a glimpse into the craftsmanship and innovation behind our recent work."
                dark
            />
            <div className='row2'>
                {projectData.map((project, i) => (
                    <div
                        className='col fade-up'
                        key={i}
                        ref={(el) => (colsRef.current[i] = el)}
                        style={{ transitionDelay: `${i * 0.2}s` }}
                    >
                        <div className="image-wrapper">
                            <img
                                key={activeIndexes[i]} // triggers fade animation
                                src={project.images[activeIndexes[i]]}
                                alt={project.title}
                                className="fade-img"
                            />
                        </div>
                        <div className='green-con'>
                            <h1>{project.title}</h1>
                            <p>{project.desc}</p>
                            <div className='view'>View All</div>
                        </div>
                    </div>
                ))}
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;    
    padding: 90px;
    background: #111;
    @media (max-width: 1200px) {  
        padding: 20px;
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
            position: relative;
            overflow: hidden;
            transform: translateY(40px);
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);

            &.in-view {
                transform: translateY(0);
                opacity: 1;
            }

            .image-wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                overflow: hidden;
                border-radius: 10px;
            }

            .fade-img {
                width: 100%;
                border-radius: 10px; 
                transform: scale(1);
                transition: transform 1.5s ease, opacity 0.6s ease;
                opacity: 0;
                animation: fadeIn 1s forwards;
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            &:hover .fade-img {
                transform: scale(1.08);
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
                transition: all 0.4s ease;
                transform: translateY(100%);
                opacity: 0;

                @media (max-width: 1200px) {
                    transform: translateY(0);
                    opacity: 1;
                    border-radius: 0 0 10px 10px;
                    padding: 10px;
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

            &:hover .green-con {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
`
export default Projects
