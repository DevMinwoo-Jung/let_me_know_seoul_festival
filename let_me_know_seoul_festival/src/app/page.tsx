import { fetchExample } from "./API/festival";
import FestivalItems from "./Components/FestivalItems/FestivalItems";
import Paging from "./Components/Paging";

export default function Home() {

  // const test = fetchExample();
  
  // console.log(test);

  return (
    <>
      <main className="block min-h-screen">
        <FestivalItems />
        {/* <Paging DataType={test} /> */}
      </main>
    </>
  );
}
