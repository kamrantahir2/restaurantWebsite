import Slider from "react-slick";

const MenuSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 750,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  return (
    <div className="menu-slider">
      <div className="py-5">
        <div className="w-9/12 lg:w-7/12 menu-bg m-auto bg-menuBackground my-12 rounded-3xl">
          <Slider {...settings} className="font-quicksand">
            <div className="">
              <div className="grid lg:grid-cols-2">
                <div className=" text-yellow-200 p-5">
                  <h2 className="text-5xl mb-4">Drinks Menu</h2>
                  <h2 className="text-3xl font-semibold  text-yellow-200">
                    &#9671; &#9671; &#9672; &#9671;{" "}
                  </h2>
                  <div className="h-full">
                    <h3 className="text-2xl mt-20">
                      Lorem ipsum odor amet, consectetuer adipiscing elit. Eu
                      porta posuere erat ante duis dapibus maecenas fusce.
                      Dictum integer tortor sagittis curae aptent magnis per
                      feugiat. Suspendisse velit parturient est neque finibus mi
                      nam.
                    </h3>
                    <button className="bg-yellow-200 text-red-900 p-4 mt-12 font-quicksand font-bold rounded-xl">
                      View Menu
                    </button>
                  </div>
                </div>
                <img
                  src="./menuSlider/drinksMenu.jpg"
                  className="menuImage lg:border-l-4 border-b-4 lg:border-b-0 border-yellow-200 order-first lg:order-last lg:rounded-r-3xl rounded-t-3xl lg:rounded-t-none "
                  alt=""
                />
              </div>
            </div>

            <div className="">
              <div className="grid lg:grid-cols-2">
                <div className=" text-yellow-200 p-5">
                  <h2 className="text-5xl mb-4">Chef's Specials</h2>
                  <h2 className="text-3xl font-semibold  text-yellow-200">
                    &#9671; &#9671; &#9672; &#9671;{" "}
                  </h2>
                  <div className="h-full">
                    <h3 className="text-2xl mt-20">
                      Lorem ipsum odor amet, consectetuer adipiscing elit. Eu
                      porta posuere erat ante duis dapibus maecenas fusce.
                      Dictum integer tortor sagittis curae aptent magnis per
                      feugiat. Suspendisse velit parturient est neque finibus mi
                      nam.
                    </h3>
                    <button className="bg-yellow-200 text-red-900 p-4 mt-12 font-quicksand font-bold rounded-xl">
                      View Menu
                    </button>
                  </div>
                </div>
                <img
                  src="./menuSlider/chefSelection.jpg"
                  className="menuImage lg:border-l-4 border-b-4 lg:border-b-0 border-yellow-200 order-first lg:order-last lg:rounded-r-3xl rounded-t-3xl lg:rounded-t-none "
                  alt=""
                />
              </div>
            </div>

            <div className="">
              <div className="grid lg:grid-cols-2">
                <div className=" text-yellow-200 p-5">
                  <h2 className="text-5xl mb-4">Lunch Menu</h2>
                  <h2 className="text-3xl font-semibold  text-yellow-200">
                    &#9671; &#9671; &#9672; &#9671;{" "}
                  </h2>
                  <div className="h-full">
                    <h3 className="text-2xl mt-20">
                      Lorem ipsum odor amet, consectetuer adipiscing elit. Eu
                      porta posuere erat ante duis dapibus maecenas fusce.
                      Dictum integer tortor sagittis curae aptent magnis per
                      feugiat. Suspendisse velit parturient est neque finibus mi
                      nam.
                    </h3>
                    <button className="bg-yellow-200 text-red-900 p-4 mt-12 font-quicksand font-bold rounded-xl">
                      View Menu
                    </button>
                  </div>
                </div>
                <img
                  src="./menuSlider/lunch.jpg"
                  className="menuImage lg:border-l-4 border-b-4 lg:border-b-0 border-yellow-200 order-first lg:order-last lg:rounded-r-3xl rounded-t-3xl lg:rounded-t-none "
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MenuSlider;
