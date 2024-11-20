
const Footer = () => {
    return (
        <div className="relative  h-[50vh] w-[full] overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/footer_image.png')`,
                }}
            >
                <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay */}
            </div>

            {/* Content */}
            <div className=" relative z-10 h-full container mx-auto px-4 sm:px-6 flex flex-col pt-[1rem] sm:pt-[4rem]">
                <h2 className="font-playfair text-[32px] sm:text-[48px] font-semibold  text-white mb-5">
                    Contact us
                </h2>

                <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-center space-x-3 text-white">
                        <svg
                            className="w-5 h-[25px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <a
                            href="mailto:Ourstudio@hello.com"
                            className="font-montserrat text-[16px] lg:text-custom-20 relative group"
                        >
                            Ourstudio@hello.com
                            <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>

                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-3 text-white">
                        <svg
                            className="w-5 h-[25px]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <a
                            href="tel:+1386-688-3295"
                            className="font-montserrat text-[16px] lg:text-custom-20 relative group"
                        >
                            <span>+1 386-688-3295</span>
                            <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Optional: Add a slight gradient at the bottom for better text readability */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
    );
};

export default Footer;