
export function Aboutme() {
    return (
        <div className=" text-white  mt-28">
            <div className="container mx-auto">

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Text Content */}
                    <div className="space-y-6 my-auto text-white font-montserrat text-custom-18 lg:text-custom-20 leading-custom-32">
                        <div className="">
                            {/* <div className="h-px bg-white flex-1"></div> */}
                            <h2 className="font-playfair text-custom-48 font-semibold">About Me </h2>
                            {/* <div className="h-px bg-white flex-1"></div> */}
                            <br></br>
                        </div>
                        <p className=" ">
                            Behind every frame is a story waiting to be told. Every capture and edit is fueled by passion.  Whether filming stunning scenes or
                            perfecting an edit, my aim is to tell a story that sticks, making every frame unforgettable.
                        </p>

                        <p className=" ">
                            I believe every project is an opportunity to push creative boundaries. From cool, high-energy reels to
                            carefully composed images, I focus on delivering content that's visually dynamic and packed with
                            energy, ensuring every frame tells a compelling story.
                        </p>

                        <p className=" ">
                            It's all about transforming ideas into visual experiences that stand out and spark a lasting
                            impression.
                        </p>
                    </div>


                    {/* Image Grid */}
                    <div className="grid before_1180:grid-cols-1 grid-cols-2 gap-4">
                        <img
                            src="/aboutme/fst.png"
                            alt="Photographer with motorcycle"
                            className="rounded-lg before_1180:hidden block w-full "
                        />
                        <img
                            src="/aboutme/sec.png"
                            alt="Photographer in studio"
                            className="rounded-lg pt-16  w-full before_1180:h-[80vh] before_1180:object-fill   "
                        />
                        <img
                            src="/aboutme/third.jpg"
                            alt="Motorcycle on road"
                            className="before_1180:hidden block rounded-[3.2rem] mt-[-13rem] custom-range:mt-[-11rem] object-fill w-full "
                        />
                    </div>
                </div>
            </div>



            
        </div>




    );
};

