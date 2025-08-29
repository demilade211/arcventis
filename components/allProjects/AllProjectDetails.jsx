import React from 'react'
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const AllProjectDetails = () => {
    const projects = [
        {
            image: "/images/projects/proImg1.png",
            title: 'E-commerce Website',
            description: 'A comprehensive e-commerce platform with user-friendly interface and secure payment gateway.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Portfolio Website',
            description: 'A sleek and modern portfolio website to showcase creative work and projects.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Blog Platform',
            description: 'A dynamic blog platform with content management system and social sharing features.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Corporate Website',
            description: 'A professional corporate website with detailed service offerings and client testimonials.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Landing Page',
            description: 'An engaging landing page designed to capture leads and promote products effectively.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Educational Portal',
            description: 'An interactive educational portal with course management and student tracking features.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'E-commerce Website',
            description: 'A comprehensive e-commerce platform with user-friendly interface and secure payment gateway.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Portfolio Website',
            description: 'A sleek and modern portfolio website to showcase creative work and projects.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Blog Platform',
            description: 'A dynamic blog platform with content management system and social sharing features.'
        },
    ];

    return (
        <Con>
            <div className="container">
                <div className="gap">
                    {projects.map((project, index) => (
                        <div className="mt-2 mb-2" key={index}>
                            <ProjectCard 
                                image={project.image} 
                                title={project.title} 
                                description={project.description} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;    
    padding: 90px;
    background: #fff;
    @media (max-width: 1200px) {  
        padding: 30px;
    } 
    .gap{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 15px;
        @media (max-width: 1200px) {  
            grid-template-columns: repeat(2,1fr);
            gap: 10px;
        }
    }
`;

export default AllProjectDetails;