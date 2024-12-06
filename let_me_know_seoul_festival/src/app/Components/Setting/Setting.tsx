'use client'
import { setIsDarkMode, setIsInfiniteMode, setShowSetting } from '@/lib/reactionSlice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function SettingPopup() {

  const { isDarkMode, isInfiniteMode } = useSelector(
    (state: any) => state.reaction
  );

  const dispatch = useDispatch();

  const [scrollOption, setScrollOption] = useState<string>(isInfiniteMode);
  const [themeOption, setThemeOption] = useState<string>(isDarkMode);

  const doScrollOption = (value:string) => {
    setScrollOption(value)

  }

  const doThemeOption = (value:string) => {
    setThemeOption(value);

  }

  const doSettingOption = () => {
    dispatch(setIsDarkMode({
      isDarkMode: themeOption, 
    }));
    dispatch(setIsInfiniteMode({
      isInfiniteMode: scrollOption, 
    }));
    dispatch(setShowSetting({
      showSetting: false, 
    }));
  }

  const closeSettingOption = () => {
    dispatch(setShowSetting({
      showSetting: false, 
    }));
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-20">
    <div className="w-[250px] h-[300px] bg-white rounded-lg shadow-lg p-4 relative">
      <h1 className="text-lg font-bold mb-2">Setting</h1>
      <p>Scroll Option</p>
      <div className='flex w-[200px] justify-end text-right my-3 text-base'>
        <button className={`text-gray-600 mb-4 cursor-pointer ${scrollOption === 'page' ? 'font-extrabold': ''}`}
          value={'page'}
          onClick={(e) => doScrollOption(e.currentTarget.value)}
          type='button'
          >Page</button>
        <p className='mx-3'>/</p>
        <button className={`text-gray-600 mb-4 cursor-pointer ${scrollOption === 'scroll' ? 'font-extrabold' : ''}`}
          value={'scroll'}
          type='button'
          onClick={(e) => doScrollOption(e.currentTarget.value)}
        >Scroll</button>
      </div>
      <p>Theme</p>
      <div className='flex w-[200px] justify-end my-3 text-base'>
        <button className={`text-gray-600 mb-4 cursor-pointer ${themeOption === 'dark' ? 'font-extrabold': ''}`}
          value='dark'
          onClick={(e) => doThemeOption(e.currentTarget.value)}
          type='button'
        >Dark</button>
        <p className='mx-3'>/</p>
        <button className={`text-gray-600 mb-4 cursor-pointer ${themeOption === 'light' ? 'font-extrabold' : ''}`}
          onClick={(e) => doThemeOption(e.currentTarget.value)}
          type='button'
          value='light'
        >Light</button>
      </div>
      <div className='w-full bottom-4 justify-end text-right absolute right-6'>
        <button className="w-[70px] mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={doSettingOption}
          >
          Ok
        </button>
        <button className="w-[80px] px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={closeSettingOption}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}
