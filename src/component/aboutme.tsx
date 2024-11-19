
export function Aboutme() {
    return (
        <div className=" text-white mx-[7%] after_521:mx-[0%]  mt-[5rem]">
            <div className="container mx-auto">

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Text Content */}
                    <div className="space-y-6 my-auto text-white font-montserrat text-custom-18 lg:text-custom-20 leading-custom-32">
                        <div className="">
                            {/* <div className="h-px bg-white flex-1"></div> */}
                            <h2 className="font-playfair  text-custom-48 font-semibold">My Story</h2>
                            {/* <div className="h-px bg-white flex-1"></div> */}
                            <br></br>
                        </div>
                        <p data-aos="zoom-in" className=" ">
                            Every frame has a story to tell, and I’m passionate about bringing those stories to life. From capturing breathtaking moments to refining every detail in the edit, my goal is to create visuals that leave a lasting impression.

                            {/* Behind every frame is a story waiting to be told. Every capture and edit is fueled by passion.  Whether filming stunning scenes or
                            perfecting an edit, my aim is to tell a story that sticks, making every frame unforgettable. */}
                        </p>

                        <p data-aos="zoom-in" className=" ">
                            {/* I believe every project is an opportunity to push creative boundaries. From cool, high-energy reels to
                            carefully composed images, I focus on delivering content that's visually dynamic and packed with
                            energy, ensuring every frame tells a compelling story. */}
                            I take every project as an opportunity to push creative boundaries. I’ve worked with clients to produce everything from high-energy ads to polished, impactful videos, ensuring each frame tells a compelling story.                        </p>

                        {/* <p className=" ">
                            {/* It's all about transforming ideas into visual experiences that stand out and spark a lasting
                            impression. */}
                        {/* For me, it’s all about turning ideas into unforgettable visual experiences that truly stand out. */}
                        {/* </p>  */}
                        <p data-aos="zoom-in" className="text-white text-lg leading-relaxed">
                            {/* It's all about transforming ideas into visual experiences that stand out and spark a lasting impression. */}
                            For me, it’s all about turning
                            <span className="font-bold text-yellow-300"> ideas into unforgettable visual experiences </span>
                            that truly stand out.
                        </p>



                    </div>


                    {/* Image Grid */}
                    <div className=" grid before_1180:grid-cols-1 grid-cols-2 gap-4">
                        <img
                            src="/aboutme/fst.png"
                            alt="Photographer with motorcycle"
                            className="rounded-lg before_1180:hidden block w-full "
                        />
                        <img
                            src="/aboutme/sec.png"
                            alt="Photographer in studio"
                            className="rounded-lg after_521:pt-16  w-full before_1180:h-[80vh] before_1180:object-contain   "
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

