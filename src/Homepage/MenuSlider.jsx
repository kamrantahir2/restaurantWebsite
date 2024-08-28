import Slider from "react-slick";

const MenuSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  return (
    <div className="menu-slider h-4/5 w-full">
      <div className="py-5">
        <div className="w-7/12 h- m-auto bg-red-800 my-12 rounded-3xl">
          <Slider {...settings} className=" ">
            <div className="w-full">
              <div className="grid grid-cols-2">
                <div className=" text-yellow-200 p-4">
                  <h2 className="text-3xl mb-12">Drinks Menu</h2>
                  <h3>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Eu
                    porta posuere erat ante duis dapibus maecenas fusce. Dictum
                    integer tortor sagittis curae aptent magnis per feugiat.
                    Suspendisse velit parturient est neque finibus mi nam.
                    Senectus arcu mauris nulla interdum aliquet placerat
                    senectus commodo ligula. Aliquet aptent integer curabitur
                    orci magna cursus consequat tempor urna. Commodo ridiculus
                    fringilla finibus quam sem risus curabitur.
                  </h3>
                </div>
                <img src="./menuSlider/drinksMenu.jpg" className="" alt="" />
              </div>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MenuSlider;
