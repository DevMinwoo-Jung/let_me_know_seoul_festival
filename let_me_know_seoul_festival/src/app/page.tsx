'use client'
import Paging from "./Components/Paging";
import { FestivalItems } from "./Components/FestivalItems/FestivalItems";
import { useSelector } from "react-redux";
import Search from "./Components/Search/Search";
import SettingPopup from "./Components/Setting/Setting";

export default function Home() {
  const { showSetting  } = useSelector((state: any) => state.reaction);
  
 
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

