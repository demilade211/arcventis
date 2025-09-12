import React from 'react'
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const AllProjectDetails = () => {
    const projects = [
        {
            image: "/images/projects/proImg1.png",
            title: 'Residential',
            description: 'Design and construction of modern homes, apartments, and estates with durable structures and quality finishes.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Commercial',
            description: 'Development of office spaces, corporate complexes, and business facilities tailored for productivity and growth.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Industrial',
            description: 'Construction of factories, warehouses, and production plants with efficient layouts and safety compliance.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Infrastructure',
            description: 'Execution of large-scale infrastructure projects including roads, bridges, and public utilities.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Master Plan',
            description: 'Comprehensive master planning for communities, estates, and urban developments with sustainable design.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Mixed Use',
            description: 'Integrated projects combining residential, commercial, and leisure facilities for modern living.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Hospitality',
            description: 'Development of hotels, resorts, and leisure centers with world-class amenities and elegant finishes.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Retail',
            description: 'Construction of shopping malls, retail outlets, and markets designed for high foot traffic and efficiency.'
        },
        {
            image: "/images/projects/proImg1.png",
            title: 'Civil & Infrastructure Works',
            description: 'Specialized civil engineering projects including drainage, water systems, and heavy structural works.'
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