import React from 'react'
import {GoHomeFill} from 'react-icons/go';
import { PiFilmReelLight } from 'react-icons/pi'
import { MdOutlineSubscriptions, MdSportsTennis } from 'react-icons/md'
import { BiTrendingUp, BiShoppingBag, BiMovie, BiNews, BiPodcast } from 'react-icons/bi'
import { BsMusicNote } from 'react-icons/bs'
import { CiStreamOn } from 'react-icons/ci'
import { SiYoutubegaming } from 'react-icons/si'
import { AiOutlineBulb } from 'react-icons/ai'
import { GiClothesline } from 'react-icons/gi'
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg'>
        <ul>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3  hover:bg-slate-200 hover:rounded-lg'><GoHomeFill className='mr-4'/>Home</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><PiFilmReelLight className='mr-4'/> Shorts</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><MdOutlineSubscriptions className='mr-4'/> Subscriptions</li>
        </ul>
        <ul>
            <h1 className='flex justify-start items-center mx-2 my-2 py-1 pl-3 border-b-2 pt-5 font-bold '>Explore</h1>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><BiTrendingUp className='mr-4'/> Trending</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><BiShoppingBag className='mr-4'/> Shopping</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><BsMusicNote className='mr-4'/> Music</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><BiMovie className='mr-4'/> Movies</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><CiStreamOn className='mr-4'/> Live</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><SiYoutubegaming className='mr-4'/> Gaming</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><BiNews className='mr-4'/> News</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><MdSportsTennis className='mr-4'/> Sports</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><AiOutlineBulb className='mr-4'/> Learning</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><GiClothesline className='mr-4'/> Fashion & Beauty</li>
            <li className='flex justify-start items-center mx-2 my-2 py-1 pl-3 hover:bg-slate-200 hover:rounded-lg'><BiPodcast className='mr-4'/> Podcasts</li>
        </ul>
    </div>
  )
}

export default Sidebar