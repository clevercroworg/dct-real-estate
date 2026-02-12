export default function ProjectLocation() {
    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col gap-3 mb-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D]">Nearby Places</p>
                    <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#061B3A]">Everything within easy reach</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Hospitals */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                        <h3 className="font-heading text-xl font-semibold text-[#061B3A] mb-6 flex items-center gap-2">
                            {/* @ts-expect-error: ion-icon custom element */}
                            <ion-icon name="medkit-outline" class="text-[#C9A24D]"></ion-icon>
                            Hospitals
                        </h3>
                        <div className="space-y-6 text-sm text-gray-600">
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">Bilaspur District Hospital</p>
                                    <p className="text-xs text-gray-500 mt-1">General Hospital</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">10.5 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~15 mins</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">Medicover Hospital</p>
                                    <p className="text-xs text-gray-500 mt-1">Private Hospital</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">13.0 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~20 mins</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">Shree Sai Hospital</p>
                                    <p className="text-xs text-gray-500 mt-1">Multi-specialty</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">14.3 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~22 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shopping */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                        <h3 className="font-heading text-xl font-semibold text-[#061B3A] mb-6 flex items-center gap-2">
                            {/* @ts-expect-error: ion-icon custom element */}
                            <ion-icon name="cart-outline" class="text-[#C9A24D]"></ion-icon>
                            Shopping
                        </h3>
                        <div className="space-y-6 text-sm text-gray-600">
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">City Mall</p>
                                    <p className="text-xs text-gray-500 mt-1">Shopping Mall</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">7.5 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~11 mins</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">Reliance Smart</p>
                                    <p className="text-xs text-gray-500 mt-1">Supermarket</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">12.0 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~18 mins</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">The Big Bazaar</p>
                                    <p className="text-xs text-gray-500 mt-1">Retail Store</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">15.8 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~24 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Schools */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                        <h3 className="font-heading text-xl font-semibold text-[#061B3A] mb-6 flex items-center gap-2">
                            {/* @ts-expect-error: ion-icon custom element */}
                            <ion-icon name="school-outline" class="text-[#C9A24D]"></ion-icon>
                            Schools
                        </h3>
                        <div className="space-y-6 text-sm text-gray-600">
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">St. Xavier's School</p>
                                    <p className="text-xs text-gray-500 mt-1">Primary School</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">4.2 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~6 mins</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">Bilaspur Intl. School</p>
                                    <p className="text-xs text-gray-500 mt-1">Secondary School</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">8.6 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~13 mins</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">Jawahar Navodaya</p>
                                    <p className="text-xs text-gray-500 mt-1">Residential</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">10.0 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~15 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Restaurants */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                        <h3 className="font-heading text-xl font-semibold text-[#061B3A] mb-6 flex items-center gap-2">
                            {/* @ts-expect-error: ion-icon custom element */}
                            <ion-icon name="restaurant-outline" class="text-[#C9A24D]"></ion-icon>
                            Restaurants
                        </h3>
                        <div className="space-y-6 text-sm text-gray-600">
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">The Spice Hut</p>
                                    <p className="text-xs text-gray-500 mt-1">Indian Restaurant</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">5.3 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~8 mins</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">Rooftop Restaurant</p>
                                    <p className="text-xs text-gray-500 mt-1">Multi-cuisine</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">9.1 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~14 mins</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-between gap-4 pb-4 border-b border-gray-50 last:border-0 last:pb-0">
                                <div>
                                    <p className="font-medium text-[#061B3A] text-base">Barbeque Nation</p>
                                    <p className="text-xs text-gray-500 mt-1">BBQ Restaurant</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-medium text-[#061B3A]">11.2 km</p>
                                    <p className="text-xs text-gray-500 mt-1">~17 mins</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                        <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Connectivity</h4>
                        <p className="font-semibold text-[#061B3A] text-lg">Bilaspur</p>
                        <p className="text-sm text-gray-600 mt-1">25 km • ~37 mins</p>
                        <p className="text-xs text-gray-500 mt-2 bg-gray-100 px-3 py-1 rounded-full">Integrated living hub</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                        <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Connectivity</h4>
                        <p className="font-semibold text-[#061B3A] text-lg">Raipur Smart City</p>
                        <p className="text-sm text-gray-600 mt-1">90 km • ~2 hrs 15 mins</p>
                        <p className="text-xs text-gray-500 mt-2 bg-gray-100 px-3 py-1 rounded-full">Smart city development</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                        <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Connectivity</h4>
                        <p className="font-semibold text-[#061B3A] text-lg">Rural Residential</p>
                        <p className="text-sm text-gray-600 mt-1">3 km • ~4 mins</p>
                        <p className="text-xs text-gray-500 mt-2 bg-gray-100 px-3 py-1 rounded-full">Local neighborhood</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
