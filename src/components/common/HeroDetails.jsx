import PropTypes from 'prop-types';


const HeroDetails = ({itemsClass, titleClass, readMoreClass}) => {
  return (
    <div className="absolute w-full font-bold font-montserrat px-6 py-5 top-0">
      <p className={`${itemsClass}`}>5 Items</p>
      <p className={` ${titleClass}`}>Furniture</p>
      <p className={` ${readMoreClass}`}>read more</p>
    </div>
  )
}

HeroDetails.propTypes = {
  itemsClass: PropTypes.string,
  titleClass: PropTypes.string,
  readMoreClass: PropTypes.string
}

// HeroDetails.defaultProps ={
//   itemsClass: '',
//   titleClass: '',
//   readMoreClass: ''
// }

export default HeroDetails