import { fetchExample } from "./API/festival";
import FestivalItems from "./Components/FestivalItems/FestivalItems";
import Paging from "./Components/Paging";

export default function Home() {

  const test = fetchExample();
  
  return (
    <main className="block min-h-screen items-center justify-between p-24">
      <FestivalItems DataType={test} />
      <Paging DataType={test} />
    </main>
  );
}
