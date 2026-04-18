const Packages = () => {
    const packs = [
        { name: 'الباقة الأساسية', speed: '10 Mbps', price: '20$' },
        { name: 'الباقة المتقدمة', speed: '50 Mbps', price: '45$' },
        { name: 'الباقة الفائقة', speed: '100 Mbps', price: '70$' },
    ];

    return (
        <section id="packages" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-[Expo-arabic] text-center mb-12">باقات الإنترنت</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packs.map((p, index) => (
                        <div key={index} className="bg-white font-[Expo-arabic] p-8 rounded-2xl shadow-md border hover:border-blue-500 transition cursor-pointer">
                            <h3 className="text-xl font-bold mb-4">{p.name}</h3>
                            <p className="text-4xl font-bold text-blue-600 mb-4">{p.price}<span className="text-sm text-gray-500">/شهرياً</span></p>
                            <ul className="text-gray-600 mb-6 space-y-2">
                                <li>✓ سرعة تصل إلى {p.speed}</li>
                                <li>✓ دعم فني 24/7</li>
                                <li>✓ تحميل غير محدود</li>
                            </ul>
                            <button className="w-full border-2 border-blue-600 cursor-pointer text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">اختيار الباقة</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;