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
import ProjectStickyNav from '@/components/project/ProjectStickyNav';

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
        <main className="bg-white pb-24 lg:pb-0">
            <ProjectHero
                title={project.title}
                tagline={project.hero.tagline}
                location={project.hero.location}
                bgImage={project.hero.bgImage}
                badges={project.hero.badges}
                videoUrl={(project as any).videoUrl}
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
                brochureLink={project.hero.brochureLink || "#"}
                brochurePoints={project.overview.brochurePoints}
            />

            <ProjectExperiences data={project.experience} />

            <ProjectGallery
                title={`${project.title} Walkthrough`}
                images={project.gallery || []}
                videoUrl={(project as any).videoUrl}
            />

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

            {/* Map Embed Section */}
            <section className="py-16 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 tracking-tight">
                            Project Location Map
                        </h2>
                        <p className="text-slate-600 text-lg">
                            {project.location}
                        </p>
                    </div>
                    <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                            title={`${project.title} Location Map`}
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(project.title + ', ' + project.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            <ProjectStickyNav projectName={project.title} />
        </main>
    );
}
