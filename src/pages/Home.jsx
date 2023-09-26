import { useContext } from "react";
import HomeCard from "../components/HomeCard";
import { AllData } from "../Layout";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const initialData = useLoaderData();
  const allData = useContext(AllData).data;
  const searchFunc = useContext(AllData).setData;
  
  return (
    <main>
      <Helmet>
        <title>Home - Donation Campaign</title>
      </Helmet>
      <section className="my-16">
      <div className="container">
        {
          allData.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
              allData.map(data => <HomeCard key={data.id} data={data}></HomeCard>)
            }
          </div> : null
        }
        {
          !allData.length ? <div className="pt-6">
            <img src="/images/empty-box.png" alt="Empty Box Image" className="max-w-[200px] mx-auto" />
            <h2 className="text-center text-3xl font-semibold mt-6">No Matching Found!</h2>
          </div> : null
        }
        {
          allData.length !== 12 ? <div className="text-center mt-8">
            <button className="btn bg-[#FF444A] text-white hover:bg-[#FF444A] border border-[#FF444A] hover:border-[#FF444A] normal-case text-base" onClick={() => searchFunc(initialData)}>Reload All</button>
          </div> : null
        }
      </div>
    </section>
    </main>
  );
};

export default Home;