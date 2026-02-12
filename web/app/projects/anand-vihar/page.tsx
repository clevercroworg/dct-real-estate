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

export default function AnandViharPage() {
    return (
        <VisitModalProvider>
            <main className="bg-white pb-24 lg:pb-0">
                <ProjectHero
                    title="Anand Vihar"
                    tagline="Residential"
                    location="Akaltara"
                    bgImage="/images/project-vihar.jpg"
                    badges={["Residential", "Akaltara"]}
                />

                <ProjectStats
                    stats={[
                        {
                            icon: "leaf-outline",
                            label: "Lifestyle",
                            value: "Peaceful Living",
                            description: "A serene environment designed for comfortable family living."
                        },
                        {
                            icon: "home-outline",
                            label: "Type",
                            value: "Residential Plots",
                            description: "Developed plots ready for construction of your dream home."
                        },
                        {
                            icon: "navigate-outline",
                            label: "Location",
                            value: "Akaltara",
                            description: "Strategic location with easy access to daily necessities."
                        }
                    ]}
                />
                <ProjectOverview
                    title="Anand Vihar: Your Gateway to Peaceful Residential Living."
                    description={
                        <>
                            <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                                Anand Vihar in Akaltara offers a perfect blend of tranquility and connectivity.
                                This residential project is meticulously planned to provide a high-quality
                                living experience with well-developed infrastructure and essential amenities.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                Whether you are looking for an investment opportunity or a place to build
                                your home, Anand Vihar presents an ideal choice with its strategic location
                                and community-focused design.
                            </p>
                        </>
                    }
                    details={[
                        { label: "Project Type", value: "Residential Plotted Development" },
                        { label: "Status", value: "Ongoing" },
                        { label: "Location", value: "Akaltara" },
                        { label: "Highlights", value: "Developed Roads, Electricity" },
                    ]}
                    brochureLink="#"
                    brochurePoints={[
                        "Well-planned residential layout.",
                        "Proximity to schools and markets.",
                        "Peaceful and secure neighborhood."
                    ]}
                />
                <ProjectExperiences />
                <ProjectGallery />
                <ProjectAmenities
                    title="Essential Amenities for Comfortable Living"
                    amenities={[
                        { icon: "trail-sign-outline", name: "Wide Concrete Roads" },
                        { icon: "flash-outline", name: "Underground Electricity" },
                        { icon: "water-outline", name: "24/7 Water Supply" },
                        { icon: "flower-outline", name: "Landscaped Gardens" },
                        { icon: "shield-checkmark-outline", name: "Gated Community" },
                        { icon: "home-outline", name: "Community Temple" },
                        { icon: "bulb-outline", name: "Street Lights" },
                        { icon: "construct-outline", name: "Efficient Drainage" },
                    ]}
                />
                <ProjectFeatures
                    title="Designed for modern families"
                    features={[
                        "Secure and safe neighborhood",
                        "Pollution-free environment",
                        "Proximity to schools and markets",
                        "Planned infrastructure",
                        "Rainwater harvesting system",
                        "Vastu compliant layout",
                        "Clear title plots",
                        "Loan facility available"
                    ]}
                    imageSrc="/images/project-vihar.jpg"
                />
                <ProjectLocation
                    title="Convenicence at your doorstep"
                    landmarks={[
                        {
                            category: "Transport",
                            icon: "train-outline",
                            items: [
                                { name: "Akaltara Railway Stn", type: "Railway Station", distance: "2.0 km", time: "~5 mins" },
                                { name: "Bus Stand", type: "Public Transport", distance: "1.5 km", time: "~4 mins" },
                            ]
                        },
                        {
                            category: "Education",
                            icon: "school-outline",
                            items: [
                                { name: "Govt. School", type: "School", distance: "1.0 km", time: "~3 mins" },
                                { name: "College", type: "Higher Education", distance: "2.5 km", time: "~7 mins" },
                            ]
                        },
                        {
                            category: "Health",
                            icon: "medkit-outline",
                            items: [
                                { name: "CHC Akaltara", type: "Hospital", distance: "1.8 km", time: "~5 mins" },
                            ]
                        }
                    ]}
                />

                <ProjectStickyNav />
                <VisitModal />
            </main>
        </VisitModalProvider>
    );
}
