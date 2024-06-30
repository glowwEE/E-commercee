import PropTypes from 'prop-types'

const Cards = ({productImage, title, link}) => {
  return (
    <a href= {link} className="block w-[11.8rem] h-[22rem] bg-white overflow-hidden shadow-lg rounded-md hover:shadow-xl transition-shadow duration-300">
      <div className="h-[65%]">
        <img className='h-full w-full object-cover' src={productImage} alt={title} />
      </div>
      <div className="h-[35%] flex flex-col justify-center items-center font-bold" >
        <p className="text-base">Graphic Design</p>
        <p className="text-sm leading-loose text-[#737373]">English Department</p>
        <p className="text-[#BDBDBD]">$16.48 <span className="text-[#23856D]">$6.48</span></p>
      </div>
    </a>
  )
}

Cards.propTypes = {
  productImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string
} 

Cards.defaultProps ={
  link: ''
}
export default Cards

// import PropTypes from 'prop-types';

// const Card = ({ productImage, title, description, price, link }) => {
//   return (
//     <a href={link} className="block w-[12rem] h-[24rem] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//       <div className="h-[60%]">
//         <img className="h-full w-full object-cover" src={productImage} alt={title} />
//       </div>
//       <div className="h-[40%] p-4 flex flex-col justify-between">
//         <div>
//           <p className="text-lg font-bold">{title}</p>
//           <p className="text-sm text-gray-500">{description}</p>
//         </div>
//         <div className="text-green-600 font-bold">${price} <span className='text-[#23856D]'>${price}</span></div>
//       </div>
//     </a>
//   );
// };

//   Card.propTypes = {
//     productImage: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     link: PropTypes.string,
//   }

//   Card.defaultProps = {
//     link: '#',
//   };
  
//   export default Card;