const Packages = () => {
    const packs = [
        {
            name: 'الباقة الأساسية',
            speed: '10 Mbps',
            price: '20',
            features: ['سرعة مستقرة', 'دعم فني 24/7', 'تحميل غير محدود'],
            recommended: false
        },
        {
            name: 'الباقة المتقدمة',
            speed: '50 Mbps',
            price: '45',
            features: ['سرعة عالية', 'أولوية في الدعم', 'مناسبة للعائلات'],
            recommended: true
        },
        {
            name: 'الباقة الفائقة',
            speed: '100 Mbps',
            price: '70',
            features: ['أقصى سرعة', 'IP خاص مجاني', 'مثالية للأعمال'],
            recommended: false
        },
    ];

    return (
        <section id="packages" className="relative py-24 overflow-hidden bg-[#f8fafc]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 -left-24 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-[Expo-bold] font-extrabold text-gray-900 mb-4">
                        اختر خطتك المثالية
                    </h2>
                    <p className="text-gray-500 font-[Expo-arabic] max-w-xl mx-auto">
                        باقات متنوعة مصممة خصيصاً لتلبية احتياجاتك، من الاستخدام المنزلي البسيط إلى إدارة الأعمال الضخمة.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {packs.map((p, index) => (
                        <div
                            key={index}
                            className={`relative bg-white font-[Expo-arabic] p-10 rounded-3xl shadow-xl transition-all duration-500 group hover:-translate-y-3 ${p.recommended ? 'border-2 border-blue-500 scale-105 z-10' : 'border border-gray-100'
                                }`}
                        >
                            {p.recommended && (
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    الأكثر طلباً
                                </span>
                            )}

                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{p.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-5xl font-extrabold text-blue-600">${p.price}</span>
                                <span className="text-gray-400">/شهرياً</span>
                            </div>

                            <div className="bg-blue-50 text-blue-700 py-2 px-4 rounded-lg text-center font-bold mb-8">
                                سرعة تصل إلى {p.speed}
                            </div>

                            <ul className="text-gray-600 mb-10 space-y-4">
                                {p.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <span className="shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-[Expo-arabic]">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 cursor-pointer shadow-md ${p.recommended
                                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                }`}>
                                اشترك الآن
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;