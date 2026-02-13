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

export default function BilaspurTextileMarketPage() {
    return (
        <VisitModalProvider>
            <main className="bg-white pb-24 lg:pb-0">
                <ProjectHero
                    title="Bilaspur Textile Market"
                    tagline="Commercial"
                    location="Parsada, Raipur Road, Bilaspur"
                    bgImage="/images/verticals/vertical-commercial.jpg"
                    badges={["Commercial", "Raipur Road"]}
                />

                <ProjectStats
                    stats={[
                        {
                            icon: "shirt-outline",
                            label: "Industry",
                            value: "Textile Hub",
                            description: "Dedicated marketplace for the textile and garment industry."
                        },
                        {
                            icon: "people-outline",
                            label: "Traffic",
                            value: "High Visibility",
                            description: "Designed to attract bulk buyers and retail customers."
                        },
                        {
                            icon: "location-outline",
                            label: "Location",
                            value: "Parsada",
                            description: "Ideally located in Parsada, Raipur Road, Bilaspur."
                        }
                    ]}
                />
                <ProjectOverview
                    title="Bilaspur Textile Market: The Future of Textile Business."
                    description={
                        <>
                            <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                                The Bilaspur Textile Market in Parsada is a specialized commercial hub created specifically
                                for the textile and garment trade. It organizes the industry into a modern,
                                accessible, and facility-rich environment.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                Offering purpose-built shops and godowns, this market captures the growing demand
                                in the region and provides a centralized location for wholesalers and retailers alike.
                            </p>
                        </>
                    }
                    details={[
                        { label: "Project Type", value: "Commercial Market" },
                        { label: "Status", value: "Completed" },
                        { label: "Location", value: "Parsada, Raipur Road" },
                        { label: "Focus", value: "Textiles & Garments" },
                    ]}
                    brochureLink="#"
                    brochurePoints={[
                        "Dedicated layout for textile businesses.",
                        "Loading and unloading facilities.",
                        "Strategic location for logistics."
                    ]}
                />
                <ProjectExperiences />
                <ProjectGallery
                    images={[
                        "/images/projects/bilaspur-textile-market/gallery/BilaspurTextileMarket - Galler1.png",
                        "/images/projects/bilaspur-textile-market/gallery/BilaspurTextileMarket - Galler2.jpeg"
                    ]}
                />
                <ProjectAmenities
                    title="Business Ready Infrastructure"
                    amenities={[
                        { icon: "cube-outline", name: "Loading/Unloading Bay" },
                        { icon: "car-outline", name: "Customer Parking" },
                        { icon: "scale-outline", name: "Weigh Bridge" },
                        { icon: "restaurant-outline", name: "Canteen Facility" },
                        { icon: "shield-checkmark-outline", name: "24/7 Security" },
                        { icon: "people-outline", name: "Rest Rooms" },
                        { icon: "wifi-outline", name: "Internet Connectivity" },
                        { icon: "bulb-outline", name: "Street Lighting" },
                    ]}
                />
                <ProjectFeatures
                    title="Optimized for Textile Trade"
                    features={[
                        "Dedicated godowns and shops",
                        "Wide roads for heavy vehicles",
                        "Fire safety compliant",
                        "Bank and ATM facility nearby",
                        "Transport nagar proximity",
                        "Strategic location for logistics",
                        "Association support",
                        "Growth oriented ecosystem"
                    ]}
                    imageSrc="/images/projects/project-textile.jpg"
                />
                <ProjectLocation
                    title="Hub of Commerce"
                    landmarks={[
                        {
                            category: "Transport",
                            icon: "train-outline",
                            items: [
                                { name: "Bilha Railway Station", type: "Railway Station", distance: "2.8 km", time: "~5 mins" },
                                { name: "Bilaspur Railway Station", type: "Railway Station", distance: "11.5 km", time: "~15 mins" },
                                { name: "Parsada Bus Stop", type: "Bus Stop", distance: "1.0 km", time: "~2 mins" },
                                { name: "Chakarbhatha Airport", type: "Airport", distance: "9.5 km", time: "~15 mins" },
                            ]
                        },
                        {
                            category: "Health",
                            icon: "medkit-outline",
                            items: [
                                { name: "CIMS Hospital", type: "Hospital", distance: "8.0 km", time: "~12 mins" },
                                { name: "Apollo Hospital", type: "Hospital", distance: "10.0 km", time: "~18 mins" },
                            ]
                        },
                        {
                            category: "Commercial",
                            icon: "cart-outline",
                            items: [
                                { name: "City Mall 36", type: "Shopping Mall", distance: "8.5 km", time: "~14 mins" },
                                { name: "Local Market", type: "Market", distance: "1.5 km", time: "~3 mins" },
                            ]
                        },
                        {
                            category: "Education",
                            icon: "school-outline",
                            items: [
                                { name: "LCIT College", type: "College", distance: "3.2 km", time: "~6 mins" },
                            ]
                        },
                        {
                            category: "Others",
                            icon: "business-outline",
                            items: [
                                { name: "Bilaspur High Court", type: "Government Office", distance: "10.0 km", time: "~20 mins" },
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
