import React from "react";
import { FaUserFriends, FaTrophy, FaRunning } from "react-icons/fa";

const Achievements = () => {
  return (
    <div className="bg-gradient-to-t from-[#ff8d7cb4] to-[#F45B44] text-white border-y-2 border-[#ff8d7cb4] p-8 shadow-md">
      <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
        <div className="flex justify-center text-center items-center">
          <FaUserFriends className="text-6xl mb-2 mr-4" />
          <span className="text-3xl">500+ POLAZNIKA</span>
        </div>
        <div className="flex justify-center text-center items-center">
          <FaTrophy className="text-6xl mb-2 mr-4" />
          <span className="text-3xl">50+ TROFEJA</span>
        </div>
        <div className="flex justify-center text-center items-center">
          <FaRunning className="text-6xl mb-2 mr-4" />
          <span className="text-3xl">4 SPORTA</span>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
