import React, { useEffect } from "react";
import { PiShareFatLight } from "react-icons/pi";

function News({ news, authors }: any) {
  const getDay = (fullDate: string): number => {
    const date = new Date(fullDate);
    const day = date.getDate();
    return day;
  };

  const getMonth = (fullDate: string): string => {
    const date = new Date(fullDate);
    const month = date
      .toLocaleString("default", { month: "short" })
      .toUpperCase();
    return month;
  };

  //get author's name depending on the news
  const getAuthorName = (author_id: number): string => {
    const author = authors.find((name: any) => name.id === author_id);
    return author ? author.name : "No Author Found";
  };

  return (
    <div className="flex justify-center pt-6">
      {news.map((item: any) => (
        <div className="flex flex-col w-[60%]">
          {/* banner image and date */}
          <div className="relative" key={news.id}>
            <img
              className="h-[50vh] w-full object-cover"
              src={`../assets/images/${item.image_url}`}
              alt={item.title}
            />
            <div className="absolute bottom-7 left-11 h-28 w-28 bg-[#EB0A1E] transform -skew-x-12">
              <div className="relative">
                <div className="absolute inset-0 transform skew-x-12 py-5 px-6">
                  <p className="text-white text-5xl">
                    {getDay(item.created_at)}
                  </p>
                  <p className="text-white text-lg">
                    {getMonth(item.created_at)}
                  </p>
                </div>
              </div>
              <div className="triangle absolute bottom-2 right-2"></div>
            </div>

            {/* share button */}
            <div className="flex justify-end gap-1 mt-2 py-3 border-b-2">
              <PiShareFatLight className="mt-1" />
              <span className="hover:cursor-pointer">SHARE</span>
            </div>
          </div>

          {/* news author, title, details */}
          <div className="h-64 mt-1">
            <p className="text-[#EB0A1E] text-[18px]">
              {getAuthorName(item.author_id)}
            </p>
            <p className="text-gray-700 text-3xl font-bold mt-2">
              {item.title}
            </p>
            <p className="text-gray-700 text-[18px] my-5">{item.body}</p>

            {/* read article button */}
            <button className="text-gray-700 text-[14px] font-bold underline decoration-2 underline-offset-4">
              READ ARTICLE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
