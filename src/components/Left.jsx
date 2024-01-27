import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { SlGlobe } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";

const Left = () => {
  return (
    <div className="divide-y-[1px] divide-dashed divide-gray-500 bg-slate-200 text-gray-700 px-7 sm:px-14">
      <div className="space-y-3  py-4">
        <h2 className="uppercase text-sm font-semibold tracking-widest">
          contact
        </h2>
        <ul className="space-y-2 text-xs">
          <li className="flex items-center gap-3">
            <IoIosPhonePortrait size={"15px"} />
            <span>123-456-7890</span>
          </li>
          <li className="flex items-center gap-3">
            <TfiEmail size={"15px"} />
            <span>hello@reallygreatsite.com</span>
          </li>
          <li className="flex items-center gap-3">
            <SlGlobe size={"15px"} />
            <span>www.reallygreatsite.com</span>
          </li>
          <li className="flex items-center gap-3">
            <SlLocationPin size={"15px"} />
            <span>123 Anywhere St. Any city</span>
          </li>
        </ul>
      </div>
      <div className="py-4">
        <h2 className="uppercase text-sm font-semibold tracking-widest mb-2">
          skills
        </h2>
        <ul className="text-xs space-y-2 ">
          <li>Skill name here</li>
          <li>Your skill</li>
          <li>Special skills</li>
          <li>List your skills</li>
        </ul>
      </div>
      <div>
        <div className="py-4">
          <h2 className="uppercase text-sm font-semibold tracking-widest mb-2">
            Education
          </h2>
          <ul className="text-xs space-y-2 ">
            <li className="font-semibold opacity-75">Your degree name</li>
            <li className="font-semibold text-[14px]">Your institution name</li>
            <li>2015-2019</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div className="space-y-2 py-4">
          <ul className="text-xs space-y-2">
            <li className="font-semibold opacity-75">Your degree name</li>
            <li className="font-semibold text-[14px]">Your institution name</li>
            <li>2015-2019</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
      </div>
      <div className="space-y-2 py-4">
        <h2 className="uppercase text-sm font-semibold tracking-widest mb-2">
          Languages
        </h2>
        <div className="flex space-y-1 items-center gap-1">
          <ul className="text-xs space-y-2 ">
            <li className="flex items-center gap-2">English</li>
            <li className="flex items-center gap-2">German</li>
            <li className="flex items-center gap-2">Spanish</li>
          </ul>
          <ul className="text-xs space-y-5 w-full h-full ">
            <li className="w-[85%] h-1 bg-gray-500 rounded-lg"></li>
            <li className="w-[65%] h-1 bg-gray-500 rounded-lg"></li>
            <li className="w-[75%] h-1 bg-gray-500 rounded-lg"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Left;
