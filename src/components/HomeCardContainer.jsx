import { useContext } from "react";
import { AllData } from "../Layout";
import HomeCard from "./HomeCard";

const HomeCardContainer = () => {
  const allData = useContext(AllData);
  
  return (
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
      </div>
    </section>
  );
};

export default HomeCardContainer;