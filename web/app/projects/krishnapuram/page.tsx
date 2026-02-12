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

export default function KrishnapuramPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <main className="bg-white">
            <ProjectHero
                title="Krishnapuram"
                tagline="Residential"
                location="Near Bilha Turning, Raipur Road, Bilaspur"
                bgImage="/images/vertical-residential.jpg"
                badges={["Residential", "RERA Approved"]}
                onOpenModal={openModal}
            />

            <ProjectStats
                stats={[
                    {
                        icon: "home-outline",
                        label: "Community",
                        value: "Modern Housing",
                        description: "A fully developed residential colony with modern amenities."
                    },
                    {
                        icon: "checkmark-circle-outline",
                        label: "Approved",
                        value: "RERA Registered",
                        description: "Fully compliant project ensuring peace of mind."
                    },
                    {
                        icon: "location-outline",
                        label: "Location",
                        value: "Raipur Road",
                        description: "Near Bilha Turning, Raipur Road, Bilaspur."
                    }
                ]}
            />
            <ProjectOverview
                title="Krishnapuram: Modern Living on Raipur Road."
                description={
                    <>
                        <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                            Krishnapuram is a premier residential development designed for modern families.
                            Located conveniently near Bilha Turning on Raipur Road, it offers a secure and
                            well-planned environment with top-notch infrastructure.
                        </p>
                        <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                            With landscaped gardens, paved roads, and a focus on community living,
                            Krishnapuram sets a new standard for residential plotting in the region.
                        </p>
                    </>
                }
                details={[
                    { label: "Project Type", value: "Residential Plotted Colony" },
                    { label: "Status", value: "Completed" },
                    { label: "Location", value: "Near Bilha Turning" },
                    { label: "RERA Approved", value: "Yes" },
                ]}
                brochureLink="#"
                brochurePoints={[
                    "RERA approved project.",
                    "Landscaped gardens and children's play area.",
                    "Wide internal roads and electrification."
                ]}
            />
            <ProjectExperiences />
            <ProjectGallery />
            <ProjectAmenities
                title="Complete Family Living"
                amenities={[
                    { icon: "business-outline", name: "Community Hall" },
                    { icon: "flower-outline", name: "Landscaped Park" },
                    { icon: "happy-outline", name: "Kids Play Area" },
                    { icon: "shield-checkmark-outline", name: "Gated Security" },
                    { icon: "trail-sign-outline", name: "Damar Roads" },
                    { icon: "flash-outline", name: "Underground Electrification" },
                    { icon: "cart-outline", name: "Daily Needs Shops" },
                    { icon: "water-outline", name: "Overhead Water Tank" },
                ]}
            />
            <ProjectFeatures
                title="A modern lifestyle awaits"
                features={[
                    "RERA approved project",
                    "Loan facility from all major banks",
                    "Modern sewage treatment plant",
                    "Rainwater harvesting",
                    "Vastu compliant plots",
                    "Peaceful residential area",
                    "Nearby schools and colleges",
                    "Excellent connectivity to highway"
                ]}
                imageSrc="/images/vertical-residential.jpg"
            />
            <ProjectLocation
                title="Prime Location on Raipur Road"
                landmarks={[
                    {
                        category: "Connectivity",
                        icon: "navigate-outline",
                        items: [
                            { name: "Bilha Turning", type: "Junction", distance: "0.5 km", time: "~1 min" },
                            { name: "High Court", type: "Landmark", distance: "6.0 km", time: "~10 mins" },
                        ]
                    },
                    {
                        category: "Transport",
                        icon: "train-outline",
                        items: [
                            { name: "Bilha Railway Stn", type: "Railway Station", distance: "3.0 km", time: "~6 mins" },
                        ]
                    },
                ]}
            />

            <VisitModal
                isOpen={isModalOpen}
                onClose={closeModal}
                projectName="Krishnapuram"
            />
        </main>
    );
}
