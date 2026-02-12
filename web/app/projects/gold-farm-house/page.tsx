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
                    bgImage="/images/project-arpa.jpg"
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
                                Gold Farm House offers an exclusive opportunity to own a piece of serenity.
                                Located on the Takhatpur-Mungeli Road, this project features spacious
                                farmhouse plots ideal for weekend homes, organic farming, or a quiet getaway.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                Escape the chaos of urban life and immerse yourself in the calm of nature
                                at Gold Farm House, where you can design your leisure space exactly as you envision it.
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
                <ProjectGallery />
                <ProjectAmenities
                    title="Designed for Nature Lovers"
                    amenities={[
                        { icon: "leaf-outline", name: "Dense Plantation" },
                        { icon: "trail-sign-outline", name: "Gravel Roads" },
                        { icon: "shield-checkmark-outline", name: "Fenced Boundary" },
                        { icon: "water-outline", name: "Water Connection" },
                        { icon: "flash-outline", name: "Electricity" },
                        { icon: "home-outline", name: "Farmhouse Plots" },
                        { icon: "lock-closed-outline", name: "Security Gate" },
                        { icon: "images-outline", name: "Scenic Views" },
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
                    imageSrc="/images/project-gold.jpg"
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
