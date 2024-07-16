import { FaD } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import avatar from "../../assets/user.png"
const Navbar = () => {
  return (
    <div className="flex justify-between gap-4  bg-[#242935]">
      <div className="flex items-center gap-2 ">
        <h4 className="text-xl p-2 px-12 text-white font-semibold mr-14 bg-gradient-to-r from-[#e24a8b] to-[#a959ad]  ">
          <FaD className=" size-12 inline mr-3 p-3 rounded-full bg-[#ffa93e]" />
          Dashboard
        </h4>
        <GiHamburgerMenu size="25" color="white" />
      </div>
      <div className="flex gap-6 items-center px-8">
        <Link className="text-white" to={"/notifications"}><IoNotifications size="30" /></Link>
        <Link className="text-white" to={"/messages"}><MdOutlineMarkEmailUnread  size="30" /></Link>
        <Link className="text-white" to={"/messages"}> <img className="h-[30px] w-[30px] rounded-full" src={avatar} alt="" /> </Link>
        <Link className="text-white" to={"/settings"}><IoSettings  size="30" /></Link>
      </div>
    </div>
  );
};

export default Navbar;
