import React, { useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import TrainingVideoElement from "../components/TrainingVideoElement";


const Dashboard = () => {
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const btnRef5 = useRef(null);
  const btnRef6 = useRef(null);
  const btnRef7 = useRef(null);
  const btnRef8 = useRef(null);
  const btnRef9 = useRef(null);
  const btnRef10 = useRef(null);
  const btnRef11 = useRef(null);
  const btnRef12 = useRef(null);
  const btnRef13 = useRef(null);
  const btnRef14 = useRef(null);
  const btnRef15 = useRef(null);
  const btnRef16 = useRef(null);
  const btnRef17 = useRef(null);
  return (
    <div className="min-h-screen flex relative lg:static surface-ground">
      <div
        id="app-sidebar-1"
        className="bg-bluegray-800 h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none"
        style={{ width: '280px' }}
      >
        <div className="flex flex-column h-full">
          <div
            className="flex align-items-center px-5 bg-bluegray-900 flex-shrink-0"
            style={{ height: '60px' }}
          >
            <img src="assets/hyper-300.svg" alt="hyper-300" height={30} />
          </div>
          <div className="overflow-y-auto mt-3">
            <ul className="list-none p-3 m-0">
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors w-full"
                >
                  <i className="pi pi-home mr-2"></i>
                  <span className="font-medium">Dashboard</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors w-full"
                >
                  <i className="pi pi-bookmark mr-2"></i>
                  <span className="font-medium">Bookmarks</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <StyleClass
                  nodeRef={btnRef1}
                  selector="@next"
                  enterClassName="hidden"
                  enterActiveClassName="slidedown"
                  leaveToClassName="hidden"
                  leaveActiveClassName="slideup"
                >
                  <a
                    ref={btnRef1}
                    className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors w-full"
                  >
                    <i className="pi pi-chart-line mr-2"></i>
                    <span className="font-medium">Reports</span>
                    <i className="pi pi-chevron-down ml-auto mr-1"></i>
                    <Ripple />
                  </a>
                </StyleClass>
                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                  <li>
                    <StyleClass
                      nodeRef={btnRef2}
                      selector="@next"
                      enterClassName="hidden"
                      enterActiveClassName="slidedown"
                      leaveToClassName="hidden"
                      leaveActiveClassName="slideup"
                    >
                      <a
                        ref={btnRef2}
                        className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                        transition-duration-150 transition-colors w-full"
                      >
                        <i className="pi pi-chart-line mr-2"></i>
                        <span className="font-medium">Revenue</span>
                        <i className="pi pi-chevron-down ml-auto mr-1"></i>
                        <Ripple />
                      </a>
                    </StyleClass>
                    <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                      <li>
                        <a
                          className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors w-full"
                        >
                          <i className="pi pi-table mr-2"></i>
                          <span className="font-medium">View</span>
                          <Ripple />
                        </a>
                      </li>
                      <li>
                        <a
                          className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                                transition-duration-150 transition-colors w-full"
                        >
                          <i className="pi pi-search mr-2"></i>
                          <span className="font-medium">Search</span>
                          <Ripple />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                        transition-duration-150 transition-colors w-full"
                    >
                      <i className="pi pi-chart-line mr-2"></i>
                      <span className="font-medium">Expenses</span>
                      <Ripple />
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors w-full"
                >
                  <i className="pi pi-users mr-2"></i>
                  <span className="font-medium">Team</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors w-full"
                >
                  <i className="pi pi-comments mr-2"></i>
                  <span className="font-medium">Messages</span>
                  <span
                    className="inline-flex align-items-center justify-content-center ml-auto bg-yellow-500 text-bluegray-900 border-circle"
                    style={{ minWidth: '1.5rem', height: '1.5rem' }}
                  >
                    3
                  </span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors w-full"
                >
                  <i className="pi pi-calendar mr-2"></i>
                  <span className="font-medium">Calendar</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                    transition-duration-150 transition-colors w-full"
                >
                  <i className="pi pi-cog mr-2"></i>
                  <span className="font-medium">Settings</span>
                  <Ripple />
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto mx-3">
            <hr className="mb-3 border-top-1 border-bluegray-600" />
            <ul className="list-none p-2 m-0 hidden">
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                transition-duration-150 transition-colors w-full"
                >
                  <i className="pi pi-user mr-2"></i>
                  <span className="font-medium">Profile</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                transition-duration-150 transition-colors w-full"
                >
                  <i className="pi pi-cog mr-2"></i>
                  <span className="font-medium">Settings</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-900 border-round text-bluegray-100 hover:text-bluegray-50
                transition-duration-150 transition-colors w-full"
                >
                  <i className="pi pi-sign-out mr-2"></i>
                  <span className="font-medium">Sign Out</span>
                  <Ripple />
                </a>
              </li>
            </ul>
            <StyleClass
              nodeRef={btnRef3}
              selector="@prev"
              enterClassName="hidden"
              enterActiveClassName="fadein"
              leaveToClassName="hidden"
              leaveActiveClassName="fadeout"
            >
              <a
                ref={btnRef3}
                className="p-ripple my-3 px-3 py-2 flex align-items-center hover:bg-bluegray-900 border-round cursor-pointer text-bluegray-100 hover:text-bluegray-50
            transition-duration-150 transition-colors w-full"
              >
                <img
                  src="assets/avatar-f-1.png"
                  alt="avatar-f-1"
                  className="mr-2"
                  style={{ width: '28px', height: '28px' }}
                />
                <span className="font-medium">Amy Elsner</span>
                <i className="pi pi-chevron-up ml-auto"></i>
                <Ripple />
              </a>
            </StyleClass>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-column relative flex-auto">
        <div
          className="flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border"
          style={{ height: '60px' }}
        >
          <div className="flex">
            <StyleClass
              nodeRef={btnRef4}
              selector="#app-sidebar-1"
              enterClassName="hidden"
              enterActiveClassName="fadeinleft"
              leaveToClassName="hidden"
              leaveActiveClassName="fadeoutleft"
              hideOnOutsideClick
            >
              <a
                ref={btnRef4}
                className="p-ripple cursor-pointer block lg:hidden text-700 mr-3"
              >
                <i className="pi pi-bars text-4xl"></i>
                <Ripple />
              </a>
            </StyleClass>
            <span className="p-input-icon-left">
              <i className="pi pi-search"></i>
              <InputText className="border-none" placeholder="Search" />
            </span>
          </div>
          <StyleClass
            nodeRef={btnRef5}
            selector="@next"
            enterClassName="hidden"
            enterActiveClassName="fadein"
            leaveToClassName="hidden"
            leaveActiveClassName="fadeout"
            hideOnOutsideClick
          >
            <a
              ref={btnRef5}
              className="p-ripple cursor-pointer block lg:hidden text-700"
            >
              <i className="pi pi-ellipsis-v text-2xl"></i>
              <Ripple />
            </a>
          </StyleClass>
          <ul
            className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row
        surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static"
          >
            <li>
              <a
                className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                transition-duration-150 transition-colors w-full"
              >
                <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                <span className="block lg:hidden font-medium">Inbox</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a
                className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                transition-duration-150 transition-colors w-full"
              >
                <i className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0 p-overlay-badge">
                  <Badge severity="danger" />
                </i>
                <span className="block lg:hidden font-medium">
                  Notifications
                </span>
                <Ripple />
              </a>
            </li>
            <li className="border-top-1 surface-border lg:border-top-none">
              <a
                className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                transition-duration-150 transition-colors w-full"
              >
                <img
                  src="assets/avatar-f-1.png"
                  alt="avatar-f-1"
                  className="mr-3 lg:mr-0"
                  style={{ width: '32px', height: '32px' }}
                />
                <div className="block lg:hidden">
                  <div className="text-900 font-medium">Josephine Lillard</div>
                  <span className="text-600 font-medium text-sm">
                    Marketing Specialist
                  </span>
                </div>
                <Ripple />
              </a>
            </li>
          </ul>
        </div>
        <div className="p-5 flex flex-column flex-auto">
          <div className="border-2 border-dashed surface-border border-round surface-section flex-auto">
            <TrainingVideoElement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
