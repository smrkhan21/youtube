import React, { useEffect, useState } from 'react'
import { GOOGLE_API_KEY } from '../utils/constants';

const Comments = ({videoId}) => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        getComments(videoId);
    }, [])

    const getComments = async(videoId) => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId="+videoId+"&key="+GOOGLE_API_KEY)
        const json = await data.json()
        console.log(json.items);
        // setComments(json.items);
    }
  return (
    <div>{"d"}</div>
  )
}

export default Comments