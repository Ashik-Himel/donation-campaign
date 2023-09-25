import { useContext, useEffect, useState } from "react";
import { getStorageItems } from "../localStorage";
import { AllData } from "../Layout";
import DonationCard from "../components/DonationCard";

const Donation = () => {
  const donatedIDs = getStorageItems();
  const allData = useContext(AllData);
  const [matchedIDs, setMatchedIDs] = useState([]);
  useEffect( () => {
    if (allData.length > 0) {
      const matched = allData.filter(data => donatedIDs.includes(data.id));
      setMatchedIDs(matched);
    }
  }, [donatedIDs ,allData]);

  return (
    <main className="my-12">
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {
              matchedIDs.map(data => <DonationCard key={data.id} data={data}></DonationCard>)
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donation;