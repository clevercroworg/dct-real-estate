
import Link from 'next/link';

export default function Verticals() {
    const verticals = [
        { title: 'Residential', icon: 'home-outline', image: '/images/vertical-residential.jpg', link: '/projects/residential' },
        { title: 'Commercial', icon: 'business-outline', image: '/images/vertical-commercial.jpg', link: '/projects/commercial' },
        { title: 'Plotted Developments', icon: 'map-outline', image: '/images/vertical-plotted.jpg', link: '/projects/plotted' },
        { title: 'Villas', icon: 'home-sharp', image: '/images/vertical-villas.jpg', link: '/projects/villas' },
        { title: 'Farmhouses', icon: 'leaf-outline', image: '/images/vertical-farmhouse.jpg', link: '/projects/farmhouses' },
        { title: 'Apartments', icon: 'layers-outline', image: '/images/vertical-apartments.jpg', link: '/projects/apartments' },
    ];

    return (
        <section className="bg-white py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* SECTION HEADING */}
                <div className="max-w-4xl mb-20 reveal verticals-heading">
                    <h2 className="font-heading text-[38px] lg:text-5xl font-[900] text-brand-blue leading-tight">
                        Our <span className="text-brand-gold">Verticals</span>
                    </h2>
                </div>

                {/* VERTICALS GRID */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {verticals.map((vertical, index) => (
                        <Link
                            key={index}
                            href={vertical.link}
                            className="group relative block h-[300px] lg:h-[380px] rounded-2xl overflow-hidden reveal"
                        >
                            <img
                                src={vertical.image}
                                alt={vertical.title}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#011E51]/85 via-[#011E51]/35 to-transparent flex flex-col justify-end items-center pb-10 text-center text-white">

                                <ion-icon
                                    name={vertical.icon}
                                    class="text-3xl mb-2.5 text-brand-gold transition-transform duration-300 group-hover:-translate-y-1"
                                ></ion-icon>
                                <h3 className="font-heading text-[17px] lg:text-[20px] font-semibold tracking-wider uppercase">
                                    {vertical.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
