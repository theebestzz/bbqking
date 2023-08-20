import React from "react";
import FireVideo from "../utils/FireVideo";
import BbqKingLogo from "../utils/BbqKingLogo";

const Notification = () => {
  return (
    <div className="bg-main text-white flex items-center justify-center text-center text-sm md:text-lg cursor-pointer w-full h-12">
      <video autoPlay muted loop className="w-full h-12 object-cover">
        <FireVideo />
      </video>
      <span className="absolute top-2 animate-pulse flex items-center justify-center gap-4">
        <span className="animate-bounce">
          <BbqKingLogo />
        </span>
        25% discount on BBQ King
        <span className="animate-bounce">
          <BbqKingLogo />
        </span>
      </span>
    </div>
  );
};

export default Notification;
