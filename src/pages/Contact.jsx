import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSatelliteDish } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="relative py-24 font-[Expo-arabic] overflow-hidden">

            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-300 via-white to-gray-100 opacity-70"></div>

                <div className="absolute -top-40 -right-40 w-150 h-150 bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-0 -left-40 w-125 h-125 bg-purple-50 rounded-full blur-[100px] opacity-50"></div>

                <FaSatelliteDish className="absolute top-20 left-20 text-[300px] text-blue-900 opacity-[0.02] rotate-[-15deg] pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-600 text-sm font-[Expo-bold] tracking-widest uppercase mb-2 block">
                        نحن هنا للمساعدة
                    </span>
                    <h2 className="text-5xl font-[Expo-bold] text-gray-950 mb-5 leading-tight">
                        دعنا نتحدث عن اتصالك القادم
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[Expo-arabic]">
                        هل لديك استفسار عن خدمات الإنترنت الفضائي؟ فريقنا المتخصص متواجد دائماً لتقديم الدعم الفني والإجابة على أسئلتك.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    <div className="space-y-6 lg:sticky lg:top-24">
                        {[
                            { icon: FaPhoneAlt, title: "اتصل بنا", detail: "+963 900 000 000", dir: "ltr" },
                            { icon: FaEnvelope, title: "البريد الإلكتروني", detail: "support@netflow.com", dir: "rtl" },
                            { icon: FaMapMarkerAlt, title: "الموقع", detail: "شارع التقنية، الطابق 4، المنطقة الرقمية", dir: "rtl" }
                        ].map((item, index) => (
                            <div key={index} className="bg-white/60 backdrop-blur-md p-8 rounded-3xl flex items-start gap-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-white/80 shadow-inner">
                                <div className="shrink-0 bg-blue-600 p-4 rounded-2xl text-white shadow-blue-200 shadow-lg mt-1">
                                    <item.icon size={22} />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-[Expo-bold] text-xl text-gray-950">{item.title}</h4>
                                    <p className={`text-gray-700 text-sm leading-relaxed ${item.dir === 'ltr' ? 'font-mono' : ''}`} dir={item.dir}>
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-2 bg-white p-10 md:p-14 rounded-3xl shadow-2xl border border-gray-100 transform transition-all duration-500 hover:shadow-blue-50/50">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-7">
                            <div className="space-y-2">
                                <label className="text-sm font-[Expo-bold] text-gray-800">الاسم الكامل</label>
                                <input type="text" placeholder="مثال: أحمد محمد" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-300 shadow-inner" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-[Expo-bold] text-gray-800">البريد الإلكتروني</label>
                                <input type="email" placeholder="email@example.com" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-300 shadow-inner" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-[Expo-bold] text-gray-800">الموضوع</label>
                                <input type="text" placeholder="كيف يمكننا مساعدتك؟" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-300 shadow-inner" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-[Expo-bold] text-gray-800">رسالتك</label>
                                <textarea rows="6" placeholder="اكتب استفسارك بالتفصيل هنا..." className="w-full bg-gray-50 border border-gray-100 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition duration-300 shadow-inner resize-none"></textarea>
                            </div>
                            <div className="md:col-span-2 pt-2">
                                <button type="submit" className="w-full bg-blue-600 text-white font-[Expo-bold] font-bold py-5 rounded-2xl hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-100 cursor-pointer text-lg">
                                    إرسال الرسالة
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;