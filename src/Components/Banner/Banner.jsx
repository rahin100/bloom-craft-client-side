
const Banner = () => {

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="w-full h-[100vh] absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute lg:left-[10%] md:left-[10%] left-[3%] top-[50%] transform translate-y-[-50%] z-10">
            <h1 className="text-white text-2xl lg:text-6xl font-extrabold mb-3 lg:mb-10">
            Transforming  
            </h1>
            <h1 className="text-white text-3xl lg:text-7xl font-extrabold mb-3 lg:mb-10">
            Your Green Dreams
            </h1>
            <h1 className="text-white text-5xl lg:text-8xl font-extrabold">
            into Reality!.
            </h1>
          </div>
          <video
            className="w-full h-[100vh] object-cover"
            autoPlay
            muted
            loop
            poster="https://i.ibb.co/2g5238M/poster-image.jpg"
          >
            <source src="/src/assets/video.mp4" type="video/mp4" />
          </video>

        </div>
      </div>
    </div>
  );
};

export default Banner;
