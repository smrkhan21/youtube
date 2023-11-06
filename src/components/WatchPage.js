import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useState } from "react";
import WatchVideoDetails from "./WatchVideoDetails";
import SuggestionSidebar from "./SuggestionSidebar";
import Comments from "./Comments";

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [params] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const id = params.get("v");
  return (
    <div className="flex flex-auto">
      <div className="px-16 py-5 w-[70%] h-[80vh]">
        <iframe
          width="100%"
          height="100%"
          src={"https://www.youtube.com/embed/" + id + "?autoplay=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="mt-2 rounded-2xl"
          allowFullScreen
        ></iframe>
        <div>{videoDetails && <WatchVideoDetails id={id} />}</div>
        <div className="comments">
            <Comments videoId={id}/>
        </div>
      </div>
      <div className="w-[30%]">
        <SuggestionSidebar/>
      </div>
    </div>
  );
};

export default WatchPage;
