import { useState } from "react";
import { FaEye, FaStar, FaBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  // State to manage the "Read More" functionality
  const [isReadMore, setIsReadMore] = useState(false);

  // Function to toggle between Read More and Show Less
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // Text to display: either a preview or full text based on isReadMore state
  const textToDisplay = isReadMore ? news.details : news.details.slice(0, 100);

  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-4">
      <div className="flex items-center mb-4">
        <img
          className="w-10 h-10 rounded-full"
          src={news.author.img}
          alt="author"
        />
        <div className="ml-4">
          <h5 className="text-lg font-semibold">{news.author.name}</h5>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
      </div>

      <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {news.title}
      </h3>
      <img
        className="rounded-lg mb-4"
        src={news.thumbnail_url}
        alt="thumbnail"
      />

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {textToDisplay}
        {news.details.length > 100 && (
          <>
            {isReadMore ? "" : "..."}
            <span
              onClick={toggleReadMore}
              className="text-blue-600 cursor-pointer"
            >
              {isReadMore ? " Show Less" : " Read More"}
            </span>
          </>
        )}
      </p>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{news.rating.number}</span>
        </div>

        <div className="flex items-center">
          <FaEye className="mr-1" />
          <span className="text-sm">{news.total_view}</span>
        </div>

        <div className="flex gap-3">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
