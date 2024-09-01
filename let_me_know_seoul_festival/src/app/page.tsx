import { useGetFestivalPerPageQuery } from "./API/festival";
import FestivalItems from "./Components/FestivalItems/FestivalItems";
import Paging from "./Components/Paging";

export default function Home() {

  // const test = fetchExample();
  const { data, error, isLoading } = useGetFestivalPerPageQuery({start:"1",end:"25"})
  
  // console.log(test);

  if(error) {
    console.log(error);
    return <p>error occured..</p>
  }

  if(isLoading){
    return <p>is Loading..</p>
  }

  if(data){
    console.log(data)
  }

  return (
    <>
      <main className="block min-h-screen">
        <FestivalItems />
        {/* <Paging DataType={test} /> */}
      </main>
    </>
  );
}
