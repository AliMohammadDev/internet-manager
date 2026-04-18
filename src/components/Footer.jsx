import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-[#0f172a] text-gray-400 py-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                <div className="space-y-6">
                    <h3 className="text-white text-2xl font-[Expo-bold] flex items-center gap-2">
                        <span className="w-8 h-8 bg-blue-600 rounded-lg font-[Asteroid] flex items-center justify-center text-sm italic">N</span>
                        NetFlow
                    </h3>
                    <p className="font-[Expo-arabic] leading-relaxed text-sm">
                        رائدون في تقديم حلول الإنترنت الفضائي وإدارة الشبكات. نهدف لربط العالم رقمياً بأعلى جودة وأفضل تكلفة ممكنة.
                    </p>
                    <div className="flex gap-4">
                        {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                            <a key={index} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-[Expo-bold] text-lg mb-6">روابط سريعة</h4>
                    <ul className="space-y-4 font-[Expo-arabic] text-sm">
                        {['الرئيسية', 'الباقات', 'عروض التوفير', 'من نحن'].map((item, index) => (
                            <li key={index}>
                                <a href="#" className="hover:text-blue-400 hover:translate-x-[-5px] inline-block transition-all duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* القسم الثالث: الدعم والقانونية */}
                <div>
                    <h4 className="text-white font-[Expo-bold] text-lg mb-6">الدعم والقانونية</h4>
                    <ul className="space-y-4 font-[Expo-arabic] text-sm">
                        {['الأسئلة الشائعة', 'مركز المساعدة', 'سياسة الخصوصية', 'شروط الخدمة'].map((item, index) => (
                            <li key={index}>
                                <a href="#" className="hover:text-blue-400 hover:translate-x-[-5px] inline-block transition-all duration-300">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-[Expo-bold] text-lg mb-6">تواصل معنا</h4>
                    <ul className="space-y-4 font-[Expo-arabic] text-sm">
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-blue-500 shrink-0" />
                            <span>شارع التكنولوجيا، الطابق 4، المنطقة الرقمية</span>
                        </li>
                        <li className="flex items-center gap-3 font-[Expo-arabic]">
                            <FaPhoneAlt className="text-blue-500 shrink-0" />
                            <span dir="ltr">+963 900 000 000</span>
                        </li>
                        <li className="flex items-center gap-3 ">
                            <FaEnvelope className="text-blue-500 shrink-0" />
                            <span className=''>support@netflow.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-[Expo-arabic]">
                    <p>© 2026 NetFlow. جميع الحقوق محفوظة.</p>
                    <p>صنع بكل ❤️ لدعم التحول الرقمي.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;