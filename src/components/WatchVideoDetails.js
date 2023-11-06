import React, { useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { PiShareFatLight, PiUserSquareLight } from "react-icons/pi";
import {
  convertToYouTubeViewsFormat,
  getChannelDetail,
  timeAgo,
} from "../utils/helper";
import { GoVideo } from "react-icons/go";
import { GOOGLE_API_KEY } from "../utils/constants";

const WatchVideoDetails = ({ id }) => {
  const [videoDetails, setVideoDetails] = useState([]);
  const [channel, setChannel] = useState("");
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    loadVideo(id);
  }, []);

  const loadVideo = async (id) => {
    let data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        id +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    data = json.items[0];

    setVideoDetails(data);

    if (data.snippet) {
      const { snippet, statistics } = data;
      const { channelTitle, channelId, title, thumbnails, publishedAt } =
        snippet;

      const json = await getChannelDetail(channelId);
      setChannel(json.items[0]);
    }

    return;
  };

  const handleExpand = () => {
    setExpand(true);
  };

  return (
    <>
      <h1 className="font-semibold text-xl py-5">
        {videoDetails?.snippet?.title}
      </h1>
      <div className="flex justify-between">
        <div className="flex">
          <img
            id="img"
            draggable="false"
            className="rounded-full w-12 object-cover mr-3"
            alt=""
            src={channel?.snippet?.thumbnails?.medium?.url}
          />
          <p className="font-semibold mr-4">
            {videoDetails?.snippet?.channelTitle} <br />
            <span className="font-normal text-slate-800">
              {convertToYouTubeViewsFormat(
                channel?.statistics?.subscriberCount
              )}{" "}
              subscribers
            </span>
          </p>
          <button className="font-normal px-6 bg-black text-white rounded-full hover:bg-slate-800">
            Subscribe
          </button>
        </div>
        <div className="flex justify-between">
          <button className="font-medium px-4 py-0 bg-slate-200 hover:bg-slate-300 text-black rounded-l-full border-solid border-r-2 border-slate-300 flex items-center">
            <BiLike className="mx-1" />{" "}
            {convertToYouTubeViewsFormat(videoDetails?.statistics?.likeCount)}
          </button>
          <button className="font-medium px-4 py-0 mr-1 bg-slate-200 hover:bg-slate-300 text-black rounded-r-full border-l-slate-400">
            <BiDislike />
          </button>
          <button className="font-medium px-4 py-0 mr-1 bg-slate-200 hover:bg-slate-300 text-black rounded-full flex items-center">
            <PiShareFatLight className="mx-1" /> Share
          </button>
        </div>
      </div>
      <div className="bg-slate-100 rounded-2xl p-4 mt-5">
        <p className="font-semibold">
          {convertToYouTubeViewsFormat(videoDetails?.statistics?.viewCount)}{" "}
          views, {timeAgo(videoDetails?.snippet?.publishedAt)}
        </p>
        <div className="w-[100%] overflow-clip font-sans font-normal space-x-0">
          <pre className={"w-96 break-words font-normal tracking-tight"}>
            {!expand
              ? videoDetails?.snippet?.description.substring(0, 100)
              : videoDetails?.snippet?.description}
          </pre>
          {!expand && <span className="font-semibold cursor-pointer" onClick={() => setExpand(true)}>...Show More</span>}
          {expand && (
            <div className="flex mt-10 w-1/4 justify-between">
              <img
                id="img"
                draggable="false"
                className="rounded-full h-14 w-14 mr-4"
                alt=""
                src={channel?.snippet?.thumbnails?.medium?.url}
              />
              <div>
                <p className="font-semibold">
                  {videoDetails?.snippet?.channelTitle}
                </p>
                <p>
                  {convertToYouTubeViewsFormat(
                    channel?.statistics?.subscriberCount
                  )}
                  subscribers
                </p>
              </div>
            </div>
          )}
          {expand && (
            <div className="flex w-[90%] justify-center mt-5">
              <button className="border-solid w-1/2 border-2 py-1 px-6 ring-1 hover:bg-slate-200 border-slate-200 rounded-full text-slate-900 flex justify-center items-center">
                <GoVideo className="mr-2" />
                Videos
              </button>
              <button className="border-solid w-1/2 border-2 py-1 px-6 ring-1 mx-2 hover:bg-slate-200 border-slate-200 rounded-full text-slate-900 flex justify-center items-center">
                <PiUserSquareLight className="mr-2" />
                About
              </button>
            </div>
          )}
          {
            expand &&  <span className="font-semibold  mt-10 cursor-pointer" onClick={ () => setExpand(false)}>...Show Less</span>
          }
        </div>
      </div>
    </>
  );
};

export default WatchVideoDetails;
