import { BiCart, BiHeart, BiSearch, BiUser } from "react-icons/bi"
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa"

const navbar = () => {
  return (
    <nav className=" font-montserrat">
      <div className="bg-[#23856D] text-white text-[13px] font-bold flex justify-between items-center h-[60px] px-[3rem]">

        <div className="flex">
          <div className="flex justify-center items-center mr-9">
            <div className=""><FaPhoneAlt/></div>
            <p className="ml-2">  (225) 555-0118</p>
          </div>
          <div className="flex justify-center items-center">
            <div><FaEnvelope/> </div>
            <p className="ml-2"> michelle.rivera@example.com</p>
          </div>
        </div>

        <div>Follow Us  and get a chance to win 80% off</div>

        <div className="flex">
          <div className="mr-3">Follow Us  :</div>
          <div className="icon-container flex items-center justify-center">
            <div className="inline-block mr-4">
              <a href="https://www.instagram.com/">
                <FaInstagram size={18}/>
              </a>
            </div>
            <div className="inline-block mr-4">
              <a href="https://www.youtube.com/">
                <FaYoutube size={18}/>
              </a>
            </div>
            <div className="inline-block mr-4">
              <a href="https://www.facebook.com/">
                <FaFacebook size={18}/>
              </a>
            </div>
            <div className="inline-block mr-4">
              <a href="https://www.x.com/">
                <FaTwitter size={18}/>
              </a>
            </div>
          </div>

        </div>


      </div>

      <div className="bg-white text-black flex justify-between items-center px-[3rem]">

        <div className="flex">
          <div className="logo mr-[17%] text-xl font-bold"><a href="">Bandage</a></div>

          <div className="nav-item-container">

            <ul className="nav-item flex text-[15px] font-semibold">
              <li className="mx-1"> <a href="#">Home</a></li>
              <li className="mx-1"><a href="#">Shop </a></li>
              <li className="mx-1"><a href="#">About</a></li>
              <li className="mx-1"><a href="#">Blog</a></li>
              <li className="mx-1"><a href="#">Contact</a></li>
              <li className="mx-1"><a href="#">Pages</a></li>
            </ul> 
          </div>
        </div>


        <div className="font-  text-[15px] text-[#23A6F0]">
            <ul className="flex justify-center items-center  h-[60px]">
              <li className="mx-4  flex items-center ">
                <a className="mr-1" href=""><BiUser size={22}/></a>
                <a href="#">Login/Register</a>
              </li>
              <li className="mx-3"><a href="#"> <BiSearch size={22}/></a></li>
              <li className="mx-3"><a href="#"><BiCart size={22}/></a></li>
              <li className="mx-3"><a href="#"><BiHeart size={22}/></a></li>
            </ul>
        </div>


      </div>
    </nav>

  )
}

export default navbar