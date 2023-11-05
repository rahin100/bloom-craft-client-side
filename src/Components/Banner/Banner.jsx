const Banner = () => {
    return (
      <div className="mb-[100px]">
        <div className="carousel w-full h-[90vh]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/r43ny7Q/plants-pot-with-watering-can.jpg"
              className="w-full"
            />
            <div className="absolute lg:left-[190px] left-[70px]   top-[30%]">
              <h1 className="text-white lg:text-6xl text-2xl mb-3  font-semibold">
              Transforming 
              </h1>
              <h2 className="text-white lg:text-7xl text-2xl mb-3 font-semibold">
               Your Green Dreams
              </h2>
              <h3 className="text-white lg:text-8xl text-2xl mb-5 font-semibold">
              into Reality!.
              </h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide4"
                className="btn btn-circle bg-transparent text-white"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn btn-circle bg-transparent text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/Zxf8G9R/closeup-shot-shovel-garden-with-trees.jpg"
              className="w-full"
            />
            <div className="absolute lg:left-[190px] left-[60px]  top-[30%]">
              <h1 className="text-white lg:text-6xl  text-2xl mb-3  font-semibold">
                Transforming 
              </h1>
              <h2 className="text-white lg:text-7xl  text-2xl mb-3 font-semibold">
               Your Green Dreams
              </h2>
              <h3 className="text-white lg:text-8xl  text-2xl mb-3 font-semibold">
              into Reality!.
              </h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text-white"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn btn-circle bg-transparent text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/rb75KFk/planting-flowers-garden-garden-tools-flowers.jpg"
              className="w-full"
            />
            <div className="absolute lg:left-[190px] left-[70px]    top-[30%]">
              <h1 className="text-white lg:text-6xl  text-2xl mb-3  font-semibold">
                Transforming 
              </h1>
              <h2 className="text-white lg:text-7xl  text-2xl mb-3 font-semibold">
               Your Green Dreams
              </h2>
              <h3 className="text-white lg:text-8xl   text-2xl mb-3 font-semibold">
              into Reality!.
              </h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide2"
                className="btn btn-circle bg-transparent text-white"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn btn-circle bg-transparent text-white"
              >
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/ky4KV1Q/pensive-middle-aged-gardener-holding-small-thuja-pot-bearded-garden-worker-glasses-wearing-blue-shir.jpg"
              className="w-full"
            />
            <div className="absolute lg:left-[190px]  left-[70px]   top-[30%]">
              <h1 className="text-white lg:text-6xl  text-2xl mb-3  font-semibold">
                Transforming 
              </h1>
              <h2 className="text-white lg:text-7xl  text-2xl mb-3 font-semibold">
               Your Green Dreams
              </h2>
              <h3 className="text-white lg:text-8xl  text-2xl mb-3 font-semibold">
              into Reality!.
              </h3>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide3"
                className="btn btn-circle bg-transparent text-white"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn btn-circle bg-transparent text-white"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  