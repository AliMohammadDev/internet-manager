import { FaGift, FaRocket, FaGlobe } from 'react-icons/fa';

const Savings = () => {
    return (
        <section id="savings" className="relative py-20 overflow-hidden">
            {/* خلفية بتدرج لوني احترافي (Deep Blue Gradient) */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950"></div>

            <div className="absolute inset-0 opacity-10">
                <FaRocket className="absolute top-10 left-10 text-9xl -rotate-12" />
                <FaGlobe className="absolute bottom-10 right-10 text-9xl rotate-12" />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
                <div className="flex justify-center mb-8">
                    <div className="bg-white/20 p-4 rounded-3xl backdrop-blur-md border border-white/30 animate-pulse">
                        <FaGift className="text-4xl text-yellow-400" />
                    </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-[Expo-bold] mb-6 leading-tight">
                    وفر حتى <span className="text-yellow-400">30%</span> مع الخطط السنوية
                </h2>

                <p className="text-xl md:text-2xl mb-10 font-[Expo-arabic] text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    انضم إلينا اليوم في الباقة السنوية واحصل على <span className="font-bold underline text-white">شهرين مجاناً</span>،
                    بالإضافة إلى أحدث أجهزة الاستقبال الفضائي مجاناً تماماً!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                        { title: "تركيب مجاني", icon: "🛠️" },
                        { title: "شهرين هدية", icon: "🎁" },
                        { title: "جهاز مجاني", icon: "📡" }
                    ].map((item, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl transform transition hover:scale-105">
                            <span className="text-3xl mb-3 block">{item.icon}</span>
                            <span className="font-[Expo-bold] text-lg">{item.title}</span>
                        </div>
                    ))}
                </div>

                <div className="relative inline-block group">
                    <div className="absolute -inset-1 bg-yellow-400 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <button className="relative bg-white font-[Expo-bold] text-blue-900 px-12 py-5 rounded-full font-bold text-2xl shadow-2xl transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900 cursor-pointer">
                        احصل على العرض الآن
                    </button>
                </div>

                <p className="mt-6 text-sm text-blue-300 font-[Expo-arabic]">
                    * هذا العرض متاح لفترة محدودة وللمشتركين الجدد فقط.
                </p>
            </div>
        </section>
    );
};

export default Savings;