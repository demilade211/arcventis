'use client'

import ProjectsHeroSec from '@/components/projects/ProjectsHeroSec';
import ProjectsLists from '@/components/projects/ProjectsLists';
import Services from '@/components/subComponents/Services';
import ReadyToStart from '@/components/subComponents/ReadyToStart';
import AppLayout from '@/layouts/AppLayout';
import React from 'react'
import styled from 'styled-components';
import { useParams } from 'next/navigation';

const ProjectDetail = () => {
    const { projectName } = useParams(); // 👈 get projectName from route params''

    let projectNames = decodeURIComponent(projectName)

    return (
        <Con>
            <AppLayout>
                {/* Pass projectName to hero and list */}
                <ProjectsHeroSec projectName={projectNames} />
                <ProjectsLists projectName={projectNames} />
                <Services />
                <ReadyToStart />
            </AppLayout>
        </Con>
    )
}

const Con = styled.div`  
  width: 100%;
  max-width: 1600px; 
  margin: 0 auto; /* Centers the content */
  overflow: hidden;
`;

export default ProjectDetail;
