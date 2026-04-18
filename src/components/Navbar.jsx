import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between font-[Expo-bold] items-center h-16">
                    <div className="flex items-center">
                        <span className="font-bold text-xl text-blue-600">
                            <a href="/">NetFlow</a>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex font-[Expo-bold] space-x-8 items-center">
                        <a href="/" className="text-gray-700 hover:text-blue-600 transition">الرئيسية</a>
                        <a href="#packages" className="text-gray-700 hover:text-blue-600 transition">الباقات</a>
                        <a href="#savings" className="text-gray-700 hover:text-blue-600 transition">توفير</a>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden font-[Expo-bold] bg-white border-t`}>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white">الرئيسية</a>
                <a href="#packages" className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white">الباقات</a>
            </div>
        </nav>
    );
};

export default Navbar;