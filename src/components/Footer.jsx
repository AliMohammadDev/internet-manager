const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-white text-xl font-[Expo-bold] mb-4">NetFlow</h3>
                    <p className="font-[Expo-arabic]">نحن نوفر أسرع حلول الإنترنت لإدارة شبكتك المنزليّة والعمليّة بأفضل الأسعار.</p>
                </div>
                <div>
                    <h4 className="text-white font-[Expo-bold] mb-4">روابط سريعة</h4>
                    <ul className="space-y-2 font-[Expo-arabic]">
                        <li><a href="#" className="hover:text-blue-400">من نحن</a></li>
                        <li><a href="#" className="hover:text-blue-400">سياسة الخصوصية</a></li>
                        <li><a href="#" className="hover:text-blue-400">اتصل بنا</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-[Expo-bold] mb-4">تواصل معنا</h4>
                    <p className="font-[Expo-arabic]">العنوان: شارع التكنولوجيا، الطابق 4</p>
                    <p className="font-[Expo-arabic]">الايميل: info@netflow.com</p>
                </div>
            </div>
            <div className="text-center mt-12 border-t font-[Expo-arabic] border-gray-800 pt-6">
                <p>© 2026 NetFlow. جميع الحقوق محفوظة.</p>
            </div>
        </footer>
    );
};

export default Footer;