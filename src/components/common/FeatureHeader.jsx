import PropTypes from 'prop-types'

const FeatureHeader = ({changeHeader}) => {
  return (
    <div className=" w-2/3 mx-auto text-center font-montserrat ">
      <h4 className="text-[#737373] text-xl font-semibold">{changeHeader}</h4>
      <h3 className="text-[#252B42] text-2xl leading-relaxed font-bold">BESTSELLER PRODUCTS</h3>
      <p className="text-[#737373]">Problems trying to resolve the conflict between </p>
    </div>
  )
}

FeatureHeader.propTypes = {
  changeHeader:PropTypes.string
}

export default FeatureHeader