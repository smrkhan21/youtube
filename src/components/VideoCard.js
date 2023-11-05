import React, { useState } from "react";
import { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

const VideoCard = ({ info }) => {
  const [channel, setChannel] = useState("");
  
  const { snippet, statistics } = info;
  const { channelTitle, channelId, title, thumbnails, publishedAt } = snippet;

  useEffect(() => {
    getChannelDetail();
  }, []);

  const getChannelDetail = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        channelId +
        "&key=" +
        GOOGLE_API_KEY
    );
    const json = await data.json();
    setChannel(json.items[0]?.snippet?.thumbnails?.default?.url);
  };

  const convertToYouTubeViewsFormat = (number) => {
    if (number >= 1000000) {
      // Convert to millions (round to one decimal place)
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      // Convert to hundreds of thousands (round to nearest whole number)
      return Math.round(number / 1000) + 'K';
    } else {
      return number.toString();
    }
  }

  function timeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const timeDifference = now - date;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44); // Average days in a month
    const years = Math.floor(months / 12);
  
    if (years > 0) {
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    } else if (months > 0) {
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else if (days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }
  }

  return (
    <div className="p-2 w-74 my-2">
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
