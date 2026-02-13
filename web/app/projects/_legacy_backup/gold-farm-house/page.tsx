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

export default function GoldFarmHousePage() {
    return (
        <VisitModalProvider>
            <main className="bg-white pb-24 lg:pb-0">
                <ProjectHero
                    title="Gold Farm House"
                    tagline="Farmhouse Plots"
                    location="Vill. Jarondha, Takhatpur-Mungeli Road, Bilaspur"
                    bgImage="/images/projects/project-arpa.jpg"
                    badges={["Farmhouse Plots", "Takhatpur-Mungeli Road"]}
                />

                <ProjectStats
                    stats={[
                        {
                            icon: "leaf-outline",
                            label: "Nature",
                            value: "Farm Living",
                            description: "Reconnect with nature in your own private farmhouse."
                        },
                        {
                            icon: "map-outline",
                            label: "Space",
                            value: "Expansive Plots",
                            description: "Large plots perfect for building a weekend retreat."
                        },
                        {
                            icon: "location-outline",
                            label: "Location",
                            value: "Takhatpur Road",
                            description: "Vill. Jarondha, Takhatpur-Mungeli Road, Bilaspur."
                        }
                    ]}
                />
                <ProjectOverview
                    title="Gold Farm House: Your Private Retreat Away from the City."
                    description={
                        <>
                            <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                                At Vill. Jarondha, Takhatpur-Mungeli Road, Gold Farm House is located at a prime location
                                offering spacious plots that promise great returns and moments of peace.
                                Escape the chaos of urban life and immerse yourself in the calm of nature,
                                where you can design your leisure space exactly as you envision it.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                Whether for a weekend home, organic farming, or a quiet getaway, Gold Farm
                                provides a secure and serene environment. The project is fully approved by T&CP.
                            </p>
                        </>
                    }
                    details={[
                        { label: "Project Type", value: "Farmhouse Plots" },
                        { label: "Status", value: "Ongoing" },
                        { label: "Location", value: "Vill. Jarondha, Takhatpur Rd" },
                        { label: "Approvals", value: "T&CP Approved" },
                    ]}
                    brochureLink="#"
                    brochurePoints={[
                        "Serene and pollution-free environment.",
                        "Ideal for weekend homes and relaxation.",
                        "Secure gated community feel."
                    ]}
                />
                <ProjectExperiences />
                <ProjectGallery images={[]} />
                <ProjectAmenities
                    title="Designed for Nature Lovers"
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
                    title="Relax in the lap of nature"
                    features={[
                        "Pollution-free zone",
                        "Ideal for organic farming",
                        "Quiet and peaceful surroundings",
                        "Perfect for weekend getaways",
                        "Investment with high appreciation",
                        "Customizable plot sizes",
                        "Connect with nature",
                        "Stress-free living environment"
                    ]}
                    imageSrc="/images/projects/project-gold.jpg"
                />
                <ProjectLocation
                    title="Away from the hustle, close to nature"
                    landmarks={[
                        {
                            category: "Nearby",
                            icon: "navigate-outline",
                            items: [
                                { name: "Takhatpur", type: "Town", distance: "5.0 km", time: "~8 mins" },
                                { name: "Mungeli", type: "District HQ", distance: "20.0 km", time: "~30 mins" },
                            ]
                        },
                        {
                            category: "Connectivity",
                            icon: "car-outline",
                            items: [
                                { name: "Bilaspur", type: "City", distance: "25.0 km", time: "~40 mins" },
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
