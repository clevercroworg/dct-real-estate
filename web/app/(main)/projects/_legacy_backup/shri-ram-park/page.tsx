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
                    location="Sakri, Bilaspur"
                    bgImage="/images/verticals/vertical-villas.jpg"
                    badges={["Residential", "Sakri"]}
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
                    title="Shri Ram Park: Premium Living in Sakri."
                    description={
                        <>
                            <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                                Shri Ram Park by DCT Real Estate in Sakri, Bilaspur, offers a harmonious blend
                                of modern amenities and serene surroundings. This developed project features
                                spacious plots and premium infrastructure.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                Ensuring a comfortable and luxurious lifestyle, it is perfect for building your
                                dream home in a secure and vibrant community experience.
                            </p>
                        </>
                    }
                    details={[
                        { label: "Project Type", value: "Residential Plots" },
                        { label: "Status", value: "Completed" },
                        { label: "Location", value: "Sakri, Bilaspur" },
                        { label: "Zone", value: "Sakri" },
                    ]}
                    brochureLink="#"
                    brochurePoints={[
                        "Prime location in Sakri.",
                        "Near AIIMS and Schools.",
                        "Ready for immediate construction."
                    ]}
                />
                <ProjectExperiences />
                <ProjectGallery
                    images={[
                        "/images/projects/shri-ram-park/gallery/ShriRamPark - Gallery1.jpeg",
                        "/images/projects/shri-ram-park/gallery/ShriRamPark - Gallery2.jpeg"
                    ]}
                />
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
                        "Close to AIIMS and Schools",
                        "Peaceful environment",
                        "Developed infrastructure",
                        "Safe for children and elderly",
                        "Close to hospitals",
                        "Ready for possession",
                        "Value for investment"
                    ]}
                    imageSrc="/images/projects/project-shriram.jpg"
                />
                <ProjectLocation
                    title="Prime Location in Sakri"
                    landmarks={[
                        {
                            category: "Key Landmarks",
                            icon: "location-outline",
                            items: [
                                { name: "Sakri Chowk", type: "Landmark", distance: "0.5 km", time: "~2 mins" },
                                { name: "Sakri Veg Market", type: "Market", distance: "1.0 km", time: "~3 mins" },
                            ]
                        },
                        {
                            category: "Healthcare",
                            icon: "medkit-outline",
                            items: [
                                { name: "AIIMS Bilaspur", type: "Hospital", distance: "2.0 km", time: "~5 mins" },
                                { name: "Apollo Hospital", type: "Hospital", distance: "9.5 km", time: "~16 mins" },
                            ]
                        },
                        {
                            category: "Education",
                            icon: "school-outline",
                            items: [
                                { name: "St. Xavier’s School", type: "School", distance: "3.0 km", time: "~7 mins" },
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
