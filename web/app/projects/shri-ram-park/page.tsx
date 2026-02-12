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

export default function ShriRamParkPage() {
    return (
        <VisitModalProvider>
            <main className="bg-white pb-24 lg:pb-0">
                <ProjectHero
                    title="Shri Ram Park"
                    tagline="Residential"
                    location="Behind High Court, Chhatauna Road, Bilaspur"
                    bgImage="/images/vertical-villas.jpg"
                    badges={["Residential", "Chhatauna Road"]}
                />

                <ProjectStats
                    stats={[
                        {
                            icon: "home-outline",
                            label: "Living",
                            value: "Prime Residential",
                            description: "Located in a highly sought-after residential zone."
                        },
                        {
                            icon: "shield-checkmark-outline",
                            label: "Security",
                            value: "Gated Campus",
                            description: "Safe environment for families and children."
                        },
                        {
                            icon: "location-outline",
                            label: "Location",
                            value: "High Court",
                            description: "Behind High Court, Chhatauna Road, Bilaspur."
                        }
                    ]}
                />
                <ProjectOverview
                    title="Shri Ram Park: Premium Living Behind High Court."
                    description={
                        <>
                            <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                                Shri Ram Park offers an elevated standard of living in one of Bilaspur's
                                most prestigious locations, behind the High Court on Chhatauna Road.
                                This developed project combines convenience with a peaceful atmosphere.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                The project features wide roads, drainage systems, and lush green parks,
                                making it an ideal choice for those who value quality infrastructure
                                and a respectable neighborhood.
                            </p>
                        </>
                    }
                    details={[
                        { label: "Project Type", value: "Residential Development" },
                        { label: "Status", value: "Completed" },
                        { label: "Location", value: "Behind High Court" },
                        { label: "Zone", value: "Chhatauna Road" },
                    ]}
                    brochureLink="#"
                    brochurePoints={[
                        "Prime location near High Court.",
                        "Fully developed infrastructure.",
                        "Ready for immediate construction."
                    ]}
                />
                <ProjectExperiences />
                <ProjectGallery />
                <ProjectAmenities
                    title="Quality Living Infrastructure"
                    amenities={[
                        { icon: "flower-outline", name: "Central Park" },
                        { icon: "trail-sign-outline", name: "Wide Paved Roads" },
                        { icon: "home-outline", name: "Temple" },
                        { icon: "shield-checkmark-outline", name: "Gated Campus" },
                        { icon: "flash-outline", name: "Street Lights" },
                        { icon: "water-outline", name: "Water Supply" },
                        { icon: "construct-outline", name: "Drainage System" },
                        { icon: "school-outline", name: "Kids Play Zone" },
                    ]}
                />
                <ProjectFeatures
                    title="Everything a family needs"
                    features={[
                        "Located in a prime residential area",
                        "Close to High Court",
                        "Peaceful environment",
                        "Developed infrastructure",
                        "Safe for children and elderly",
                        "Close to schools and hospitals",
                        "Ready for possession",
                        "Value for investment"
                    ]}
                    imageSrc="/images/project-shriram.jpg"
                />
                <ProjectLocation
                    title="Prestigious Address"
                    landmarks={[
                        {
                            category: "Key Landmarks",
                            icon: "business-outline",
                            items: [
                                { name: "High Court", type: "Govt Office", distance: "1.0 km", time: "~2 mins" },
                            ]
                        },
                        {
                            category: "Education",
                            icon: "school-outline",
                            items: [
                                { name: "DPS Bilaspur", type: "School", distance: "3.0 km", time: "~6 mins" },
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
