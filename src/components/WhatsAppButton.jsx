import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    const phoneNumber = "963900000000";
    const message = "مرحباً، أود الاستفسار عن باقات الإنترنت الفضائي.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-999 group"
            aria-label="Contact us on WhatsApp"
        >
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

            <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-[-12deg] flex items-center justify-center">
                <FaWhatsapp size={32} />
            </div>
        </a>
    );
};

export default WhatsAppButton;