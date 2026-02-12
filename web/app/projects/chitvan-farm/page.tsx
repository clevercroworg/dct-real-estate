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
import StickyContactBar from '@/components/project/StickyContactBar';

export default function ChitvanFarmPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <main className="bg-white">
            <ProjectHero
                title="Chitvan Farmhouse"
                tagline="Farmhouse"
                location="Mohda Mod, Bhojpuri Toll Plaza, NH 130, Bilaspur (C.G.)"
                bgImage="/images/chitvan-farmhouse-hero.png"
                badges={["Integrated Farmhouse Living", "Bilaspur – Raipur NH 130"]}
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
                projectName="Chitvan Farmhouse"
            />


        </main>
    );
}
