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
                    bgImage="/images/projects/project-vihar.jpg"
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
                        <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                            Welcome to Anand Vihar, Akaltara – a premium residential plot project designed for modern living. Strategically located with excellent connectivity, Anand Vihar offers well-planned plots, wide roads, and green surroundings. Perfect for building your dream home or securing a smart investment, this project combines comfort, convenience, and long-term value. Experience a lifestyle that blends nature with progress at Anand Vihar, Akaltara.
                        </p>
                    }
                    details={[
                        { label: "Project Type", value: "Residential Plotted Development" },
                        { label: "Status", value: "Ongoing" },
                        { label: "Location", value: "Akaltara" },
                        { label: "Highlights", value: "Grand Entrance, Clubhouse, Swimming Pool" },
                    ]}
                    brochureLink="#"
                    brochurePoints={[
                        "Grand Entrance Gate & Secured Campus",
                        "Clubhouse & Swimming Pool",
                        "Kids Play Area & Open-Air Gym",
                        "Wide Roads & Underground Electricity"
                    ]}
                />
                <ProjectExperiences />
                <ProjectGallery
                    images={[
                        "/images/projects/anand-vihar/gallery/AnandVihar - Gallery1.jpeg",
                        "/images/projects/anand-vihar/gallery/AnandVihar - Gallery2.jpeg",
                        "/images/projects/anand-vihar/gallery/AnandVihar - Gallery3.jpeg",
                        "/images/projects/anand-vihar/gallery/AnandVihar - Gallery4.jpeg",
                        "/images/projects/anand-vihar/gallery/AnandVihar - Gallery5.jpeg",
                        "/images/projects/anand-vihar/gallery/AnandVihar - Gallery6.jpeg",
                        "/images/projects/anand-vihar/gallery/AnandVihar - Gallery7.jpeg",
                        "/images/projects/anand-vihar/gallery/AnandVihar - Gallery8.jpeg"
                    ]}
                />
                <ProjectAmenities
                    title="Essential Amenities for Comfortable Living"
                    amenities={[
                        { icon: "arch-outline", name: "Grand Entrance Gate" },
                        { icon: "business-outline", name: "Grand Clubhouse" },
                        { icon: "water-outline", name: "Swimming Pool" },
                        { icon: "happy-outline", name: "Kids Play Area" },
                        { icon: "flash-outline", name: "Individual Transformer" },
                        { icon: "fitness-outline", name: "Open-Air Gym" },
                        { icon: "trail-sign-outline", name: "Wide Roads" },
                        { icon: "body-outline", name: "Yoga Center" },
                        { icon: "leaf-outline", name: "Plantation" },
                        { icon: "flower-outline", name: "Lush Green Garden" },
                        { icon: "shield-checkmark-outline", name: "Secured Campus" },
                        { icon: "lock-closed-outline", name: "Security Guard Room" },
                    ]}
                />
                <ProjectFeatures
                    title="Property Features"
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
                    imageSrc="/images/projects/project-vihar.jpg"
                />
                <ProjectLocation
                    title="Convenicence at your doorstep"
                    landmarks={[
                        {
                            category: "Health",
                            icon: "medkit-outline",
                            items: [
                                { name: "CIMS Hospital", type: "General Hospital", distance: "5.5 km", time: "~10 mins" },
                                { name: "Apollo Hospital", type: "Multi-specialty Hospital", distance: "12 km", time: "~20 mins" },
                            ]
                        },
                        {
                            category: "Shopping",
                            icon: "cart-outline",
                            items: [
                                { name: "36 Mall", type: "Shopping Mall", distance: "6.0 km", time: "~12 mins" },
                                { name: "Magneto Mall", type: "Shopping Mall", distance: "5.5 km", time: "~10 mins" },
                            ]
                        },
                        {
                            category: "Education",
                            icon: "school-outline",
                            items: [
                                { name: "LCIT College & School", type: "College & School", distance: "0.0 km", time: "~1 mins" },
                                { name: "DPS School", type: "Primary & Secondary School", distance: "2.0 km", time: "~5 mins" },
                            ]
                        },
                        {
                            category: "Restaurant",
                            icon: "restaurant-outline",
                            items: [
                                { name: "AS Fun", type: "Restaurant", distance: "1.0 km", time: "~3 mins" },
                            ]
                        },
                        {
                            category: "Others",
                            icon: "navigate-outline",
                            items: [
                                { name: "Transport Nagar", type: "Commercial Area", distance: "1.0 km", time: "~3 mins" },
                                { name: "High Court", type: "Government Building", distance: "1.0 km", time: "~3 mins" },
                                { name: "Nehru Chowk", type: "Public Square", distance: "4.0 km", time: "~6 mins" },
                                { name: "New Bus Stand", type: "Bus Terminal", distance: "1.0 km", time: "~3 mins" },
                                { name: "SECL Head Quarter", type: "Corporate Office", distance: "10 km", time: "~15 mins" },
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
