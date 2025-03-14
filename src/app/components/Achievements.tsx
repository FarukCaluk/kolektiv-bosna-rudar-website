import React from "react";
import { FaUserFriends, FaTrophy, FaRunning } from "react-icons/fa";

const Achievements = () => {
  return (
    <div className="bg-gradient-to-t from-[#ff8d7cb4] to-[#F45B44] text-white border-y border-[#ff8d7cb4] py-8 px-4 sm:px-8 shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center items-center">
        <div className="flex flex-col items-center">
          <FaUserFriends className="text-5xl sm:text-6xl mb-2" />
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold">
            500+ POLAZNIKA
          </span>
        </div>
        <div className="flex flex-col items-center">
          <FaTrophy className="text-5xl sm:text-6xl mb-2" />
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold">
            50+ TROFEJA
          </span>
        </div>
        <div className="flex flex-col items-center">
          <FaRunning className="text-5xl sm:text-6xl mb-2" />
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold">
            4 SPORTA
          </span>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
