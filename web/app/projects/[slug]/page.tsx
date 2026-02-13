import { notFound } from 'next/navigation';
import { projects } from '../projectData';
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

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return notFound();
    }

    // If summary-only project (no hero details), redirect or show coming soon?
    // For now, we only render if full details exist, else 404 or simple fallback.
    // In a real CMS, we'd ensure all published pages have data.
    if (!project.hero || !project.stats || !project.overview || !project.amenities || !project.features || !project.locationDetails) {
        // Fallback for projects that are just in the listing but don't have a full page yet.
        // You might want to remove this check if you populate all data.
        return (
            <div className="min-h-screen pt-24 flex items-center justify-center">
                <h1 className="text-2xl font-bold text-slate-800">Project Details Coming Soon</h1>
            </div>
        );
    }

    return (
        <VisitModalProvider>
            <main className="bg-white pb-24 lg:pb-0">
                <ProjectHero
                    title={project.title}
                    tagline={project.hero.tagline}
                    location={project.hero.location}
                    bgImage={project.hero.bgImage}
                    badges={project.hero.badges}
                />

                <ProjectStats stats={project.stats} />

                <ProjectOverview
                    title={project.overview.title}
                    description={
                        <p className="text-gray-600 mt-6 text-base leading-relaxed text-lg">
                            {project.overview.description}
                        </p>
                    }
                    details={project.overview.details}
                    brochureLink="#"
                    brochurePoints={project.overview.brochurePoints}
                />

                <ProjectExperiences data={project.experience} />

                <ProjectGallery images={project.gallery || []} />

                <ProjectAmenities
                    title={project.amenities.title}
                    amenities={project.amenities.list}
                />

                <ProjectFeatures
                    title={project.features.title}
                    features={project.features.list}
                    imageSrc={project.features.imageSrc}
                />

                <ProjectLocation
                    title={project.locationDetails.title}
                    landmarks={project.locationDetails.landmarks}
                />

                <ProjectStickyNav />
                <VisitModal />
            </main>
        </VisitModalProvider>
    );
}
