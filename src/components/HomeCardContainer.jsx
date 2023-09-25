import { useContext } from "react";
import { AllData } from "../Layout";
import HomeCard from "./HomeCard";

const HomeCardContainer = () => {
  const allData = useContext(AllData);
  
  return (
    <section className="my-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {
            allData.map(data => <HomeCard key={data.id} data={data}></HomeCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default HomeCardContainer;