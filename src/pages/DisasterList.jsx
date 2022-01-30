import React from 'react';
import { Button } from 'primereact/button';

const DisasterList = () => {
  return (
    <div>
      <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
        <div className="border-bottom-1 surface-border">
          <span className="block text-3xl font-medium text-900 mb-4">
            All Disaster Modules
          </span>
        </div>
      </div>

      <div className="surface-ground">
        <div className="grid">
          <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
              <div className="p-4">
                <div className="flex align-items-center">
                  <span
                    className="inline-flex border-circle align-items-center justify-content-center bg-green-100 mr-3"
                    style={{ width: '38px', height: '38px' }}
                  >
                    <i className="pi pi-globe text-xl text-green-600"></i>
                  </span>
                  <span className="text-900 font-medium text-2xl">
                    Card Title
                  </span>
                </div>
                <div className="text-900 my-3 text-xl font-medium">
                  Quam adipiscing vitae proin sagittis.
                </div>
                <p className="mt-0 mb-3 text-700 line-height-3">
                  Eget sit amet tellus cras adipiscing enim. At quis risus sed
                  vulputate odio. Proin libero nunc consequat interdum varius
                  sit amet.
                </p>
              </div>
              <div className="px-4 py-3 surface-100 text-right">
                <Button
                  icon="pi pi-arrow-right"
                  label="More"
                  className="p-button-rounded p-button-success"
                />
              </div>
            </div>
          </div>
          <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
              <div className="p-4">
                <div className="flex align-items-center">
                  <span
                    className="inline-flex border-circle align-items-center justify-content-center bg-yellow-100 mr-3"
                    style={{ width: '38px', height: '38px' }}
                  >
                    <i className="pi pi-globe text-xl text-yellow-600"></i>
                  </span>
                  <span className="text-900 font-medium text-2xl">
                    Card Title
                  </span>
                </div>
                <div className="text-900 my-3 text-xl font-medium">
                  Proin libero nunci
                </div>
                <p className="mt-0 mb-3 text-700 line-height-3">
                  Molestie ac feugiat sed lectus vestibulum mattis ullamcorper.
                  Vulputate odio ut enim blandit volutpat maecenas. Convallis
                  tellus id interdum velit.
                </p>
              </div>
              <div className="px-4 py-3 surface-100 text-right">
                <Button
                  icon="pi pi-download"
                  label="Load"
                  className="p-button-rounded p-button-warning"
                />
              </div>
            </div>
          </div>
          <div className="col-12 lg:col-4 p-3">
            <div className="shadow-2 border-round surface-card mb-3 h-full flex-column justify-content-between flex">
              <div className="p-4">
                <div className="flex align-items-center">
                  <span
                    className="inline-flex border-circle align-items-center justify-content-center bg-purple-100 mr-3"
                    style={{ width: '38px', height: '38px' }}
                  >
                    <i className="pi pi-globe text-xl text-purple-600"></i>
                  </span>
                  <span className="text-900 font-medium text-2xl">
                    Card Title
                  </span>
                </div>
                <div className="text-900 my-3 text-xl font-medium">
                  {' '}
                  At obcaecati quos ipsam laboriosam.
                </div>
                <p className="mt-0 mb-3 text-700 line-height-3">
                  Rhoncus urna neque viverra justo nec ultrices dui sapien eget.
                  Id neque aliquam vestibulum morbi blandit cursus risus at
                  ipsum.
                </p>
              </div>
              <div className="px-4 py-3 surface-100 text-right">
                <Button
                  icon="pi pi-bookmark"
                  label="Save"
                  className="p-button-rounded p-button-help"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterList;
