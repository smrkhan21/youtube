import { GOOGLE_API_KEY } from "./constants";

export const convertToYouTubeViewsFormat = (number) => {
  if (!number) return null;
  if (number >= 1000000) {
    // Convert to millions (round to one decimal place)
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    // Convert to hundreds of thousands (round to nearest whole number)
    return Math.round(number / 1000) + "K";
  } else {
    return number.toString();
  }
};

export const timeAgo = (dateString) => {
  if (!dateString) return null;
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
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }
};

export const getChannelDetail = async (channelId) => {
  const data = await fetch(
    "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
      channelId +
      "&key=" +
      GOOGLE_API_KEY
  );
  const json = await data.json();
  return json;
};
