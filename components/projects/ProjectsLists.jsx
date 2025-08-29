import React from 'react'
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const cardDatas = [
    {
        image: "/images/projects/proimg5.png",
        name: "Dreamview Estate",
        location: "Lekki, Lagos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus lacus in mi ornare finibus."
    },
    {
        image: "/images/projects/proimg6.png",
        name: "River Valley",
        location: "Magodo, Lagos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus lacus in mi ornare finibus."
    },
    {
        image: "/images/projects/proimg7.png",
        name: "Kosoko Palace",
        location: "Lekki, Lagos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus lacus in mi ornare finibus."
    },
    {
        image: "/images/projects/proimg8.png",
        name: "Dreamview Estate",
        location: "Lekki, Lagos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus lacus in mi ornare finibus."
    },
    {
        image: "/images/projects/proimg9.png",
        name: "Grandview Castle",
        location: "Lekki, Lagos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus lacus in mi ornare finibus."
    },
    {
        image: "/images/projects/proimg10.png",
        name: "Agungi Bristol",
        location: "Lekki, Lagos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus lacus in mi ornare finibus."
    },
    {
        image: "/images/projects/proimg11.png",
        name: "Dreamview Estate",
        location: "Lekki, Lagos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus lacus in mi ornare finibus."
    },
    {
        image: "/images/projects/proimg12.png",
        name: "Dreamview Estate",
        location: "Lekki, Lagos",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus lacus in mi ornare finibus."
    },
]

const ProjectsLists = () => {
    return (
        <Con>
            <div className='flex gap-2 justify-between flex-wrap w-full mt-20'>
                {cardDatas.map((data, i) => (
                    <ProjectCard
                        key={i}
                        image={data.image}
                        name={data.name}
                        location={data.location}
                        description={data.description}
                    />
                ))}
            </div>
        </Con>
    )
}

const Con = styled.section`  
    width: 100%;    
    padding: 90px;
    background: rgba(245, 245, 249, 1);
    @media (max-width: 1200px) {  
        flex-direction: column-reverse;
        padding: 20px 20px;
    } 
`

export default ProjectsLists
