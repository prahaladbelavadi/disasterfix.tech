import React, { useState, useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputSwitch } from 'primereact/inputswitch';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [value, setValue] = useState(false);
  const rootBtnRef = useRef(null);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const navigate = useNavigate();

  return (
    <div>
      <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
        <img src="assets/hyper.svg" alt="hyper" height={50} />
        <StyleClass
          nodeRef={rootBtnRef}
          selector="@next"
          enterClassName="hidden"
          leaveToClassName="hidden"
          hideOnOutsideClick
        >
          <a
            ref={rootBtnRef}
            className="cursor-pointer block lg:hidden text-700"
          >
            <i className="pi pi-bars text-4xl"></i>
          </a>
        </StyleClass>
        <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
          <section></section>
          {/* <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li className="relative">
              <StyleClass
                nodeRef={btnRef1}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="scalein"
                leaveToClassName="hidden"
                leaveActiveClassName="fadeout"
                hideOnOutsideClick
              >
                <a
                  ref={btnRef1}
                  className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 w-full"
                >
                  <span>Products</span>
                  <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                  <Ripple />
                </a>
              </StyleClass>
              <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                <li>
                  <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                    <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                    <span>Features</span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                    <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                    <span>Solutions</span>
                    <Ripple />
                  </a>
                </li>
                <li>
                  <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                    <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                    <span>Customers</span>
                    <Ripple />
                  </a>
                </li>
                <li className="relative">
                  <StyleClass
                    nodeRef={btnRef2}
                    selector="@next"
                    enterClassName="hidden"
                    enterActiveClassName="scalein"
                    leaveToClassName="hidden"
                    leaveActiveClassName="fadeout"
                    hideOnOutsideClick={true}
                  >
                    <a
                      ref={btnRef2}
                      className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full"
                    >
                      <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                      <span>Support</span>
                      <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                      <Ripple />
                    </a>
                  </StyleClass>
                  <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                    <li>
                      <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                        <i className="pi pi-cloud mr-2"></i>
                        <span className="font-medium">Help Center</span>
                        <Ripple />
                      </a>
                    </li>
                    <li className="relative">
                      <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                        <i className="pi pi-question-circle mr-2"></i>
                        <span className="font-medium">Faq</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                <span>Corporate</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                <span>Resources</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                <span>Pricing</span>
                <Ripple />
              </a>
            </li>
          </ul> */}
          <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <Button
              label="Login"
              className="p-button-text font-bold"
              onClick={() => {
                navigate('/login');
              }}
            />
            <Button
              label="Register"
              className="ml-3 p-button-outlined font-bold"
              onClick={() => {
                navigate('/register');
              }}
            />
          </div>
        </div>
      </div>
      <div className="relative p-6 overflow-hidden">
        <img
          src="assets/background/background.jpg"
          alt="hero-2"
          className="absolute top-0 left-0 w-auto h-full block md:w-full"
        />

        <div className="text-center my-6 relative">
          <div className="text-6xl text-white font-bold mb-1">
            The Platform For
          </div>
          <div className="text-6xl text-primary font-bold mb-4">
            Today's Disaster Management Training
          </div>
          {/* <p
            className="mt-0 mb-4 line-height-3 text-center mx-auto text-white"
            style={{ maxWidth: '500px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}

          <Button
            label="Learn More"
            onClick={() => navigate('/disasters')}
            type="button"
          />

          {/* <p className="text-sm mt-4 mb-4 line-height-3 text-white">
            Available for MacOS, Web and Google accounts only
          </p> */}
          {/* <div className="flex justify-content-center align-items-center">
            <a href="https://www.apple.com" className="text-white mr-3">
              <i className="pi pi-apple text-2xl"></i>
            </a>
            <a href="https://play.google.com" className="text-white mr-3">
              <i className="pi pi-android text-2xl"></i>
            </a>
            <a href="https://www.facebook.com" className="text-white">
              <i className="pi pi-facebook text-2xl"></i>
            </a>
          </div> */}
        </div>
      </div>
      <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-3 font-bold text-4xl">
            <span className="text-900">One Product, </span>
            <span className="text-blue-600">Many Solutions</span>
          </div>
          <div className="text-700 text-sm mb-6">
            Ac turpis egestas maecenas pharetra convallis posuere morbi leo
            urna.
          </div>
          <div className="grid">
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: '10px' }}
              >
                <i className="pi pi-desktop text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 mb-3 font-medium">
                Built for Citizens
              </div>
              <span className="text-700 text-sm line-height-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: '10px' }}
              >
                <i className="pi pi-lock text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 mb-3 font-medium">
                End-to-End Encryption
              </div>
              <span className="text-700 text-sm line-height-3">
                Risus nec feugiat in fermentum posuere urna nec. Posuere
                sollicitudin aliquam ultrices sagittis.
              </span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: '10px' }}
              >
                <i className="pi pi-check-circle text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 mb-3 font-medium">Easy to Use</div>
              <span className="text-700 text-sm line-height-3">
                Ornare suspendisse sed nisi lacus sed viverra tellus. Neque
                volutpat ac tincidunt vitae semper.
              </span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: '10px' }}
              >
                <i className="pi pi-globe text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 mb-3 font-medium">
                Fast & Global Support
              </div>
              <span className="text-700 text-sm line-height-3">
                Fermentum et sollicitudin ac orci phasellus egestas tellus
                rutrum tellus.
              </span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: '10px' }}
              >
                <i className="pi pi-github text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 mb-3 font-medium">Open Source</div>
              <span className="text-700 text-sm line-height-3">
                Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec
                adipiscing tristique risus nec feugiat.{' '}
              </span>
            </div>
            <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: '10px' }}
              >
                <i className="pi pi-shield text-4xl text-blue-500"></i>
              </span>
              <div className="text-900 mb-3 font-medium">Trusted Securitty</div>
              <span className="text-700 text-sm line-height-3">
                Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus
                metus aliquam eleifend.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="surface-section px-4 pb-8 md:px-6 lg:px-8">
        <div
          className="p-6 shadow-2 flex flex-column md:flex-row align-items-center justify-content-between"
          style={{
            borderRadius: '1rem',
            background:
              'linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)',
          }}
        >
          <div className="pr-6">
            <div className="text-blue-100 font-medium text-xl mb-3">
              TAKE THE NEXT STEP
            </div>
            <div className="text-white font-medium text-5xl">
              Empower your Citizens
            </div>
          </div>
          <div className="mt-4 mr-auto md:mt-0 md:mr-0">
            <Button
              label="Get Started"
              className="font-bold px-5 py-3 p-button-warning p-button-rounded p-button-raised white-space-nowrap"
              onClick={() => navigate('/register')}
            />
          </div>
        </div>
      </div>
      <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
        <div>
          <div className="text-900 font-bold text-4xl line-height-3 mb-3 text-center">
            Continue Breaking Records
          </div>
          <p className="text-600 line-height-3 text-lg m-0 mb-6 text-center">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <div
            className="grid surface-card shadow-2"
            style={{ borderRadius: '10px' }}
          >
            <div className="col-12 md:col-3 px-5 py-5">
              <i className="pi pi-users text-4xl text-blue-600 mb-3"></i>
              <div className="text-900 font-bold text-4xl mb-3 line-height-3">
                83M
              </div>
              <p className="text-700 m-0">
                Nostrum laborum accusamus quia iste facere possimus.
              </p>
            </div>
            <div className="col-12 md:col-3 px-5 py-5">
              <i className="pi pi-chart-line text-4xl text-orange-500 mb-3"></i>
              <div className="text-900 font-bold text-4xl mb-3 line-height-3">
                $256K
              </div>
              <p className="text-700 m-0">
                Nostrum laborum accusamus quia iste facere possimus.
              </p>
            </div>
            <div className="col-12 md:col-3 px-5 py-5">
              <i className="pi pi-globe text-4xl text-cyan-600 mb-3"></i>
              <div className="text-900 font-bold text-4xl mb-3 line-height-3">
                1,453
              </div>
              <p className="text-700 m-0">
                Nostrum laborum accusamus quia iste facere possimus.
              </p>
            </div>
            <div className="col-12 md:col-3 px-5 py-5">
              <i className="pi pi-map text-4xl text-purple-500 mb-3"></i>
              <div className="text-900 font-bold text-4xl mb-3 line-height-3">
                45 km
              </div>
              <p className="text-700 m-0">
                Nostrum laborum accusamus quia iste facere possimus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
        <div className="bg-gray-900">
          <div className="grid">
            <div className="col-12 md:col-3 flex flex-wrap justify-content-start md:mb-0 mb-3">
              {/* <img
                src="assets/images/blocks/footer/footer-2.png"
                alt="footer sections"
                width={50}
                height={50}
                className="mr-3"
              /> */}
              <div className="text-gray-300 font-bold text-5xl">
                DisasterFix
              </div>
            </div>
            <div className="col-12 md:col-3">
              <div
                className="text-white text-lg mb-4 flex flex-wrap"
                style={{ maxWidth: ' 290px' }}
              >
                Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands
              </div>
              <div className="text-white mb-3">
                <i className="pi pi-phone border-round p-1 mr-2"></i>(31) 20 779
                8986
              </div>
              <div className="text-white mb-3">
                <i className="pi pi-inbox border-round p-1 mr-2"></i>
                hello@disasterfix.tech
              </div>
            </div>
            <div className="col-12 md:col-3 text-gray-200">
              <div className="text-white font-bold line-height-3 mb-3">
                Company
              </div>
              <a className="text-white line-height-3 block cursor-pointer mb-2">
                About Us
              </a>
              <a className="text-white line-height-3 block cursor-pointer mb-2">
                News
              </a>
              <a className="text-white line-height-3 block cursor-pointer mb-2">
                Investor Relations
              </a>
              <a className="text-white line-height-3 block cursor-pointer mb-2">
                Careers
              </a>
              <a className="text-white line-height-3 block cursor-pointer">
                Media Kit
              </a>
            </div>
            <div className="col-12 md:col-3 text-gray-200">
              <div className="text-white font-bold line-height-3 mb-3">
                Resourses
              </div>
              <a
                className="text-white line-height-3 block cursor-pointer mb-2"
              >
                Get Started
              </a>
              <a className="text-white line-height-3 block cursor-pointer mb-2">
                Learn
              </a>
              <a className="text-white line-height-3 block cursor-pointer">
                Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
