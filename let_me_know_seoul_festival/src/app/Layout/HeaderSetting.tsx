import { setShowSetting } from '@/lib/reactionSlice';
import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';

export default function HeaderSetting() {

  const dispatch = useDispatch();

  const toggleSettingPopup = () => {
    
    dispatch(setShowSetting({
      showSetting: true, 
    }));
  }


  return (
    <div className='absolute right-10 cursor-pointer'
      onClick={toggleSettingPopup}
      >
      <IoSettingsOutline/>
    </div>
  )
}
