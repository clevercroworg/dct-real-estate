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
                    bgImage="/images/verticals/vertical-apartments.jpg"
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
                                Indu Imperial, located behind the High Court on Raipur Road, Bilaspur,
                                offers an ideal blend of convenience and sophistication. Its prime location
                                ensures easy access to key city landmarks, making it a perfect choice for
                                residential and commercial purposes.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                Experience modern amenities and a serene environment in this prestigious property,
                                crafted to provide a superior living experience with meticulously planned layouts
                                and infrastructure.
                            </p>
                        </>
                    }
                    details={[
                        { label: "Project Type", value: "Office-Cum-Residence" },
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
                <ProjectGallery images={[]} />
                <ProjectAmenities
                    title="Imperial Amenities"
                    amenities={[
                        { icon: "enter-outline", name: "Grand Entrance Gate" },
                        { icon: "business-outline", name: "Grand Clubhouse" },
                        { icon: "water-outline", name: "Swimming Pool" },
                        { icon: "happy-outline", name: "Kids Play Area" },
                        { icon: "flash-outline", name: "Individual Transformer" },
                        { icon: "barbell-outline", name: "Open-Air Gym" },
                        { icon: "trail-sign-outline", name: "Wide Roads" },
                        { icon: "body-outline", name: "Yoga Center" },
                        { icon: "leaf-outline", name: "Plantation" },
                        { icon: "flower-outline", name: "Lush Green Garden" },
                        { icon: "shield-checkmark-outline", name: "Secured Campus" },
                        { icon: "lock-closed-outline", name: "Security Guard Room" },
                    ]}
                />
                <ProjectFeatures
                    title="Luxury Redefined"
                    features={[
                        "State-of-the-Art Fitness Center",
                        "Luxurious Swimming Pools",
                        "Spacious Parking Area",
                        "Panoramic Green Views",
                        "Dedicated Children’s Play Zone",
                        "Beautifully Landscaped Gardens",
                        "Premium Modular Kitchen Setup",
                        "Advanced Fire Safety Measures",
                        "Elegant High-Quality Doors",
                        "Well-Designed Storage Spaces",
                        "Polished Marble Flooring"
                    ]}
                    imageSrc="/images/projects/project-indu.jpg"
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
