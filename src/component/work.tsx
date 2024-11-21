import { useState } from "react";

export function Work() {
    const [isHoveredC, setIsHoveredC] = useState(false);

    return (
        <div className=" text-white  mt-[5rem]">
            <div className="mx-auto">

                <div className="space-y-6 text-center text-white font-montserrat text-custom-24 leading-custom-32">

                    <h2 className="font-playfair text-custom-48 font-semibold">My Work</h2>
                    <p className=" font-montserrat text-custom-18 lg:text-custom-20  text-white ">

                        glimpse of my visual storytelling

                    </p>

                </div>

                {/* First grid */}

                <div className="container mx-auto px-2 pt-8 pb-4">
                    <div className="grid after_800:grid-cols-12 gap-4 mx-auto h-[205vh] after_800:h-[170vh]">
                        {/* Left Column - Two Horizontal Videos */}
                        <div className="col-span-8 grid grid-rows-2 gap-4 h-full">
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <video
                                    src="/workvideo/one_foggy_horizontal.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute top-0 left-0 w-full h-full  object-cover"
                                />
                            </div>
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <video
                                    src="/workvideo/one_horizontal_dhruvil (online-video-cutter.com).mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute top-0 left-0 w-full h-full object-fill"
                                />
                            </div>
                        </div>

                        {/* Right Column - Vertical Video */}
                        <div className="col-span-4 relative h-full rounded-lg overflow-hidden">
                            <video
                                src="/workvideo/bigdaddycoffy.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Left Column - Vertical Video */}
                        <div className="col-span-4 relative h-full rounded-lg overflow-hidden">
                            <video
                                src="/workvideo/salon.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Right Column - Two Horizontal Videos */}
                        <div className="col-span-8 grid grid-rows-2 gap-4 h-full">
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <video
                                    src="/workvideo/one_horizontal_onlybike.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute top-0 left-0 w-full h-full object-fill"
                                />
                            </div>
                            <div className="relative w-full h-full rounded-lg overflow-hidden">
                                <video
                                    src="/workvideo/one_pahad_horizontal.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

               

                <div className="flex pb-[2rem] justify-center items-center">
                    <button
                        onMouseEnter={() => setIsHoveredC(true)}
                        onMouseLeave={() => setIsHoveredC(false)}
                        className="group relative px-8 pb-2">
                        <span className="font-montserrat text-[20px] font-normal relative z-10 text-white  tracking-wider">
                            See More
                        </span>
                        <div className="absolute bottom-0 left-0 h-px w-full bg-white/30 overflow-hidden">
                            <div className={`
                                h-full w-full bg-white transform transition-transform duration-500 ease-out
                                ${isHoveredC ? 'translate-x-0' : '-translate-x-full'}
                            `} />
                        </div>
                       
                    </button>
                </div>

            </div>
        </div>
    )
}