import { fetchExample } from "./API/festival";
import Example from "./Components/Example/Example";
import Paging from "./Components/Paging";

export default function Home() {

  const test = fetchExample();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Example DataType={test} />
      <Paging DataType={test} />
    </main>
  );
}
