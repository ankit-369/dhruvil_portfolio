import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Heroheader() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    // Update the state based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 584) {
                setIsSmallScreen(false);
            } else {
                setIsSmallScreen(true);
            }
        };

        // Call on mount
        handleResize();

        // Add event listener for resizing
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <div className="after_521:rounded-2xl overflow-hidden">
                <div
                    className=" w-screen h-screen bg-cover bg-center"
                    style={{
                        backgroundImage: "url('hero.png')",
                    }}
                >
                    {/* Desktop view navbar */}
                    <div className="hidden sm:flex text-white font-playfair sm:text-[31px] md:text-[37px] font-semibold">
                        <div className="mt-9 space-x-8 pl-8 md:pl-14 leading-custom-30">
                            <a href="#" className="relative group hover:text-zinc-800">
                                Home
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-zinc-900 transition-all duration-700 group-hover:w-full"></span>
                            </a>
                            <a href="#" className="relative group hover:text-zinc-800">
                                Work
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-zinc-900 transition-all duration-700 group-hover:w-full"></span>
                            </a>
                            <a href="#" className="relative group hover:text-zinc-800">
                                Portfolio
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-zinc-900 transition-all duration-700 group-hover:w-full"></span>
                            </a>
                        </div>
                    </div>

                    {/* Mobile view navbar */}
                    <div className="sm:hidden absolute z-20 right-[4rem] after_521:top-10 after_521:right-[6rem] after_584:right-[18%]">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative   focus:outline-none"
                        >
                            <div className="absolute inset-0 flex transition-all duration-300 transform">
                                <Menu
                                    size={48}
                                    strokeWidth={1.5}
                                    color="white"
                                    className={`absolute  transition-all duration-300 transform ${isOpen
                                        ? 'opacity-0 rotate-180 scale-0'
                                        : 'opacity-100 rotate-0 scale-100'
                                        }`}
                                />

                                <X
                                    size={40}
                                    color="white"
                                    className={`absolute transition-all duration-300 transform ${isOpen
                                        ? 'opacity-100 rotate-0 scale-100'
                                        : 'opacity-0 -rotate-180 scale-0'
                                        }`}
                                />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className='sm:hidden after_521:ml-[-9.5%]  flex items-center justify-center h-screen'>
                            <div className=" w-[100%] after_584:w-[80%] z-[2] after_521:rounded-3xl h-[100%] after_584:h-[98%]  bg-[#0B1113]  shadow-lg flex flex-col justify-center items-center  space-y-6">
                                <a
                                    href="#home"
                                    className="font-playfair leading-custom-52 before_640:text-[30px] px-6  py-3 rounded text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                                >
                                    Home
                                </a>
                                <a
                                    href="#work"
                                    className="font-playfair leading-custom-52 before_640:text-[30px] px-6 py-3 rounded text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                                >
                                    Work

                                </a>
                                <a
                                    href="#portfolio"
                                    className="font-playfair leading-custom-52 before_640:text-[30px] px-6 py-3 rounded text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                                >
                                    Portfolio
                                </a>
                            </div>
                        </div>



                    )}

                    {/* Hero Content */}
                    {!isOpen && (
                        <div className="absolute z-[1] bottom-24 right-[2%] after_584:right-[5%]">
                            {/* <h1 className="font-playfair leading-custom-52 after_584:text-[29px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-white"
                        
                        >
                            Crafting Moments, Capturing Stories.
                        </h1> */}
                            <h1
                                className="font-playfair after_584:text-[29px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-white"
                                style={
                                    isSmallScreen
                                        ? {
                                            fontSize: 'calc(20.8px + (30 - 20.8) * ((100vw - 384px) / (583 - 384)))',
                                        }
                                        : {}
                                }
                            >
                                Crafting Moments, Capturing Stories.
                            </h1>


                            <p className="font-montserrat text-[14px] after_450:text-[16px] after_584:text-[18px] sm:text-[20px] md:text-[24px] text-white after_584:leading-[38px] "
                            >
                                Where every frame tells your unique story.
                            </p>


                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
