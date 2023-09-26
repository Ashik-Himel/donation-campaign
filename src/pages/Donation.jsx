import { useEffect, useState } from "react";
import { getStorageItems } from "../localStorage";
import DonationCard from "../components/DonationCard";

const Donation = () => {
  const donatedIDs = getStorageItems();
  const [allData, setAllData] = useState([]);
  const [isAll, setIsAll] = useState(false);
  const [matchedIDs, setMatchedIDs] = useState([]);
  useEffect( () => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setAllData(data));
  }, []);
  useEffect( () => {
    if (allData.length > 0) {
      const matched = allData.filter(data => donatedIDs?.includes(data.id));
      setMatchedIDs(matched);
    }
  }, [allData]);

  return (
    <main className="my-8">
      {
        matchedIDs?.length ? <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {
                isAll ? matchedIDs.map(data => <DonationCard key={data.id} data={data}></DonationCard>) : matchedIDs.slice(0, 4).map(data => <DonationCard key={data.id} data={data}></DonationCard>)
              }
            </div>
            {
              !isAll && matchedIDs?.length > 4 && <div className="mt-8 text-center">
                <button className="btn bg-[#009444] text-white hover:bg-[#009444] border border-[#009444] hover:border-[#009444] normal-case text-base" onClick={() => setIsAll(!isAll)}>See All</button>
              </div>
            }
          </div>
        </section> : null
      }

      {
        !matchedIDs?.length ? <section className="h-[calc(100vh-245px)]">
          <div className="container flex justify-center items-center h-full">
            <div>
              <img src="/images/empty-box.png" alt="Empty Box" className="max-w-[200px] mx-auto" />
              <h2 className="text-4xl font-semibold mt-6">No donation found!</h2>
            </div>
          </div>
        </section> : null
      }
    </main>
  );
};

export default Donation;