import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ data }) => {
  console.log(data);
  const { review, user_photoURL, userName } = data;
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border max-w-lg mx-auto">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-4xl text-[#B6E0E4] mb-4" />

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">{review}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-teal-700 my-6"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img
          src={user_photoURL}
          alt="profile"
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-xl font-bold text-teal-900">{userName}</h3>
          <p className="text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
