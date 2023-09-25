import PropTypes from 'prop-types';

const HomeCard = ({data}) => {
  const {image, category, title, colors} = data;
  console.log(data);

  return (
    <div className='rounded-lg cursor-pointer' style={{backgroundColor: colors.card_bg}}>
      <img src={image[0]} alt="Card Thumbnail" className='w-full rounded-t-lg' />
      <div className='p-6'>
        <span className='font-medium inline-block px-2 py-0.5 rounded mb-2' style={{backgroundColor: colors.cat_bg, color: colors.text_color}}>{category}</span>
        <h2 className='text-xl font-semibold' style={{color: colors.text_color}}>{title}</h2>
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  data: PropTypes.object
}

export default HomeCard;