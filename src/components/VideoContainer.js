import React from 'react'
import { useEffect } from 'react'
import { YOUTUBE_API_KEY } from '../utils/constants'
import { useState } from 'react'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect( () => {
    getVideo()
  }, [])

  const getVideo = async () => {
    // setVideos([]);
    // return;
    let data = await fetch(YOUTUBE_API_KEY)
    const json = await data.json()
    setVideos(json.items);
    return;
  }
  return (
    <div className='flex flex-wrap justify-evenly'>
      {videos.length && videos.map((video) => {
        return <Link key={video.id} to={"watch?v="+video.id}><VideoCard info={video} /></Link>
      })}
    </div>
  )
}

export default VideoContainer