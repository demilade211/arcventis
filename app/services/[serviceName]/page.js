// app/services/[service]/page.js

'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import styled from 'styled-components'
import ServiceHeroSec from '@/components/service/ServiceHeroSec'
import ServiceDescription from '@/components/service/ServiceDescription'
import OtherServices from '@/components/service/OtherServices'
import Projects from '@/components/subComponents/Projects'
import ReadyToStart from '@/components/subComponents/ReadyToStart'
import AppLayout from '@/layouts/AppLayout'

// Map from param slug → details
const serviceDetails = {
  'architectural-design': {
    title: 'Architectural Design',
    description1: `Great buildings begin with visionary design. At Arcventives Ltd, our architectural design services go beyond sketches and floor plans — we deliver holistic solutions that balance functionality, aesthetics, and structural integrity.`,
    description2: `We begin by engaging clients to fully understand their vision, budget, and intended use of space. Our architects and planners then translate these needs into creative, context-sensitive designs that not only comply with local and international standards but also maximize comfort, efficiency, and environmental sustainability.`,
    description3: `From private residences and commercial hubs to large-scale public facilities, our designs have consistently evolved into practical, beautiful structures that serve their purpose and endure. With Arcventives, you get more than drawings — you get a blueprint for lasting value.`,
    image: '/images/services/simg1.png',
  },
  'building-construction': {
    title: 'Building Construction',
    description1: `Arcventives Ltd transforms ideas into reality through construction services that embody quality, safety, and efficiency. Whether handling a single residential home or a multi-million-naira development, our approach remains disciplined and client-focused.`,
    description2: `Our construction expertise spans foundations, superstructures, roofing, finishing, and site installations. We use tested materials, skilled labor, and robust supervision methods to ensure that projects meet design intent and regulatory compliance.`,
    description3: `Over the years, we have delivered housing estates, office complexes, hotels, and institutional projects — many completed ahead of schedule while meeting the highest quality benchmarks. Clients trust us because we deliver structures that are not just built, but built to last.`,
    image: '/images/services/simg2.png',
  },
  'structural-engineering': {
    title: 'Structural Engineering',
    description1: `The durability of any building lies in its structure. At Arcventives, our structural engineering service ensures every project rests on solid foundations — literally and figuratively.`,
    description2: `We provide structural analysis, load calculations, reinforcement detailing, and supervision to guarantee safety and resilience. Our engineers collaborate closely with architects and contractors to optimize materials and minimize costs while safeguarding long-term performance.`,
    description3: `Our portfolio includes high-rise residences, industrial facilities, and complex institutional projects that have stood strong against environmental and usage demands. With us, you can be assured that your building is engineered for strength and reliability.`,
    image: '/images/services/simg3.png',
  },
  'renovation-&-remodeling': {
    title: 'Renovation & Remodeling',
    description1: `Buildings need to adapt as times change. Our renovation and remodeling services breathe new life into old spaces, making them functional, modern, and valuable once more.`,
    description2: `From complete structural overhauls to interior reconfigurations, we handle upgrades with creativity and precision. Whether you need to modernize a family home, repurpose a commercial space, or enhance an aging facility, our team delivers transformations that are seamless and cost-effective.`,
    description3: `Clients appreciate our ability to preserve the character of their properties while integrating modern finishes, smart systems, and improved layouts. At Arcventives, renovation is more than repair — it's reinvention.`,
    image: '/images/services/simg4.png',
  },
  'construction-consultancy': {
    title: 'Construction Consultancy',
    description1: `Before the first brick is laid, the right guidance can save time, money, and effort. Our consultancy services provide expert insight into feasibility studies, site assessments, project planning, and procurement strategies.`,
    description2: `We've helped clients refine their ideas, evaluate risks, select contractors, and manage costs with confidence. Our consultancy team draws on real-world project experience, ensuring that advice is practical, actionable, and tailored to each unique project.`,
    description3: `For investors, developers, and organizations, Arcventives is the trusted advisor that ensures every decision is strategic and every outcome is sustainable.`,
    image: '/images/services/simg5.png',
  },
  'civil-&-infrastructure-works': {
    title: 'Civil & Infrastructure Works',
    description1: `Communities thrive when supported by resilient infrastructure. Arcventives contributes to nation-building through the delivery of roads, drainage systems, culverts, and other civil works that improve access and functionality.`,
    description2: `We combine engineering expertise with modern construction technology to deliver infrastructure that is safe, durable, and sustainable. From estate roads and stadiums to drainage control systems, our work meets the demands of both urban and rural environments.`,
    description3: `Our projects have supported local governments, private developers, and corporate clients — helping shape environments that drive growth and opportunity.`,
    image: '/images/services/simg10.png',
  },
  'interior-fit-out-&-finishing': {
    title: 'Interior Fit-Out & Finishing',
    description1: `A building's interior is where users experience its true character. Our fit-out and finishing services transform raw structures into polished, functional, and inviting spaces.`,
    description2: `We manage flooring, ceilings, painting, partitions, lighting, cabinetry, and other finishing details. Each element is executed with craftsmanship and precision, ensuring that the final product is not only beautiful but also durable.`,
    description3: `Arcventives has delivered bespoke interiors for homes, offices, retail spaces, and hospitality facilities — always tailored to client specifications and lifestyle needs. With us, interiors become experiences.`,
    image: '/images/services/simg9.png',
  },
  'quantity-surveying-&-cost-estimation': {
    title: 'Quantity Surveying & Cost Estimation',
    description1: `Financial planning is key to project success. Our quantity surveying and cost estimation services provide clients with accurate, transparent, and reliable cost control throughout the project lifecycle.`,
    description2: `We prepare Bills of Quantities (BOQs), analyze contractor bids, conduct value engineering, and monitor expenditures to keep projects within budget. Clients benefit from our commitment to honesty and efficiency, which helps avoid cost overruns and ensures value for money.`,
    description3: `Whether you're developing a single property or a multi-site project, our cost management expertise keeps your investment secure.`,
    image: '/images/services/simg8.png',
  },
  'project-management-&-supervision': {
    title: 'Project Management & Supervision',
    description1: `Every project needs strong leadership to succeed. Our project management and supervision services ensure construction is delivered on time, within scope, and to the highest standards.`,
    description2: `We oversee planning, resource allocation, contractor coordination, and quality control. By anticipating challenges and resolving them quickly, we keep projects moving seamlessly from foundation to finish.`,
    description3: `Clients recognize Arcventives for our proactive communication, transparent reporting, and ability to balance speed with quality. With us in charge, you can focus on your vision while we handle the details.`,
    image: '/images/services/simg7.png',
  },
  'me-installations': {
    title: 'MEP Installations',
    description1: `Mechanical, Electrical, and Plumbing (MEP) systems are the lifelines of any modern building. At Arcventives, we design and install integrated systems that support safety, efficiency, and comfort.`,
    description2: `Our services include HVAC systems, power distribution, water supply, drainage networks, and fire protection installations. We adopt energy-efficient and sustainable practices to deliver systems that perform reliably over the long term.`,
    description3: `From residential developments to large-scale commercial and industrial facilities, our MEP solutions provide seamless functionality that clients can depend on daily.
`,
    image: '/images/services/simg6.png',
  },
};


const ServicePage = () => {
    const params = useParams()
    let serviceParam = params?.serviceName || ''  // e.g. "Building Construction"



    // decode URL‐encoded param
    serviceParam = decodeURIComponent(serviceParam)

    

    // match service detail
    const slug = serviceParam.trim()
        .toLowerCase()
        .replace(/\s+/g, '-')

        console.log(slug);

    const detail = serviceDetails[slug] || {
        title: 'Service Not Found',
        description: `We couldn't find the service "${serviceParam}".`,
        image: '/images/services/default.png',
    }


    return (
        <Con>
            <AppLayout>
                <ServiceHeroSec title={detail.title} image={detail.image} />
                <ServiceDescription description1={detail.description1} description2={detail.description2} description3={detail.description3} image={detail.image}/>
                <OtherServices currentService={detail.title} />
                <Projects />
                <ReadyToStart />
            </AppLayout>
        </Con>
    )
}

const Con = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  overflow: hidden;
`

export default ServicePage
