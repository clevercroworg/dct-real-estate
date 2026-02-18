import Link from 'next/link';
import Image from 'next/image';

type ExperienceItem = {
    title: string;
    description: string;
    image: string;
};

type ExperienceData = {
    title: string;
    description?: string;
    items?: ExperienceItem[];
};

type Props = {
    data?: ExperienceData;
};

export default function ProjectExperiences({ data }: Props) {
    // If no data or no description/items, show CTA fallback
    const hasContent = data && (data.description || (data.items && data.items.length > 0));

    if (!hasContent) {
        return (
            <section className="py-16 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="font-heading text-3xl font-semibold text-[#061B3A] mb-6">
                        Interested in this project?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Contact us today to learn more about the unique experiences and lifestyle this project offers.
                    </p>
                    <Link href="/contact" className="bg-[#061B3A] text-white px-8 py-3 rounded hover:bg-[#C9A24D] transition-colors inline-flex items-center gap-2">
                        <ion-icon name="call-outline"></ion-icon>
                        Speak to an advisor
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                    <div className="max-w-3xl">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] mb-3">Signature Experiences</p>
                        <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#061B3A] mb-4">
                            {data?.title}
                        </h2>
                        {data?.description && (
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {data.description}
                            </p>
                        )}
                    </div>
                    <Link href="/contact" className="text-sm font-medium text-[#061B3A] hover:text-[#C9A24D] inline-flex items-center gap-2 transition-colors shrink-0">
                        <ion-icon name="call-outline"></ion-icon>
                        Speak to an advisor
                    </Link>
                </div>

                {data?.items && (
                    <div className="grid lg:grid-cols-3 gap-8 mt-12">
                        {data.items.map((item, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-3xl p-7 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-full h-48 rounded-2xl overflow-hidden bg-[#F1F5F9] mb-6 relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        className="object-cover hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="font-heading text-xl font-semibold text-[#061B3A]">{item.title}</h3>
                                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
