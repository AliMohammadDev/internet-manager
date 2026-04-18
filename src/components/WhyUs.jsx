import { FaSatellite, FaDollarSign, FaRocket, FaShieldAlt } from 'react-icons/fa';
import WhyUsImg from '../assets/images/WhyUs.png';

const WhyUs = () => {

    const features = [
        {
            icon: FaSatellite,
            title: 'تغطية عالمية حقيقية',
            description: 'نصلك بأسرع إنترنت في أي مكان، حتى في المناطق النائية التي لا تصلها الشبكات الأرضية.',
        },
        {
            icon: FaDollarSign,
            title: 'باقات توفير مرنة',
            description: 'استمتع بأعلى السرعات بأسعار تنافسية تناسب ميزانيتك، مع خيارات دفع شهرية وسنوية.',
        },
        {
            icon: FaRocket,
            title: 'سرعة واستجابة فائقة',
            description: 'تقنية جيل حديث تضمن لك سرعات تحميل فائقة واستجابة سريعة للألعاب والبث المباشر.',
        },
        {
            icon: FaShieldAlt,
            title: 'اتصال آمن وموثوق',
            description: 'تشفير متطور وحماية لبياناتك، مع ضمان تشغيل الخدمة بنسبة تزيد عن 99.9%.',
        },
    ];

    return (
        <section id="why-us" className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center" dir="rtl">

                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-[#E2995E]  font-[Expo-bold] tracking-widest uppercase">
                                لماذا تختارنا؟
                            </span>
                            <h2 className="text-4xl md:text-5xl font-[Expo-bold] font-extrabold text-gray-900 leading-tight">
                                حلول الإنترنت الفضائي الجيل القادم
                            </h2>
                            <p className="text-lg text-gray-600 font-[Expo-arabic]">
                                نحن لا نقدم مجرد اتصال، بل نمنحك حرية الوصول إلى العالم الرقمي بأعلى معايير الجودة والتوفير.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-right">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="xhrink-0 bg-blue-100 text-blue-600 p-3 rounded-xl shadow-inner mt-1">
                                        <feature.icon size={22} />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-[Expo-arabic] font-bold text-gray-950">
                                            {feature.title}
                                        </h3>
                                        <p className=" text-gray-600 leading-relaxed font-[Expo-arabic]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group p-6 lg:p-0">
                        <div className="absolute -inset-4 bg-blue-100 rounded-3xl transform rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-500 opacity-70"></div>

                        <img
                            src={WhyUsImg}
                            alt="إدارة شبكات الإنترنت الفضائي"
                            className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;