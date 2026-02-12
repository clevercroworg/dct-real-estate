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

export default function InduimperialPage() {
    return (
        <VisitModalProvider>
            <main className="bg-white pb-24 lg:pb-0">
                <ProjectHero
                    title="Induimperial"
                    tagline="Residential"
                    location="Behind High Court, Raipur Road, Bilaspur"
                    bgImage="/images/vertical-apartments.jpg"
                    badges={["Premium Living", "Raipur Road"]}
                />

                <ProjectStats
                    stats={[
                        {
                            icon: "star-outline",
                            label: "Luxury",
                            value: "Imperial Living",
                            description: "Designed for those who appreciate the finer things in life."
                        },
                        {
                            icon: "leaf-outline",
                            label: "Environment",
                            value: "Eco-Friendly",
                            description: "Landscaped gardens and sustainable design elements."
                        },
                        {
                            icon: "location-outline",
                            label: "Location",
                            value: "Raipur Road",
                            description: "Behind High Court, Raipur Road, Bilaspur."
                        }
                    ]}
                />
                <ProjectOverview
                    title="Induimperial: A Legacy of Grandeur."
                    description={
                        <>
                            <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                                Induimperial stands as a testament to luxury and grand living. Situated
                                strategically behind the High Court on Raipur Road, this project offers
                                a sophisticated lifestyle with premium amenities and meticulously planned layouts.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                From the grand entrance to the smallest details in infrastructure,
                                Induimperial is crafted to provide a superior living experience for its residents.
                            </p>
                        </>
                    }
                    details={[
                        { label: "Project Type", value: "Luxury Residential" },
                        { label: "Status", value: "Completed" },
                        { label: "Location", value: "Behind High Court, Raipur Rd" },
                        { label: "Theme", value: "Premium Living" },
                    ]}
                    brochureLink="#"
                    brochurePoints={[
                        "Grand entrance gate and wide roads.",
                        "Premium landscaping and parks.",
                        "Exclusive community atmosphere."
                    ]}
                />
                <ProjectExperiences />
                <ProjectGallery />
                <ProjectAmenities
                    title="Imperial Amenities"
                    amenities={[
                        { icon: "business-outline", name: "Premium Clubhouse" },
                        { icon: "water-outline", name: "Swimming Pool" },
                        { icon: "barbell-outline", name: "Modern Gym" },
                        { icon: "flower-outline", name: "Landscaped Gardens" },
                        { icon: "enter-outline", name: "Grand Entrance" },
                        { icon: "shield-checkmark-outline", name: "24/7 Security" },
                        { icon: "flash-outline", name: "Underground Cabling" },
                        { icon: "car-outline", name: "Visitor Parking" },
                    ]}
                />
                <ProjectFeatures
                    title="Luxury Redefined"
                    features={[
                        "Premium location behind High Court",
                        "State-of-the-art infrastructure",
                        "Exclusive community",
                        "Modern architecture",
                        "Lush green surroundings",
                        "High-quality construction",
                        "Lifestyle amenities",
                        "Secure environment"
                    ]}
                    imageSrc="/images/project-indu.jpg"
                />
                <ProjectLocation
                    title="A Location of Distinction"
                    landmarks={[
                        {
                            category: "Landmarks",
                            icon: "business-outline",
                            items: [
                                { name: "High Court", type: "Govt Office", distance: "0.5 km", time: "~1 min" },
                            ]
                        },
                        {
                            category: "Connectivity",
                            icon: "navigate-outline",
                            items: [
                                { name: "Raipur Road", type: "Highway", distance: "1.0 km", time: "~3 mins" },
                                { name: "City Center", type: "Downtown", distance: "9.0 km", time: "~20 mins" },
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
