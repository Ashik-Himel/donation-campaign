import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const DonationCard = ({data}) => {
  const {id, images, title, category, price, colors} = data;
  const navigate = useNavigate();

  return (
    <div className='flex flex-col sm:flex-row rounded-lg' style={{backgroundColor: colors.card_bg}}>
      <img src={images?.image_1} alt="Card Thumbnail" className='rounded-t-lg sm:rounded-none sm:rounded-s-lg w-full h-full max-h-[250px] sm:max-h-full sm:w-5/12 object-cover object-center' />
      <div className='p-6'>
        <span className="font-medium inline-block px-2 py-0.5 rounded mb-2" style={{ backgroundColor: colors.cat_bg, color: colors.text_color }}>{category}</span>
        <h2 className='text-black text-xl font-semibold mb-2'>{title}</h2>
        <span className='font-semibold block mb-4' style={{color: colors.text_color}}>${price}</span>
        <button className='inline-block py-2 px-4 rounded-md font-semibold' style={{backgroundColor: colors.text_color, color: 'white'}} onClick={() => navigate(`/details/${id}`)}>View Details</button>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  data: PropTypes.object
}

export default DonationCard;