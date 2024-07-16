import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { AiFillHome } from "react-icons/ai";
import { MdWidgets } from "react-icons/md";
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsBarChartFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaTableCells } from "react-icons/fa6";
import { MdInsertComment } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { SiIconify } from "react-icons/si";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiUserSharedFill } from "react-icons/ri";
import { BiSolidError } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { RiTodoLine } from "react-icons/ri";
import { MdPhotoLibrary } from "react-icons/md";
import { GrNotes } from "react-icons/gr";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Facebook", value: 33 },
  { name: "Youtube", value: 55 },
  { name: "Direct Search", value: 12 },
];
const COLORS = ["#9a51e0", "#f40e0e", "#0264c2"];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex gap-4 bg-[#121421]">
        <div className="w-[293px] bg-[#242935] p-10  ">
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4 border-l-4 border-[#f7b705] text-[#72ac97]">
              <AiFillHome size="25" />
              <Link>Overview</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <MdWidgets size="25" />
              <Link>Widgets</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <RiMenuUnfold4Line2 size="25" />
              <Link>Ui Elements</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <BsBarChartFill size="25" />
              <Link>Advanced Ui</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <TfiMenuAlt size="25" />
              <Link>Form Elements</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <FaRegEdit size="25" />
              <Link>Editors</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <IoStatsChartSharp size="25" />
              <Link>Charts</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <FaTableCells size="25" />
              <Link>Tables</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <MdInsertComment size="25" />
              <Link>Popups</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <IoNotifications size="25" />
              <Link>Notifications</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <SiIconify size="25" />
              <Link>Icons</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt size="25" />
              <Link>Maps</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <RiUserSharedFill size="25" />
              <Link>User Pages</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <BiSolidError size="25" />
              <Link>Error Pages</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <FaCartShopping size="25" />
              <Link>E-Commerce</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <MdEmail size="25" />
              <Link>E-mail</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <SlCalender size="25" />
              <Link>Calendar</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <RiTodoLine size="25" />
              <Link>Todo List</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <MdPhotoLibrary size="25" />
              <Link>Gallery</Link>
            </div>
          </div>
          <div className="text-[#bbbec7] py-4">
            <div className="flex items-center gap-4">
              <GrNotes size="25" />
              <Link>Documents</Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#121421] text-white p-6">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8 p-4 bg-[#242935]"></div>
            <div className="col-span-4 p-4 bg-[#242935]">
              <h1>Traffic</h1>
              <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  // cx={120}
                  // cy={200}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div className="flex justify-center text-white gap-6">
                <div>
                  <h3 className="text-3xl font-bold">33%</h3>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full h-3 w-3  bg-[#9a51e0]"></div>
                    <p>Facebook</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">55%</h3>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full h-3 w-3  bg-[#f40e0e]"></div>
                    <p>Youtube</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">12%</h3>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full h-3 w-3  bg-[#0264c2]"></div>
                    <p>Drect Search</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
