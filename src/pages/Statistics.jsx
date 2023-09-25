import { Chart } from "react-google-charts";
import { getStorageItems } from "../localStorage";
import { useEffect, useState } from "react";



const Statistics = () => {
  const [donated, setDonated] = useState(0);
  let data = [
    ["Donation", "Percentage"],
    ["Total Donation", 12 - donated],
    ["Your Donation", donated]
  ];
  useEffect( () => {
    const donatedPercentage = getStorageItems().length;
    setDonated(donatedPercentage);
  }, []);

  return (
    <main>
      <section>
        <div className="container">
        <Chart
          chartType="PieChart"
          data={data}
          width={"100%"}
        />
        </div>
      </section>
    </main>
  );
};

export default Statistics;