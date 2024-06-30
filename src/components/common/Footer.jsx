
const Footer = () => {
  return (
    <div>
      <footer className="footer flex flex-col justify-center items-center">
        <div className="bg-[#FAFAFA]  w-full flex justify-center">
          <div className="flex justify-between items-center my-10 py-4 w-[66rem]">
            <div className="logo mr-[17%] text-xl font-bold"> <a href="">Bandage</a></div>
            <div className="mr-9">
              <ul className="flex">
                <li className="mx-3">fb</li>
                <li className="mx-3">insta</li>
                <li className="mx-3">tw</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white w-full flex justify-center"> 
          <div className="grid grid-cols-6 gap-5  text-white py-10 w-[66rem] ">
            <div className="col-span-1 font-bold">
              <div className="text-base mb-3 text-[#252B42]">Company Info</div>
              <ul className="text-xs text-[#737373]">
                <li className="my-2"><a href="">About Us</a></li>
                <li className="my-2"><a href="">Carrier</a></li>
                <li className="my-2"><a href="">We are Hiring</a></li>
                <li className="my-2"><a href="">Blog</a></li>
              </ul>
            </div>

            <div className="col-span-1 font-bold"> 
                <div className="text-base mb-3 text-[#252B42]">Legal</div>
                <ul className="text-xs text-[#737373]">
                  <li className=" my-2"><a href="">About Us</a></li>
                  <li className="my-2"><a href="">Carrier</a></li>
                  <li className="my-2"><a href="">We are Hiring</a></li>
                  <li className="my-2"><a href="">Blog</a></li>
                </ul>
            </div>

            <div className="col-span-1 font-bold">
              <div className="text-base mb-3 text-[#252B42]">Features</div>
              <ul className="text-xs text-[#737373]">
                <li className="my-2"><a href="">Business Marketing</a></li>
                <li className="my-2"><a href="">User Analytics</a></li>
                <li className="my-2"><a href="">Live Chat</a></li>
                <li className="my-2"><a href="">Unlimited Support</a></li>
              </ul>
            </div>

            <div className="col-span-1 font-bold">
              <div className="text-base mb-3 text-[#252B42]">Features</div>
              <ul className="text-xs text-[#737373]">
                <li className="my-2"><a href="">iOS & Android</a></li>
                <li className="my-2"><a href="">Watches & Demo</a></li>
                <li className="my-2"><a href="">Costumers</a></li>
                <li className="my-2"><a href="">API</a></li>
              </ul>
            </div>

            <div className="col-span-2 mr-3">
            <div className="text-base mb-3 text-[#252B42] font-bold">Get In Touch</div>

            <div className="form">
              <div className="border border-[#E6E6E6] rounded-s">
                <input className=" rounded-s h-14 bg-[#fafafa] text-[#737373] px-2 placeholder-[#737373] font-medium" type="email" name="" id=""  placeholder=" Your Email"/>
                <button  className='bg-[#23A6F0] h-14 px-[20.1px] text-white text-sm rounded-e' type="submit"> Subscribe</button>
              </div>
              <p className="text-[#737373] text-xs">Lore imp sum dolor Amit</p>


            </div>

            </div>
          </div>
        </div>

        <div className="bg-[#fafafa] w-full ">
          <div className="w-[66rem] py-6 mx-auto text-[#737373]">
            <p className="py-3 font-bold text-xs">Made With Love By Finland All Right Reserved </p>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer