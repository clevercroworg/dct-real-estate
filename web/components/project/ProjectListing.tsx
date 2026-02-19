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
    projects: any[];
    initialFilter?: string;
}

export default function ProjectListing({ projects, initialFilter = 'All' }: ProjectListingProps) {
    // Determine initial state based on prop. 
    // If initialFilter is a Status (Ongoing/Completed/Upcoming), set it. 
    // Otherwise default to All.
    const validStatuses = ['Ongoing', 'Completed', 'Upcoming'];
    const initialStatus = validStatuses.includes(initialFilter) ? initialFilter : 'All';
    // If initialFilter was 'Commercial' or 'Residential', we might want to map it to Type, 
    // but the current pages pass Status mostly. Commercial page passes 'Commercial', so let's handle that.
    const initialType = initialFilter === 'Commercial' || initialFilter === 'Residential' ? initialFilter : 'All';

    const [filters, setFilters] = useState({
        type: initialType,
        location: 'All',
        status: initialStatus,
        search: ''
    });

    // Extract unique options dynamically
    const options = useMemo(() => {
        const types = new Set<string>(['All']);
        const locations = new Set<string>(['All']);

        projects.forEach(p => {
            // Simplify types based on badge or manual mapping if needed. 
            // For now, using badge as is, but could normalize.
            if (p.badge) types.add(p.badge);

            // Extract meaningful location (e.g. city or main road) if full address is too long?
            // For now using full string to be safe, or we could try to just use distinct values found.
            if (p.location) locations.add(p.location);
        });

        // Hardcoded normalization for cleaner UI if badges are mixed (e.g., "Farmhouse Plots" -> "Farmhouse") 
        // For now, let's keep unique values from data to be accurate.
        return {
            types: Array.from(types).sort(),
            locations: Array.from(locations).sort(),
            statuses: ['All', 'Ongoing', 'Completed', 'Upcoming']
        };
    }, [projects]);

    // Handle Input Changes
    const handleFilterChange = (key: string, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    // Filter Logic
    const filteredProjects = useMemo(() => {
        return projects.map((p) => ({
            title: p.title,
            location: p.location,
            description: p.summary,
            image: p.image,
            badge: p.badge,
            status: p.status,
            link: `/projects/${p.slug}`,
            delay: p.delay,
            rera: p.rera
        })).filter(project => {
            // 1. Search Text (Title)
            if (filters.search && !project.title.toLowerCase().includes(filters.search.toLowerCase())) {
                return false;
            }

            // 2. Type Filter
            // We need to match the badge. "Residential" filter should match "Residential", "Premium Living", etc.
            if (filters.type !== 'All') {
                if (filters.type === 'Residential') {
                    // Smart grouping for Residential
                    const isResidential = project.badge === 'Residential' ||
                        project.badge === 'Premium Living' ||
                        project.badge === 'Luxury Villas';
                    if (!isResidential) return false;
                } else if (filters.type === 'Commercial') {
                    // Smart grouping for Commercial
                    const isCommercial = project.badge === 'Commercial' ||
                        project.title.toLowerCase().includes('market');
                    if (!isCommercial) return false;
                } else {
                    // Exact match for others like 'Farmhouse', 'Clubhouse'
                    if (project.badge !== filters.type) return false;
                }
            }

            // 3. Location Filter
            if (filters.location !== 'All' && project.location !== filters.location) {
                return false;
            }

            // 4. Status Filter
            if (filters.status !== 'All' && project.status !== filters.status) {
                return false;
            }

            return true;
        });
    }, [projects, filters]);

    return (
        <section className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <p className="text-xs uppercase tracking-[0.35em] text-[#C9A24D] mb-3">Project Showcase</p>
                        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#061B3A]">
                            Find Your Perfect Property
                        </h2>
                        <p className="text-slate-600 mt-3 text-lg">
                            Browse our portfolio by type, location, or status to find exactly what you're looking for.
                        </p>
                    </div>
                </div>

                {/* Advanced Filter Bar */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Project Type */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#061B3A] uppercase tracking-wider">Project Type</label>
                            <div className="relative">
                                <select
                                    value={filters.type}
                                    onChange={(e) => handleFilterChange('type', e.target.value)}
                                    className="w-full bg-slate-50 border border-gray-200 text-[#061B3A] text-sm rounded-lg focus:ring-[#C9A24D] focus:border-[#C9A24D] block p-3 appearance-none cursor-pointer"
                                >
                                    <option value="All">All Types</option>
                                    <option value="Residential">Residential</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Farmhouse">Farmhouse</option>
                                    {/* Add other specific types if needed, or stick to these main categories for cleanliness */}
                                    {options.types.filter(t => !['All', 'Residential', 'Commercial', 'Farmhouse', 'Farmhouse Plots'].includes(t)).map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#061B3A]">
                                    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#061B3A] uppercase tracking-wider">Location</label>
                            <div className="relative">
                                <select
                                    value={filters.location}
                                    onChange={(e) => handleFilterChange('location', e.target.value)}
                                    className="w-full bg-slate-50 border border-gray-200 text-[#061B3A] text-sm rounded-lg focus:ring-[#C9A24D] focus:border-[#C9A24D] block p-3 appearance-none cursor-pointer"
                                >
                                    {options.locations.map(loc => (
                                        <option key={loc} value={loc}>{loc === 'All' ? 'All Locations' : loc}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#061B3A]">
                                    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Status */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#061B3A] uppercase tracking-wider">Status</label>
                            <div className="relative">
                                <select
                                    value={filters.status}
                                    onChange={(e) => handleFilterChange('status', e.target.value)}
                                    className="w-full bg-slate-50 border border-gray-200 text-[#061B3A] text-sm rounded-lg focus:ring-[#C9A24D] focus:border-[#C9A24D] block p-3 appearance-none cursor-pointer"
                                >
                                    {options.statuses.map(status => (
                                        <option key={status} value={status}>{status === 'All' ? 'All Status' : status}</option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#061B3A]">
                                    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Search Input */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-[#061B3A] uppercase tracking-wider">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    className="w-full bg-slate-50 border border-gray-200 text-[#061B3A] text-sm rounded-lg focus:ring-[#C9A24D] focus:border-[#C9A24D] block pl-10 p-3"
                                    placeholder="Search by project name..."
                                    value={filters.search}
                                    onChange={(e) => handleFilterChange('search', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Count & active filter tags (Optional but nice) */}
                <div className="flex justify-between items-center mb-6">
                    <p className="text-slate-500 text-sm">
                        Showing <span className="font-bold text-[#061B3A]">{filteredProjects.length}</span> projects
                    </p>
                    {/* Reset Button */}
                    {(filters.type !== 'All' || filters.location !== 'All' || filters.status !== 'All' || filters.search) && (
                        <button
                            onClick={() => setFilters({ type: 'All', location: 'All', status: 'All', search: '' })}
                            className="text-sm text-[#C9A24D] hover:text-[#061B3A] font-medium underline underline-offset-4"
                        >
                            Reset Filters
                        </button>
                    )}
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
                                className="col-span-full py-20 text-center bg-white rounded-2xl border border-dashed border-gray-300"
                            >
                                <div className="mx-auto w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-[#061B3A]">No projects found</h3>
                                <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
                                <button
                                    onClick={() => setFilters({ type: 'All', location: 'All', status: 'All', search: '' })}
                                    className="mt-4 px-6 py-2 bg-[#061B3A] text-white rounded-full text-sm font-medium hover:bg-[#C9A24D] hover:text-[#061B3A] transition-colors"
                                >
                                    Clear all filters
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
