const AboutUs = () => {
    return (
      <div className="lg:flex mb-[100px]">
        <div className="flex-1 relative w-full lg:w-1/2">
          <img
            className="w-full lg:w-[600px] border-4 border-base-700 p-3 bg-white"
            src="https://img.freepik.com/free-photo/overhead-view-hand-holding-small-fresh-potted-plant_23-2147844319.jpg?w=826&t=st=1699276229~exp=1699276829~hmac=12a0dec7a2457e13405f1244d855633205c21f89f084b937d450809d06a81392"
            alt=""
          />
          <div className="absolute right-[50px] bottom-0 hidden lg:block">
            <img
              className="w-full lg:w-[280px] lg:h-[300px] md:h-[400px] border-4 border-base-700 p-3 bg-white"
              src="https://radiustheme.com/demo/wordpress/greenova/wp-content/uploads/2018/04/about_img_1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 w-full lg:w-1/2">
          <h1 className="text-xl md:text-4xl lg:text-6xl font-bold mb-[25px] ">Our Company History</h1>
          <h3 className="text-xl md:text-3xl lg:text-4xl font-bold mb-[25px]">
            Where Passion Meets Precision in Crafting Lush, Vibrant Gardens.
          </h3>
          <p className="text-[16px] font-medium mb-[15px] text-justify">
            BloomCraft Gardening is a premier landscaping and gardening company
            dedicated to turning your outdoor spaces into a lush, vibrant haven of
            natural beauty. With a deep-rooted passion for horticulture and a
            commitment to excellence, we specialize in creating and maintaining
            captivating gardens that leave a lasting impression. Our team of
            skilled artisans and landscape architects shares a common vision: to
            bring natures wonders closer to you. We blend artistic design with
            sustainable practices, ensuring that every garden we cultivate is not
            just visually stunning but also environmentally responsible.
          </p>
          <p className="text-[16px] font-medium mb-[15px] text-justify">
            At BloomCraft Gardening, our story is woven into the landscapes we
            craft. We have transformed ordinary yards into enchanting retreats,
            where flowers bloom in harmony, and trees reach for the sky. We pride
            ourselves on attention to detail, employing the finest materials and
            horticultural practices to create living works of art. With years of
            experience, we have honed our craft to deliver personalized
            landscaping solutions. From conceptual design to meticulous
            installation and ongoing maintenance, we guide you every step of the
            way, making your dream garden a reality.
          </p>
          <div className="lg:hidden">
            <img
              className="w-full h-[200px] border-4 border-base-700 p-3 bg-white"
              src="https://radiustheme.com/demo/wordpress/greenova/wp-content/uploads/2018/04/about_img_1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  