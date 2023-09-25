import PropTypes from 'prop-types'

const DonationCard = ({data}) => {
  const {images, title, category, price, colors} = data;
  return (
    <div className='flex flex-col sm:flex-row rounded-lg' style={{backgroundColor: colors.card_bg}}>
      <img src={images?.donation_card_img} alt="Card Thumbnail" className='rounded-t-lg sm:rounded-none sm:rounded-s-lg' />
      <div className='p-6'>
        <span className="font-medium inline-block px-2 py-0.5 rounded mb-2" style={{ backgroundColor: colors.cat_bg, color: colors.text_color }}>{category}</span>
        <h2 className='text-black text-xl font-semibold mb-2'>{title}</h2>
        <span className='font-semibold block mb-4' style={{color: colors.text_color}}>${price}</span>
        <button className='inline-block py-2 px-4 rounded-md font-semibold' style={{backgroundColor: colors.text_color, color: 'white'}}>View Details</button>
      </div>
    </div>
  );
};

DonationCard.propTypes = {
  data: PropTypes.object
}

export default DonationCard;