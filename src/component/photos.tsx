
export function PhotosGrid() {
  const images = [
    {
      src: '/photos/foggy_bike.jpeg',
      alt: 'Biker in foggy weather'
    },
    {
      src: '/photos/image2.png',
      alt: 'Person standing by mountain lake'
    },
    {
      src: '/photos/image3.jpg',
      alt: 'Motorcyclist on scenic road'
    },
    {
      src: '/photos/image4.jpg',
      alt: 'Motorcycle on mountain path'
    },
    {
      src: '/photos/image5.jpg',
      alt: 'Motorcycle in desert'
    },
    {
      src: '/photos/image5.jpg',
      alt: 'Person with arms spread in nature'
    },
    {
      src: '/photos/image2.png',
      alt: 'Motorcycle on straight road'
    },
    {
      src: '/photos/image4.jpg',
      alt: 'Motorcycle on winding road'
    },
    {
      src: '/photos/image2.png',
      alt: 'Person standing by mountain lake'
    },
    {
      src: '/photos/image3.jpg',
      alt: 'Motorcyclist on scenic road'
    },
    {
      src: '/photos/image4.jpg',
      alt: 'Motorcycle on mountain path'
    },
    {
      src: '/photos/image5.jpg',
      alt: 'Motorcycle in desert'
    },
  ];

  return (
    <div className="container sm:mt-[5rem] mx-auto  ">
      
      <div className="space-y-6 text-center text-white font-montserrat text-custom-24 leading-custom-32">

        <h2 className="font-playfair text-custom-48 font-semibold">Let’s Connect</h2>
        <p className=" font-montserrat text-custom-18 lg:text-custom-20  text-white ">
        Discover more moments and stories on Instagram
        </p>

      </div>

      <div className="grid before_440:px-4 h-full mt-[2rem] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className=" overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="relative px-8 py-2.5 rounded-full font-montserrat font-semibold text-white uppercase tracking-wider
          bg-gradient-to-r from-blue-600 to-purple-600
          hover:from-blue-500 hover:to-purple-500
          transform hover:scale-105
          transition-all duration-300
          shadow-[0_0_20px_rgba(66,153,225,0.3)]
          hover:shadow-[0_0_25px_rgba(66,153,225,0.5)]
          active:scale-95
          border border-blue-400/30">
          Follow
        </button>
      </div>
    </div>
  );
};

export default PhotosGrid;