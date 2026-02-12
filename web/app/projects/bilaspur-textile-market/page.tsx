'use client';

import { useState } from 'react';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectStats from '@/components/project/ProjectStats';
import ProjectOverview from '@/components/project/ProjectOverview';
import ProjectExperiences from '@/components/project/ProjectExperiences';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectAmenities from '@/components/project/ProjectAmenities';
import ProjectFeatures from '@/components/project/ProjectFeatures';
import ProjectLocation from '@/components/project/ProjectLocation';
import ProjectFAQ from '@/components/project/ProjectFAQ';
import VisitModal from '@/components/project/VisitModal';

export default function BilaspurTextileMarketPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <main className="bg-white">
            <ProjectHero
                title="Bilaspur Textile Market"
                tagline="Commercial"
                location="Parsada, Raipur Road, Bilaspur"
                bgImage="/images/vertical-commercial.jpg"
                badges={["Commercial", "Raipur Road"]}
                onOpenModal={openModal}
            />

            <ProjectStats />
            <ProjectOverview />
            <ProjectExperiences />
            <ProjectGallery />
            <ProjectAmenities />
            <ProjectFeatures />
            <ProjectLocation />
            <ProjectFAQ />

            <VisitModal
                isOpen={isModalOpen}
                onClose={closeModal}
                projectName="Bilaspur Textile Market"
            />
        </main>
    );
}
