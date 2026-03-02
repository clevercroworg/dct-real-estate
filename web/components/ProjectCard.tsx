import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
    title: string;
    location: string;
    description: string;
    image: string;
    status: string;
    badge?: string;
    link: string;
    rera?: string;
    delay?: number;
}

export default function ProjectCard({
    title,
    location,
    description,
    image,
    status,
    badge,
    link,
    rera,
    delay = 0,
}: ProjectCardProps) {
    return (
        <article
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {badge && (
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C9A24D] text-white">
                        {badge}
                    </span>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
            <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-[#061B3A] group-hover:text-[#C9A24D] transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                    <ion-icon name="location-outline" class="text-[#C9A24D]"></ion-icon>
                    {location}
                </p>
                <p className="text-gray-600 mt-4 text-sm leading-relaxed line-clamp-2">
                    {description}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:flex-wrap justify-between gap-4 border-t border-gray-100 pt-4">
                    <span className="text-xs uppercase tracking-wider text-[#C9A24D] font-medium leading-relaxed break-words max-w-[90%] sm:max-w-[50%]">
                        {rera || status}
                    </span>
                    <Link
                        href={link}
                        className="text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-[#061B3A] text-white hover:bg-[#C9A24D] hover:text-[#061B3A] transition-all inline-flex justify-center items-center gap-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto shrink-0 ml-auto"
                    >
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                        View Project
                    </Link>
                </div>
            </div>
        </article>
    );
}
