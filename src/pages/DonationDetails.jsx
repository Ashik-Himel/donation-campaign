import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setStorageItems } from "../localStorage";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Helmet } from "react-helmet-async";

const DonationDetails = () => {
  const { id } = useParams();
  const allData = useLoaderData();
  const [data, setData] = useState({});
  useEffect(() => {
    const findData = allData.find((item) => item.id == id);
    setData(findData);
  }, [allData]);
  const { images, colors, price, title, description } = data;

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
      <Helmet>
        <title>Donation Details - Donation Campaign</title>
      </Helmet>
      <section>
        <div className="container">
          <div className="relative mb-8 min-h-[130px]">
            <img src={images?.image_2} alt="Details Image" className="w-full rounded-md h-full max-h-[60vh] object-cover object-center" />
            <div className="absolute bottom-0 left-0 right-0 bg-[rgba(11,11,11,0.50)] rounded-b-md">
              <button className="btn text-white normal-case text-base m-4 sm:m-6" style={{backgroundColor: colors?.text_color, borderColor: colors?.text_color}} onClick={() => handleClick(id)}>Donate ${price}</button>
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
