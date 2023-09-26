import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setStorageItems } from "../localStorage";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const DonationDetails = () => {
  const { id } = useParams();
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  useEffect( () => {
    fetch('/data.json')
    .then(res => res.json())
    .then(data => setAllData(data));
  }, []);
  useEffect(() => {
    if (allData.length > 0) {
      const findData = allData.find((item) => item.id == id);
      setData(findData);
    }
  }, [id, allData]);
  const { images, price, title, description } = data;

  const handleClick = (clickId) => {
    const setIdValue = setStorageItems(clickId);
    const MySwal = withReactContent(Swal)
    if (setIdValue) {
      MySwal.fire(
        'Successful Donated!',
        `You successfully donated in "${title}"`,
        'success'
      )
    }
    else {
      MySwal.fire({
        icon: 'error',
        title: 'Already Donated!',
        text: `You already donated in "${title}"`
      })
    }
  }

  return (
    <main className="my-8">
      <section>
        <div className="container">
          <div className="relative mb-8">
            <img src={images?.image_1} alt="Details Image" className="w-full rounded-md max-h-[60vh] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-[rgba(11,11,11,0.50)] rounded-b-md">
              <button className="btn bg-[#FF444A] text-white hover:bg-[#FF444A] border-[#FF444A] hover:border-[#FF444A] normal-case text-base m-4 sm:m-6" onClick={() => handleClick(id)}>Donate ${price}</button>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-black mb-2">{title}</h2>
          <p className="text-[rgba(11,11,11,0.70)]">{description}</p>
        </div>
      </section>
    </main>
  );
};

export default DonationDetails;
