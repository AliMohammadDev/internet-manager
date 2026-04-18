import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import ImgSatellite from '../assets/images/ImgGlobalNet.png';
import ImgHomeDish from '../assets/images/ImgHomeDish.png';
import ImgGlobalNet from '../assets/images/ImgSatellite.png';
import clsx from 'clsx';

const Hero = () => {
    const slidesData = [
        {
            id: 1,
            image: ImgSatellite,
            title: 'إنترنت عالي السرعة من الفضاء يمكن الاعتماد عليه',
            description:
                'تغطية عالمية تصلك أينما كنت، حتى في أبعد المناطق، عبر شبكتنا من الأقمار الصناعية الحديثة.',
            cta: 'اكتشف الباقات',
        },
        {
            id: 2,
            image: ImgHomeDish,
            title: 'سهولة التركيب، اتصال فوري',
            description:
                'احصل على معدات الاستقبال المنزلية الأنيقة وابدأ الاستمتاع بإنترنت عالي السرعة في دقائق معدودة.',
            cta: 'اطلب جهازك الآن',
        },
        {
            id: 3,
            image: ImgGlobalNet,
            title: 'إدارة شبكتك بذكاء',
            description:
                'لوحة تحكم متكاملة لمراقبة استهلاكك، تجديد باقتك، وإدارة أجهزتك المتصلة من مكان واحد.',
            cta: 'دخول لوحة التحكم',
        },
    ];

    return (
        <section className="relative h-[80vh] md:h-[90vh] bg-gray-900 overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect={'fade'}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full w-full"
            >
                {slidesData.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative h-full w-full">
                        {({ isActive }) => (
                            <>
                                <div
                                    className={clsx(
                                        "absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear",
                                        isActive ? "scale-110" : "scale-100"
                                    )}
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                                </div>

                                <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center" dir="rtl">
                                    <div className="max-w-2xl text-white space-y-6">

                                        <h1 className={clsx(
                                            "text-4xl md:text-5xl lg:text-6xl font-[Expo-bold] font-extrabold leading-tight transition-all duration-1000 transform",
                                            isActive ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                                        )}>
                                            {slide.title}
                                        </h1>

                                        <p className={clsx(
                                            "text-lg md:text-xl text-gray-200 font-[Expo-light] transition-all duration-1000 delay-300 transform",
                                            isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                        )}>
                                            {slide.description}
                                        </p>

                                        <div className={clsx(
                                            "flex gap-4 pt-4 font-[Expo-bold] transition-all duration-1000 delay-500 transform",
                                            isActive ? "scale-100 opacity-100" : "scale-90 opacity-0"
                                        )}>
                                            <button className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg">
                                                {slide.cta}
                                            </button>
                                            <button className="bg-white/10 cursor-pointer text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white/20 transition backdrop-blur-sm">
                                                معرفة المزيد
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
