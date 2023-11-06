import React from 'react'
import { Link } from 'react-router-dom';
import {RxHamburgerMenu} from 'react-icons/rx';
import {BiSolidUserCircle, BiVideoPlus} from 'react-icons/bi';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {FaMicrophone} from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    
  return (
    <div className='grid grid-flow-col px-3 pt-3 pb-5 shadow-xl'>
        <div className='flex col-span-1 mt-2'>
            <RxHamburgerMenu onClick={() => toggleMenuHandler()} className="cursor-pointer h-5"/>
            <a href="/"><img alt="logo" src="https://freelogopng.com/images/all_img/1656501255youtube-logo-png.png" className='h-5 w-15 mx-3 object-contain'/></a>
        </div>
        <div className='col-span-10 flex justify-center'>
            <input type="text" className="w-1/2 p-2 border-solid border-2 rounded-l-full px-5 border-black-100" placeholder='Search'/>
            <button className='border-solid p-2 border-2 border-black-100 rounded-r-full px-5'><BsSearch/></button>
            <button className="bg-gray-200 py-3 px-4 rounded-full mx-5">
                <FaMicrophone/>
            </button>
        </div>
        <div className='flex flex-row-reverse justify-center col-span-1 mt-2'>
            <BiSolidUserCircle className='mx-1 h-8 w-10 cursor-pointer'/>
            <IoIosNotificationsOutline className='mx-1 h-8 w-10 cursor-pointer'/>
            <BiVideoPlus className='mx-1 h-8 w-10 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Head


