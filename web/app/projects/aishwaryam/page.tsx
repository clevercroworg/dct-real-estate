'use client';

import ProjectHero from '@/components/project/ProjectHero';
import ProjectStats from '@/components/project/ProjectStats';
import ProjectOverview from '@/components/project/ProjectOverview';
import ProjectExperiences from '@/components/project/ProjectExperiences';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectAmenities from '@/components/project/ProjectAmenities';
import ProjectFeatures from '@/components/project/ProjectFeatures';
import ProjectLocation from '@/components/project/ProjectLocation';
import VisitModal from '@/components/project/VisitModal';
import ProjectStickyNav from '@/components/project/ProjectStickyNav';
import { VisitModalProvider } from '@/components/project/VisitModalContext';

export default function AishwaryamPage() {
    return (
        <VisitModalProvider>
            <main className="bg-white pb-24 lg:pb-0">
                <ProjectHero
                    title="Aishwaryam"
                    tagline="Commercial"
                    location="Opp. LCIT College, Raipur Road, Bilaspur"
                    bgImage="/images/project-aishwaryam.png"
                    badges={["Clubhouse", "NH 130"]}
                />

                <ProjectStats
                    stats={[
                        {
                            icon: "business-outline",
                            label: "Commercial",
                            value: "Business Hub",
                            description: "Premium commercial spaces designed for high visibility and footfall."
                        },
                        {
                            icon: "trending-up-outline",
                            label: "Growth",
                            value: "High ROI",
                            description: "Located on NH 130, ensuring excellent appreciation potential."
                        },
                        {
                            icon: "navigate-outline",
                            label: "Location",
                            value: "Opp. LCIT College",
                            description: "Prime location on Raipur Road, Bilaspur."
                        }
                    ]}
                />
                <ProjectOverview
                    title="Aishwaryam: A Premium Commercial Landmark on NH 130."
                    description={
                        <>
                            <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                                Aishwaryam is a state-of-the-art commercial project situated directly opposite
                                LCIT College on the bustling Raipur Road. It offers a mix of retail and
                                office spaces designed to cater to modern business needs.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                With its strategic location and modern infrastructure, Aishwaryam provides
                                the perfect launchpad for businesses looking to establish a strong presence
                                in one of Bilaspur’s fastest-growing corridors.
                            </p>
                        </>
                    }
                    details={[
                        { label: "Project Type", value: "Commercial Complex" },
                        { label: "Status", value: "Ongoing" },
                        { label: "Location", value: "Opp. LCIT, Raipur Road" },
                        { label: "RERA ID", value: "PCGRERA220824001808" },
                    ]}
                    brochureLink="#"
                    brochurePoints={[
                        "High visibility frontage on NH 130.",
                        "Modern architecture and amenities.",
                        "Ample parking and easy accessibility."
                    ]}
                />
                <ProjectExperiences />
                <ProjectGallery />
                <ProjectAmenities
                    title="Infrastructure for Business Success"
                    amenities={[
                        { icon: "car-outline", name: "Ample Parking Space" },
                        { icon: "flash-outline", name: "Power Backup" },
                        { icon: "shield-checkmark-outline", name: "24/7 Security" },
                        { icon: "wifi-outline", name: "High-Speed Internet" },
                        { icon: "water-outline", name: "Water Supply" },
                        { icon: "people-outline", name: "Common Washrooms" },
                        { icon: "flame-outline", name: "Fire Safety System" },
                        { icon: "business-outline", name: "Modern Elevators" },
                    ]}
                />
                <ProjectFeatures
                    title="Premium Commercial Spaces"
                    features={[
                        "High visibility glass facade",
                        "Designed for retail and offices",
                        "Wide corridors and lobby",
                        "Low maintenance costs",
                        "Strategic location on NH 130",
                        "High footfall potential",
                        "Branding opportunities",
                        "Investment worthy assets"
                    ]}
                    imageSrc="/images/project-aishwaryam.jpg"
                />
                <ProjectLocation
                    title="A Strategic Business Address"
                    landmarks={[
                        {
                            category: "Institutions",
                            icon: "school-outline",
                            items: [
                                { name: "LCIT College", type: "Engineering College", distance: "0.1 km", time: "Opposite" },
                                { name: "Guru Ghasidas Univ", type: "Central University", distance: "3.0 km", time: "~5 mins" },
                            ]
                        },
                        {
                            category: "Connectivity",
                            icon: "navigate-outline",
                            items: [
                                { name: "Koni", type: "Local Hub", distance: "2.0 km", time: "~3 mins" },
                                { name: "Bilaspur City", type: "City Center", distance: "8.0 km", time: "~15 mins" },
                            ]
                        },
                    ]}
                />

                <ProjectStickyNav />
                <VisitModal />
            </main>
        </VisitModalProvider>
    );
}
