import { getStorageItems } from "../localStorage";
import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {
  const [donated, setDonated] = useState(0);
  useEffect( () => {
    const donatedPercentage = getStorageItems()?.length || 0;
    setDonated(donatedPercentage);
  }, []);
  
  let data = [
    ["Donation", "Percentage"],
    ["Your Donation", donated],
    ["Total Donation", 12 - donated]
  ];
  const options = {
    legend: "none",
    colors: ["#00C49F", "#FF444A"],
    backgroundColor: 'none'
  };

  return (
    <main className="my-8">
      <section>
        <div className="container">
          <div className="absolute top-[100px] sm:top-[50px] left-0 right-0 h-[400px] sm:h-[600px] -z-10">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={'inherit'}
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10 pb-12 absolute top-[485px] sm:top-[615px] left-0 right-0 -z-10">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Your Donation</span>
              <span className="inline-block w-[70px] h-[10px] bg-[#00C49F] rounded"></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Total Donation</span>
              <span className="inline-block w-[70px] h-[10px] bg-[#FF444A] rounded"></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Statistics;