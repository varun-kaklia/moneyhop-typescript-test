import React from 'react';

const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center p-4 w-full">
      <div className="flex flex-col items-center justify-center rounded-2xl bg-secondary w-full p-10 sm:p-16 lg:p-20">
        <div className="text-white w-full text-center sm:w-2/3 lg:w-1/3">
          <h1 className="text-2xl font-medium py-2">Subscribe to Our Newsletter</h1>
          <p className="py-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
        </div>
        <div className="w-full mt-4 sm:mt-6 lg:w-2/5 bg-white p-1 rounded-lg">
          <div className="flex items-center justify-between">
            <input
              className="text-sm p-2 w-full sm:p-3"
              placeholder="Your Email..."
            />
            <button className="bg-primary py-2 px-4 rounded-lg text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
