import React from 'react';

const TrainingVideoElement = () => {
  return (
    <div>
      <div className="surface-card p-4 shadow-2 border-round">
        <div className="text-5xl font-bold text-900  mt-2 text-center">Cyclone</div>

        <div className="font-medium text-500 mb-3">
          <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-700">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6 pr-0 lg:pr-5">
                <span
                  className="text-blue-700 bg-blue-50 inline-block py-2 px-3"
                  style={{ borderRadius: '50px' }}
                >
                    Last Updated: 01/02/2022
            
                </span>
                <div className="font-normal text-2xl mt-3 mb-3 text-900">
                  Should do
                </div>
                {/* <div className="text-600 mb-5">
                  by Jenny Wilson | jennyw.com | 16 mins
                </div> */}
                <p className="line-height-3 mt-0 mb-5">
                  <ul className="pt-0 px-5 mt-0 mb-5">
                    <li className="line-height-3">
                      Eat fresh dry food and keep it away from pests and flies.
                    </li>
                    <li className="line-height-3">
                      Boil water before drinking or cooking.
                    </li>
                    <li className="line-height-3">
                      Keep your surroundings clean by using disinfectants.
                    </li>
                    <li className="line-height-3">
                      Cover drains holes to prevent backflow of sewage.
                    </li>
                    <li className="line-height-3">
                      Clear debris from your premises.
                    </li>
                  </ul>
                </p>
                <div className="font-normal text-2xl mt-3 mb-3 text-900">
                  Should not do
                </div>
                <p className="line-height-3  mt-0 mb-5">
                  <ul className="pt-0 px-5 mt-0 mb-5">
                    <li className="line-height-3">
                      delay and run the risk of being marooned
                    </li>
                    <li className="line-height-3">worry about your property</li>
                    <li className="line-height-3">
                      driving immediately after the cyclone has passed.
                    </li>
                  </ul>
                </p>
                <div className="font-normal text-2xl mt-3 mb-3 text-900">
                  Emergency supplies
                </div>

                <ul className="pt-0 px-5 mt-0 mb-5">
                  <li className="line-height-3">
                    Water: one gallon per person, per day (3-day supply for
                    evacuation, 2-week supply for home).{' '}
                  </li>
                  <li className="line-height-3">Flashlight </li>
                  <li className="line-height-3">
                    Food: non-perishable, easy-to-prepare items (3-day supply
                    for evacuation, 2-week supply for home){' '}
                  </li>
                  <li className="line-height-3">
                  Battery-powered or hand-crank radio (NOAA Weather Radio, if
                  possible).
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-6 pl-0 lg:pl-5 pt-5">
                {/* <video
                  src="https://www.youtube.com/watch?v=HDJSj-cpRnM"
                //   alt="Image"
                  className="w-full border-round"
                /> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/HDJSj-cpRnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="text-center text-sm font-medium mt-3">
                How to prepare for a Cyclone
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ height: '150px' }}
          className="border-2 border-dashed surface-border"
        ></div>
      </div>
    </div>
  );
};

export default TrainingVideoElement;
