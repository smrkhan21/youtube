import React from "react";
import { Link } from "react-router-dom";

const SuggestionSidebar = () => {
  const items = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];
  return items.map((item, index) => {
    return (
      <Link to={"abc"}>
        <div className="flex justify-start hover:bg-slate-50 rounded-2xl mt-8">
          <img
            id="thumbnail"
            alt=""
            className="style-scope ytd-moving-thumbnail-renderer fade-in w-60 mr-2 rounded-2xl"
            src="https://i.ytimg.com/an_webp/pWeUqML2zUY/mqdefault_6s.webp?du=3000&amp;sqp=CMLSoqoG&amp;rs=AOn4CLAYuFndEAXbguRX5-36guUjgfGRHg"
          ></img>
          <p>This is a video</p>
        </div>
      </Link>
    );
  });
};

export default SuggestionSidebar;
