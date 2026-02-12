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

export default function ChitvanFarmPage() {
    return (
        <VisitModalProvider>
            <main className="bg-white pb-24 lg:pb-0">
                <ProjectHero
                    title="Chitvan Farmhouse"
                    tagline="Farmhouse"
                    location="Mohda Mod, Bhojpuri Toll Plaza, NH 130, Bilaspur (C.G.)"
                    bgImage="/images/chitvan-farmhouse-hero.png"
                    badges={["Integrated Farmhouse Living", "Bilaspur – Raipur NH 130"]}
                />

                <ProjectStats
                    stats={[
                        {
                            icon: "leaf-outline",
                            label: "Signature",
                            value: "Living Ecosystem",
                            description: "Greens, water, and open spaces designed to breathe."
                        },
                        {
                            icon: "home-outline",
                            label: "Community",
                            value: "Farmhouse Living",
                            description: "Private plots with shared wellness and social spaces."
                        },
                        {
                            icon: "navigate-outline",
                            label: "Connectivity",
                            value: "NH 130 Corridor",
                            description: "Mohda Mod, Bhojpuri Toll Plaza, Bilaspur."
                        }
                    ]}
                />
                <ProjectOverview
                    title="Chitvan is a modern farmhouse address crafted for quiet luxury."
                    description={
                        <>
                            <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                                Welcome to Chitvan, the latest addition to DCT’s portfolio. Nestled on
                                the Mohda Mod stretch of the Bilaspur–Raipur National Highway 130, this
                                farmhouse community is designed as a complete sensory experience with
                                lush green gardens, social spaces, and outdoor living.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                Chitvan embraces difference by bringing an unconventional lifestyle
                                closer to Bilaspur and Raipur. It is an evolving, integrated living
                                destination designed for those who value space, greenery, and a
                                peaceful retreat without losing connectivity.
                            </p>
                        </>
                    }
                    details={[
                        { label: "Project Type", value: "Farmhouse Community" },
                        { label: "Status", value: "Open for Enquiry" },
                        { label: "Corridor", value: "Bilaspur – Raipur NH 130" },
                        { label: "Location", value: "Mohda Mod, Bhojpuri Toll Plaza" },
                    ]}
                    brochureLink="/brochures/chitvan-farm.pdf"
                    brochurePoints={[
                        "Clubhouse, swimming pool, and community hubs.",
                        "Open-air gym and yoga center in nature.",
                        "Secured campus with dedicated guard room."
                    ]}
                />
                <ProjectExperiences />
                <ProjectGallery />
                <ProjectAmenities
                    title="Designed for everyday ease"
                    amenities={[
                        { icon: "enter-outline", name: "Grand Entrance Gate" },
                        { icon: "business-outline", name: "Grand Clubhouse" },
                        { icon: "water-outline", name: "Swimming Pool" },
                        { icon: "happy-outline", name: "Kids Play Area" },
                        { icon: "flash-outline", name: "Individual Transformer" },
                        { icon: "barbell-outline", name: "Open-Air Gym" },
                        { icon: "trail-sign-outline", name: "Wide Roads" },
                        { icon: "leaf-outline", name: "Yoga Center" },
                        { icon: "leaf-outline", name: "Plantation" },
                        { icon: "flower-outline", name: "Lush Green Garden" },
                        { icon: "shield-checkmark-outline", name: "Secured Campus" },
                        { icon: "lock-closed-outline", name: "Security Guard Room" },
                    ]}
                />
                <ProjectFeatures
                    title="Designed for elevated farmhouse living"
                    features={[
                        "State-of-the-art fitness center",
                        "Luxurious swimming pools",
                        "Spacious parking area",
                        "Panoramic green views",
                        "Dedicated children’s play zone",
                        "Beautifully landscaped gardens",
                        "Premium modular kitchen setup",
                        "Advanced fire safety measures",
                        "Elegant high-quality doors",
                        "Well-designed storage spaces",
                        "Polished marble flooring"
                    ]}
                    imageSrc="/images/chitvan-features.png"
                />
                <ProjectLocation
                    title="Everything within easy reach"
                    landmarks={[
                        {
                            category: "Hospitals",
                            icon: "medkit-outline",
                            items: [
                                { name: "Bilaspur District Hospital", type: "General Hospital", distance: "10.5 km", time: "~15 mins" },
                                { name: "Medicover Hospital", type: "Private Hospital", distance: "13.0 km", time: "~20 mins" },
                                { name: "Shree Sai Hospital", type: "Multi-specialty", distance: "14.3 km", time: "~22 mins" }
                            ]
                        },
                        {
                            category: "Shopping",
                            icon: "cart-outline",
                            items: [
                                { name: "City Mall", type: "Shopping Mall", distance: "7.5 km", time: "~11 mins" },
                                { name: "Reliance Smart", type: "Supermarket", distance: "12.0 km", time: "~18 mins" },
                                { name: "The Big Bazaar", type: "Retail Store", distance: "15.8 km", time: "~24 mins" }
                            ]
                        },
                        {
                            category: "Schools",
                            icon: "school-outline",
                            items: [
                                { name: "St. Xavier's School", type: "Primary School", distance: "4.2 km", time: "~6 mins" },
                                { name: "Bilaspur Intl. School", type: "Secondary School", distance: "8.6 km", time: "~13 mins" },
                                { name: "Jawahar Navodaya", type: "Residential", distance: "10.0 km", time: "~15 mins" }
                            ]
                        },
                        {
                            category: "Restaurants",
                            icon: "restaurant-outline",
                            items: [
                                { name: "The Spice Hut", type: "Indian Restaurant", distance: "5.3 km", time: "~8 mins" },
                                { name: "Rooftop Restaurant", type: "Multi-cuisine", distance: "9.1 km", time: "~14 mins" },
                                { name: "Barbeque Nation", type: "BBQ Restaurant", distance: "11.2 km", time: "~17 mins" }
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
