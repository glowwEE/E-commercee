const navbar = () => {
  return (
    <nav className=" font-montserrat">
      <div className="bg-[#23856D] text-white text-[13px] font-medium flex justify-between items-center h-[60px] px-[3rem]">

        <div className="flex ">
          <p className="contact mr-6">(225) 555-0118</p>
          <p className="email ml-6">michelle.rivera@example.com</p>
        </div>

        <div>Follow Us  and get a chance to win 80% off</div>

        <div className="inline">Follow Us  :
          <div className="inline-block mx-2">Twitter</div>
          <div className="inline-block mr-1">instagram</div>
          <div className="inline-block ml-1">youtube</div>
          <div className="inline-block ml-2">facebook</div>
        </div>

      </div>

      <div className="bg-white text-black flex justify-between items-center px-[3rem]">

        <div className="flex">
          <div className="logo mr-[17%] text-xl font-bold">Bandage</div>

          <div className="nav-item-container">

            <ul className="nav-item flex text-[15px] font-medium">
              <li className="mx-1"> <a href="#">Home</a></li>
              <li className="mx-1"><a href="#">Shop</a></li>
              <li className="mx-1"><a href="#">About</a></li>
              <li className="mx-1"><a href="#">Blog</a></li>
              <li className="mx-1"><a href="#">Contact</a></li>
              <li className="mx-1"><a href="#">Pages</a></li>
            </ul> 
          </div>
        </div>


        <div className="font-medium  text-[15px] text-[#23A6F0]">
            <ul className="flex justify-center items-center  h-[60px]">
              <li className="mx-3"><a href="#">Login/Register</a> </li>
              <li className="mx-3"><a href="#">search icon</a></li>
              <li className="mx-3"><a href="#">cart icon</a></li>
              <li className="mx-3"><a href="#">love icon</a></li>
            </ul>
        </div>


      </div>
    </nav>

  )
}

export default navbar