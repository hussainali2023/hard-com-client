import React from "react";

const NewsLetter = () => {
  return (
    <div className="px-2 md:px-16 py-10 mb-6 bg-black text-white grid grid-cols-1 md:grid-cols-2">
      <div className=" align-middle">
        <h1 className=" text-xl ">NEWS LETTER</h1>
        <p>
          Stay up to date with the news and promotions by signing up for our
          newsletter
        </p>
      </div>
      <div>
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className=" w-80 h-10 px-2 text-black"
        />
        <button className=" mt-2 px-2 md:px-6 py-2 bg-orange-400 font-normal md:ml-6">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
