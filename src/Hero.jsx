import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {
  const slideshowImages = [
    "./headerPic1.jpg",
    "./headerPic2.jpg",
    "headerPic3.jpg",
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 7500,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {slideshowImages.map((image, index) => (
          <div key={index} className=" w-full h-screen relative">
            <div
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0, 0.8), rgba(0,0,0, 0.8)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-screen bg-opacity-500 flex"
            />
          </div>
        ))}
      </Slider>
      <img
        className="m-auto w-7/12 absolute inset-20 "
        src="./logo.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
