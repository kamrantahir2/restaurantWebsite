const OpeningTimes = () => {
  return (
    <div className="mb-24">
      <div className="text-2xl font-courgette font-semibold text-red-900">
        <div className="mb-8">
          <h3 className="text-center  text-4xl underline">Opening Times</h3>
          <h2 className="text-3xl font-black mb-4 text-center text-red-800">
            &#9671; &#9671; &#9672; &#9671;{" "}
          </h2>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <div className="grid grid-cols-2 gap-12 ">
              <h3 className="text-right">Monday</h3>
              <div>
                <h3>12:00-14:00</h3>
                <h3>17:00-21:00</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 mt-3">
              <h3 className="text-right">Tuesday</h3>
              <div>
                <h3>12:00-14:00</h3>
                <h3>17:00-21:00</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 mt-3">
              <h3 className="text-right">Wednesday</h3>
              <div>
                <h3>12:00-14:00</h3>
                <h3>17:00-21:00</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 mt-3">
              <h3 className="text-right">Thursday</h3>
              <div>
                <h3>12:00-14:00</h3>
                <h3>17:00-21:00</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 mt-3">
              <h3 className="text-right">Friday</h3>
              <div>
                <h3>12:00-14:00</h3>
                <h3>17:00-22:00</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 mt-3">
              <h3 className="text-right">Saturday</h3>
              <div>
                <h3>12:00-14:00</h3>
                <h3>17:00-22:00</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 mt-3">
              <h3 className="text-right">Tuesday</h3>
              <div>
                <h3>17:00-21:00</h3>
              </div>
            </div>
          </div>
          <div className="w-8/12 ">
            <img
              className="border-4 border-double border-red-800 m-auto"
              src="./map.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningTimes;
