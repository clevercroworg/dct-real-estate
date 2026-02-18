'use client';

import { useState, useMemo } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ScheduleVisitButton from '@/components/ScheduleVisitButton';
import { motion, AnimatePresence } from 'framer-motion';

type Project = {
    title: string;
    location: string;
    summary: string;
    image: string;
    badge: string;
    status: string;
    slug: string;
    delay: number;
    rera?: string;
};

interface ProjectListingProps {
    projects: any[]; // Using any[] to simplify matching the raw data structure, or strictly type it if preferred
    initialFilter?: string;
}

export default function ProjectListing({ projects, initialFilter = 'All' }: ProjectListingProps) {
    const [filter, setFilter] = useState(initialFilter);

    // Format projects for the card component
    const allProjects = useMemo(() => {
        return projects.map((p) => ({
            title: p.title,
            location: p.location,
            description: p.summary,
            image: p.image,
            badge: p.badge, // Used for internal logic
            status: p.status, // Used for internal logic
            link: `/projects/${p.slug}`,
            delay: p.delay,
            rera: p.rera
        }));
    }, [projects]);

    // Filter logic
    const filteredProjects = useMemo(() => {
        if (filter === 'All') return allProjects;

        return allProjects.filter((project) => {
            if (filter === 'Ongoing') return project.status === 'Ongoing';
            if (filter === 'Completed') return project.status === 'Completed';
            if (filter === 'Upcoming') return project.status === 'Upcoming';
            if (filter === 'Commercial') {
                return project.badge === 'Commercial' ||
                    project.title.toLowerCase().includes('market') ||
                    project.title.toLowerCase().includes('commercial');
            }
            if (filter === 'Residential') {
                return project.badge === 'Residential' ||
                    project.badge === 'Premium Living' ||
                    project.badge === 'Luxury Villas';
            }
            return true;
        });
    }, [filter, allProjects]);

    const filters = ['All', 'Ongoing', 'Completed', 'Upcoming', 'Commercial', 'Residential'];

    return (
        <section className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <p className="text-xs uppercase tracking-[0.35em] text-[#C9A24D] mb-3">Project Showcase</p>
                        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#061B3A]">
                            All Projects
                        </h2>
                        <p className="text-slate-600 mt-3 text-lg">
                            Explore every opportunity we offer for investment, business, and quality living.
                        </p>
                    </div>
                    <ScheduleVisitButton />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-200">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === f
                                ? 'bg-[#061B3A] text-[#C9A24D] shadow-lg scale-105'
                                : 'bg-white text-slate-500 hover:bg-gray-100 hover:text-[#061B3A]'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectCard {...project} />
                                </motion.div>
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full py-20 text-center"
                            >
                                <p className="text-slate-400 text-lg">No projects found in this category.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
