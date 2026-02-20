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
import { VisitModalProvider } from '@/components/project/VisitModalContext';
import ProjectStickyNav from '@/components/project/ProjectStickyNav';

export default function KrishnapuramPage() {
    return (
        <VisitModalProvider>
            <main className="bg-white">
                <ProjectHero
                    title="Krishnapuram"
                    tagline="Residential"
                    location="Near Bilha Turning, Raipur Road, Bilaspur"
                    bgImage="/images/verticals/vertical-residential.jpg"
                    badges={["Residential", "RERA Approved"]}
                />

                <ProjectStats
                    stats={[
                        {
                            icon: "home-outline",
                            label: "Community",
                            value: "Modern Housing",
                            description: "A fully developed residential colony with modern amenities."
                        },
                        {
                            icon: "checkmark-circle-outline",
                            label: "Approved",
                            value: "RERA Registered",
                            description: "Fully compliant project ensuring peace of mind."
                        },
                        {
                            icon: "location-outline",
                            label: "Location",
                            value: "Raipur Road",
                            description: "Near Bilha Turning, Raipur Road, Bilaspur."
                        }
                    ]}
                />
                <ProjectOverview
                    title="Krishnapuram: Modern Living on Raipur Road."
                    description={
                        <>
                            <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                                Krishnapuram is one of the finest developed RERA projects in Bilaspur,
                                specifically designed for modern families. It features 6 developed gardens,
                                2 overhead water tanks, and extensive roadside plantations with wide paved roads.
                            </p>
                            <p className="text-gray-600 mt-4 text-base leading-relaxed text-lg">
                                Located conveniently near Bilha Turning on Raipur Road, it offers a secure and
                                well-planned environment with top-notch infrastructure and a focus on community living.
                            </p>
                        </>
                    }
                    details={[
                        { label: "Project Type", value: "Residential Plotted Colony" },
                        { label: "Status", value: "Completed" },
                        { label: "Location", value: "Near Bilha Turning" },
                        { label: "RERA Approved", value: "Yes" },
                    ]}
                    brochureLink="#"
                    brochurePoints={[
                        "RERA approved project.",
                        "6 Developed Gardens & 2 Overhead Tanks.",
                        "Wide internal roads and electrification."
                    ]}
                />
                <ProjectExperiences />
                <ProjectGallery
                    images={[
                        "/images/projects/krishnapuram/gallery/Krishnapuram - Gallery1.png",
                        "/images/projects/krishnapuram/gallery/Krishnapuram - Gallery2.jpeg"
                    ]}
                />
                <ProjectAmenities
                    title="Complete Family Living"
                    amenities={[
                        { icon: "business-outline", name: "Community Hall" },
                        { icon: "flower-outline", name: "6 Landscaped Parks" },
                        { icon: "happy-outline", name: "Kids Play Area" },
                        { icon: "shield-checkmark-outline", name: "Gated Security" },
                        { icon: "trail-sign-outline", name: "Damar Roads" },
                        { icon: "flash-outline", name: "Underground Electrification" },
                        { icon: "cart-outline", name: "Daily Needs Shops" },
                        { icon: "water-outline", name: "2 Overhead Water Tanks" },
                    ]}
                />
                <ProjectFeatures
                    title="A modern lifestyle awaits"
                    features={[
                        "RERA approved project",
                        "Loan facility from all major banks",
                        "Modern sewage treatment plant",
                        "Rainwater harvesting",
                        "Vastu compliant plots",
                        "Peaceful residential area",
                        "Nearby schools and colleges",
                        "Excellent connectivity to highway"
                    ]}
                    imageSrc="/images/verticals/vertical-residential.jpg"
                />
                <ProjectLocation
                    title="Prime Location on Raipur Road"
                    landmarks={[
                        {
                            category: "Transport",
                            icon: "train-outline",
                            items: [
                                { name: "Bilha Railway Stn", type: "Railway Station", distance: "3.5 km", time: "~7 mins" },
                                { name: "Chakarbhatha Airport", type: "Airport", distance: "10 km", time: "~18 mins" },
                                { name: "Bilaspur Rly Stn", type: "Junction", distance: "12 km", time: "~20 mins" },
                            ]
                        },
                        {
                            category: "Healthcare",
                            icon: "medkit-outline",
                            items: [
                                { name: "CIMS Hospital", type: "Hospital", distance: "7 km", time: "~15 mins" },
                                { name: "Apollo Hospital", type: "Hospital", distance: "13 km", time: "~25 mins" },
                            ]
                        },
                        {
                            category: "Education",
                            icon: "school-outline",
                            items: [
                                { name: "LCIT College", type: "College", distance: "4.5 km", time: "~10 mins" },
                            ]
                        },
                        {
                            category: "Shopping",
                            icon: "cart-outline",
                            items: [
                                { name: "Magneto Mall", type: "Mall", distance: "9 km", time: "~15 mins" },
                            ]
                        },
                    ]}
                />

                <VisitModal />
                <ProjectStickyNav />
            </main>
        </VisitModalProvider>
    );
}
