

export function Heroheader() {

    return (
        <>
            <div className=" rounded-2xl overflow-hidden">
                <div
                    className="w-screen h-screen bg-cover bg-center "
                    style={{
                        backgroundImage: "url('hero.png')",
                    }}
                >
                    {/* Your content here */}

                    <div className="flex text-white   font-playfair text-custom-42 font-semibold">
                        <div className="mt-9 space-x-8 pl-14 leading-custom-30">

                            <a href="#" className="relative group hover:text-zinc-800">Home
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-zinc-900 transition-all duration-700 group-hover:w-full"></span>

                            </a>
                            <a href="#" className="relative group hover:text-zinc-800">Work
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-zinc-900 transition-all duration-700 group-hover:w-full"></span>

                            </a>
                            <a href="#" className="relative group hover:text-zinc-800">Portfolio
                                <span className="absolute left-0 bottom-0 w-0 h-1 bg-zinc-900 transition-all duration-700 group-hover:w-full"></span>

                            </a>
                        </div>
                    </div>

                    <div className="">

                    <div className="absolute bottom-24 right-20">
                        <h1 className="font-playfair leading-custom-52 text-custom-48 font-semibold text-white">
                            Crafting Moments, Capturing Stories.
                        </h1>
                        <p className="font-montserrat  text-custom-24 text-white leading-custom-52">
                            Where every frame tells your unique story.
                        </p>
                    </div>
                    
                    </div>

                </div>
            </div>
        </>
    )
}