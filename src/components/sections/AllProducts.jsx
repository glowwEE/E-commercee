import { product, product1, product2, product3, product4, product5, product6, product7, product8, product9 } from "../../assets/Images/Images"
import Button from "../common/Button"
import Cards from "../common/Cards"
import FeatureHeader from "../common/FeatureHeader"

const AllProducts = () => {
  return (
    <div className=" h-[1045px]">
      <div className="max-w-[66rem] mx-auto py-14">
        <FeatureHeader changeHeader='Featured Product'/>

        <div className="container my-5 h-[756px]">
          <div className="flex flex-wrap justify-center items-center gap-5 py-4">
            <Cards productImage={product1} title={'Graphics Design'} />
            <Cards productImage={product2} title={'Graphics Design'} />
            <Cards productImage={product3} title={'Graphics Design'}  />
            <Cards productImage={product4} title={'Graphics Design'} />
            <Cards productImage={product5} title={'Graphics Design'} />
            <Cards productImage={product6} title={'Graphics Design'} />
            <Cards productImage={product7} title={'Graphics Design'} />
            <Cards productImage={product8} title={'Graphics Design'} />
            <Cards productImage={product9} title={'Graphics Design'} />
            <Cards productImage={product}  title={'Graphics Design'}  />
          </div>
        </div>
        <Button/>

      </div>


    </div>
  )
}

export default AllProducts