import React, { useState } from "react";
import { useEffect } from "react";
import { convertToYouTubeViewsFormat, getChannelDetail, timeAgo } from "../utils/helper";

const VideoCard = ({ info }) => {
  const [channel, setChannel] = useState("");
  
  const { snippet, statistics } = info;
  const { channelTitle, channelId, title, thumbnails, publishedAt } = snippet;

  useEffect(() => {
    getChannel(channelId);
  }, []);

  const getChannel = async (channelId) => {
    const json = await getChannelDetail(channelId);
    setChannel(json?.items[0]?.snippet?.thumbnails?.default?.url);
  }


  return (
    <div className="p-2 w-74 my-2 hover:bg-slate-100">
      <img
        className="rounded-lg hover:rounded-none"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="flex justify-start mt-2">
        <img alt="channelLogo" className="rounded-full w-8 h-8" src={channel} />
        <ul className="ml-3">
          <li className="truncate w-48 break-words font-semibold">{title}</li>
          <li className="text-gray-500">{channelTitle}</li>
          <li  className="text-gray-500">{convertToYouTubeViewsFormat(statistics.viewCount)} views • {timeAgo(publishedAt)}</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
