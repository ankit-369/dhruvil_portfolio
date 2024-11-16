
export function Work() {

    return (
        <div className=" text-white  mt-28">
            <div className="mx-auto">

                <div className="space-y-6 text-center text-white font-montserrat text-custom-24 leading-custom-32">

                    {/* <div className="h-px bg-white flex-1"></div> */}
                    <h2 className="font-playfair text-custom-48 font-semibold">My Work</h2>
                    {/* <div className="h-px bg-white flex-1"></div> */}
                    <p className=" font-montserrat  text-white leading-custom-52">
                        glimpse of my visual storytelling
                    </p>

                </div>

                    {/* First grid */}

                <div className="container mx-auto px-2 py-8">
                    <div className="grid grid-cols-12 gap-4 mx-auto h-[90vh]">
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
                    </div>
                </div>

                {/* secound grid */}

                <div className="container mx-auto px-2 ">
                    <div className="grid grid-cols-12 gap-4 mx-auto h-[90vh]">
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



            </div>
        </div>
    )
}