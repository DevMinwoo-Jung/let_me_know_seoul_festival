'use client'
import Paging from "./Components/Paging";
import { FestivalItems } from "./Components/FestivalItems/FestivalItems";
import { useSelector } from "react-redux";
import Search from "./Components/Search/Search";
import SettingPopup from "./Components/Setting/Setting";
import { useEffect } from "react";
import { getTheme } from "@/lib/reactionSlice";
import { RootState } from "@/lib/store";

export default function Home() {

  const { showSetting, isDarkMode  } = useSelector((state: RootState) => state.reaction);

  useEffect(() => {
    getTheme();
  }, [isDarkMode])

  return (
      <div className="block h-maingPage">
        <Search/>
        <FestivalItems />
        <Paging/>
        {
          showSetting && <SettingPopup/>
        }
      </div>
  );
}

