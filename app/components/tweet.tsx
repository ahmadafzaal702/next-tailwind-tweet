import React from "react";
import Image from "next/image";
import Link from "next/link";

import profile_pic from "../../public/Profile_pic.png";

import { GoKebabHorizontal } from "react-icons/go";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUpload } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";

// Tweet functional component
const Tweet = () => {
  return (
    // This is the main container you can see with the border
    // It contains 2 child elements, the profile image and another div that contains everything
    // This is a flexbox so the image and the content are kept inline
    <>
      <div className="max-w-xl my-24 mx-auto p-3 border bg-white flex">
        <div>
          <Image
            className="rounded-full mr-3 w-12 h-12"
            src={profile_pic}
            alt="Profile Pic"
          />
        </div>

        <div className="w-full">
          {/* This is the layer 1 of tweet contains name information */}
          <div className="flex">
            <div className="flex">
              <Link href="http://twitter.com">
                <strong className="text-gray-800 mr-1">Afzaal Ahmad </strong>
                <span className="text-gray-500 mr-1">@ahmadafzaal</span>
              </Link>
              <span className="text-gray-500 mr-1">&middot;</span>
              <span className="text-gray-500 mr-1">Mar 22</span>
            </div>
            <div className="ml-auto ">
              <GoKebabHorizontal />
            </div>
          </div>
          {/* This is the layer 2 of tweet contains tweet text */}
          <div className="mt-1">
            <p>
              You are amazing if you take time to comment on a tweet or Youtube
              video or a blogpost that has helped you!
            </p>
          </div>

          {/* This is the layer 3 of tweet contains 
           
           comments
           retweets
           hearts
           upload
           chart
           
           */}
          <div className="mt-2 flex justify-between ">
            <div className="flex items-center text-gray-600">
              <FaRegComment className="mr-1" />
              <span>20</span>
            </div>

            <div className="flex items-center text-gray-600">
              <FaRetweet className="mr-1" />
              <span>17</span>
            </div>

            <div className="flex items-center text-gray-600">
              <AiOutlineHeart className="mr-1" />
              <span>215</span>
            </div>

            <div className="flex items-center text-gray-600">
              <AiOutlineUpload className="mr-1" />
            </div>

            <div className="flex items-center text-gray-600">
              <BsBarChart className="mr-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
