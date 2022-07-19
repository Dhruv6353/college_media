import React from "react";
import { BiSearch } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";

const RightSidebar = () => {
  return (
    <div className="  hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name="Ajay Patel"
        src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
        status="online"
      />
      <Contacts
        name="Ananya Thakkar"
        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        status="online"
      />
      <Contacts
        name="Samir Panchal"
        src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600"
        status="offline"
      />
    </div>
  );
};

export default RightSidebar;