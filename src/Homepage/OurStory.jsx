const OurStory = () => {
  return (
    <div className=" bg-ourStory mb-12 border-y-4 border-yellow-600">
      <div className="grid lg:grid-cols-2 ">
        <div className="font-quicksand my-8 lg:mt-12 mb-12 lg:mb-0 text-yellow-200 mx-auto px-12 md:px-24">
          <h3 className="text-5xl">Our Story</h3>
          <h2 className="text-3xl font-semibold  text-yellow-200 mt-4">
            &#9671; &#9671; &#9672; &#9671;{" "}
          </h2>
          <h3 className="text-2xl mt-4">
            Lorem ipsum dolor sit amet. Ab dolor architecto et vero itaque eos
            mollitia corrupti id iste dolorum est harum soluta At animi
            consequatur. <br /> <br /> Ab quia quaerat quo soluta delectus est
            quas beatae aut voluptas fuga. Ut voluptas iure vel ducimus
            blanditiis ut earum autem ut dignissimos itaque est dicta saepe sed
            aspernatur minus ut omnis labore.
            <br /> <br /> Sit autem nisi est unde nesciunt aut expedita
            consequuntur ab esse quia At obcaecati sint ad quas quasi At ducimus
            ullam. Cum quia error ut quaerat aliquid eum quam eveniet et aliquam
            laboriosam.
          </h3>
        </div>
        <div className="order-first border-r-4 border-yellow-200">
          <img
            className="menuImage w-full lg:border-none border-b-4 border-yellow-200"
            src="./store.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
