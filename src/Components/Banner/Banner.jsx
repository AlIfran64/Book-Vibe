import React from 'react';

const Banner = () => {
  return (
    <div className="hero bg-base-200 py-32  mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img
          src="/images/pngwing 1.png"
          className="max-w-sm "
        />
        <div>
          <h1 className="text-7xl font-bold mb-10">Books to freshen up <br /> your bookshelf</h1>

          <button className="btn py-7 px-6 text-lg bg-black text-white rounded-lg">View the list</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;