import React, { useRef } from 'react';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';


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
    <div>
      <div className="surface-section h-screen border-right-1 surface-border flex flex-column w-18rem select-none">
        <div className="p-3 flex align-items-center justify-content-center">
          <img
            src="assets/hyper-700.svg"
            alt="hyper-700"
            height={40}
          />
        </div>
        <div className="overflow-y-auto">
          <ul className="list-none p-2 m-0">
            <li>
              <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-home mr-2"></i>
                <span className="font-medium">Training</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-comments mr-2"></i>
                <span className="font-medium">Messages</span>
                <span
                  className="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle"
                  style={{ minWidth: '1.5rem', height: '1.5rem' }}
                >
                  3
                </span>
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
                  className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full"
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
                      className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full"
                    >
                      <i className="pi pi-chart-line mr-2"></i>
                      <span className="font-medium">Progress</span>
                      <i className="pi pi-chevron-down ml-auto mr-1"></i>
                      <Ripple />
                    </a>
                  </StyleClass>
                  <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-table mr-2"></i>
                        <span className="font-medium">View</span>
                        <Ripple />
                      </a>
                    </li>
                    <li>
                      <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                        <i className="pi pi-search mr-2"></i>
                        <span className="font-medium">Search</span>
                        <Ripple />
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                    <i className="pi pi-chart-line mr-2"></i>
                    <span className="font-medium">Expenses</span>
                    <Ripple />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-chart-bar mr-2"></i>
                <span className="font-medium">Analytics</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-dollar mr-2"></i>
                <span className="font-medium">Supplies</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-users mr-2"></i>
                <span className="font-medium">Team</span>
                <Ripple />
              </a>
            </li>
            <li>
              <a className="p-ripple flex align-items-center cursor-pointer p-3 text-700 hover:surface-100 border-round transition-colors transition-duration-150 w-full">
                <i className="pi pi-cog mr-2"></i>
                <span className="font-medium">Settings</span>
                <Ripple />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
