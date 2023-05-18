import { FaFacebook,FaInstagramSquare,FaTwitter,FaYoutube ,FaAddressBook, FaPhone, FaVoicemail } from "react-icons/fa";
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className="bg-cyan-100">
      <footer className="max-w-7xl mx-auto footer p-10  text-base-content">
        <div className="max-w-7xl mx-auto">
        <img className="h-18 w-24 rounded-lg" src={logo} alt="" />
        <h1 className="text-4xl "style={{ fontFamily: 'Lobster, cursive' }} >Toy<span className="text-cyan-800">H</span>ouse</h1>
          <p className=" mb-5">
          A kids toy shop is a store that specializes in selling toys 
          <br /> and games designed specifically for children.
          </p>
        </div>
        <div>
          <span className=" text-2xl font-bold text-cyan-800 mb-2">Quick Links</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Login</a>
        </div>
        <div className="">
          <span className=" text-2xl font-bold text-cyan-800 mb-2">Follow us on</span>
          <p className=" flex flex-row items-center hover:text-pink-600"><FaFacebook className="mr-2"></FaFacebook> Facebook</p>
          <a className=" flex flex-row items-center hover:text-pink-600"><FaTwitter className="mr-2"></FaTwitter>Twitter</a>
          <a className=" flex flex-row items-center hover:text-pink-600"><FaInstagramSquare className="mr-2"></FaInstagramSquare>Instagram</a>
          <a className=" flex flex-row items-center hover:text-pink-600"><FaYoutube className="mr-2"></FaYoutube>Youtube</a>

        </div>
        <div>
          <span className=" text-2xl font-bold text-cyan-800 mb-2">Information</span>
          <p className="flex flex-row items-center mb-2">
          <FaAddressBook className="mr-2"></FaAddressBook>Addresss: 1800 Abbot Kinney Nebraska UK
          </p >
          <p className="flex flex-row  items-centeri mb-2"><FaVoicemail className="mr-2"></FaVoicemail>Email: hello@example.com</p>
          <p className="flex flex-row items-center mb-2"><FaPhone className="mr-2"></FaPhone>Phone: (012) 345 6789</p>
        </div>
        

      </footer>
      <footer className="footer items-center p-4 bg-cyan-900 text-neutral-content">
  <div className="max-w-7xl mx-auto items-center grid-flow-col">
    <p>Copyright © 2023 - All right reserved</p>
  </div> 

</footer>
    </div>
  );
};

export default Footer;
