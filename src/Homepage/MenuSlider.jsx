import Slider from "react-slick";

const MenuSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 750,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  return (
    <div className="menu-slider border-t-4 border-yellow-600  lg:pb-3 h-5/6">
      <div className="py-5">
        <div className=" menu-bg  md:h-3/5">
          <Slider
            {...settings}
            className="font-quicksand w-9/12 md:w-9/12 lg:w-3/6 m-auto"
          >
            <div className="bg-menuBackground my-12 h-3/5 ">
              <div className="grid  md:grid-cols-2">
                <div className=" text-yellow-200 p-5 ">
                  <h2 className="text-5xl mb-4">Drinks Menu</h2>
                  <h2 className="text-3xl font-semibold  text-yellow-200">
                    &#9671; &#9671; &#9672; &#9671;{" "}
                  </h2>
                  <div className="">
                    <h3 className="text-2xl mt-4">
                      Lorem ipsum odor amet, consectetuer adipiscing elit. Eu
                      porta posuere erat ante duis dapibus maecenas fusce.
                    </h3>
                    <button className="bg-yellow-200 text-red-900 p-4 mt-4 font-quicksand font-bold rounded-xl">
                      View Menu
                    </button>
                  </div>
                </div>

                <div className="hidden md:block">
                  <img
                    src="./menuSlider/drinksMenu.jpg"
                    className="menuImage md:border-l-4 border-b-4 md:border-b-0 border-yellow-200 order-first md:order-last w-3/12 md:w-full "
                    alt=""
                  />
                </div>

                <div className="h-96 w-full bg-white order-first md:hidden bg-[url('/drinksMenu.jpg')] bg-cover bg-center border-b-4 border-yellow-600"></div>
              </div>
            </div>

            <div className="bg-menuBackground my-12 ">
              <div className="grid md:grid-cols-2">
                <div className=" text-yellow-200 p-5">
                  <h2 className="text-5xl mb-4">Chef's Specials</h2>
                  <h2 className="text-3xl font-semibold  text-yellow-200">
                    &#9671; &#9671; &#9672; &#9671;{" "}
                  </h2>
                  <div className="h-full">
                    <h3 className="text-2xl mt-4 lg:mt-20">
                      Lorem ipsum odor amet, consectetuer adipiscing elit. Eu
                      porta posuere erat ante duis dapibus maecenas fusce.
                    </h3>
                    <button className="bg-yellow-200 text-red-900 p-4 mt-4 lg:mt-12 font-quicksand font-bold rounded-xl">
                      View Menu
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="./menuSlider/chefSelection.jpg"
                    className="menuImage md:border-l-4 border-b-4 md:border-b-0 border-yellow-200 order-first md:order-last  w-3/12 md:w-full "
                    alt=""
                  />
                </div>

                <div className="h-96 w-full bg-white order-first md:hidden bg-[url('/chefSelection.jpg')] bg-cover bg-bottom-4 border-b-4 border-yellow-600"></div>
              </div>
            </div>

            <div className="bg-menuBackground my-12 ">
              <div className="grid md:grid-cols-2">
                <div className=" text-yellow-200 p-5">
                  <h2 className="text-5xl mb-4">Lunch Menu</h2>
                  <h2 className="text-3xl font-semibold  text-yellow-200">
                    &#9671; &#9671; &#9672; &#9671;{" "}
                  </h2>
                  <div className="h-full">
                    <h3 className="text-2xl mt-4 lg:mt-20">
                      Lorem ipsum odor amet, consectetuer adipiscing elit. Eu
                      porta posuere erat ante duis dapibus maecenas fusce.
                    </h3>
                    <button className="bg-yellow-200 text-red-900 p-4 mt-4 lg:mt-12 font-quicksand font-bold rounded-xl">
                      View Menu
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img
                    src="./menuSlider/lunch.jpg"
                    className="menuImage md:border-l-4 border-b-4 md:border-b-0 border-yellow-200 order-first md:order-last sm:hidden md:block w-3/12 md:w-full "
                    alt=""
                  />
                </div>

                <div className="h-96 w-full bg-white order-first md:hidden bg-[url('/lunch.jpg')] bg-cover bg-center  border-b-4 border-yellow-600"></div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MenuSlider;
