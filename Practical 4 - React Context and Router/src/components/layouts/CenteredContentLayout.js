import React from 'react';
import icon from "../../images/logos/epinotes_icon.svg";

const CenteredContentLayout = ({ children, className = '', ...props }) => (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="fill-current h-8 w-8 mr-2" width="54" height="54" src={icon} alt="EpiNotes">
          </img>
          <span className="font-semibold text-xl tracking-tight">EpiNotes</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"> Home </a>
          </div>
          <div>
            <a href="/notes" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">View all notes</a>
          </div>
        </div>
      </nav>
      <div
          className={`min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ${className}`}
          {...props}
      >
        <div className="max-w-md w-full">{children}</div>
      </div>
    </div>
);

export default CenteredContentLayout;