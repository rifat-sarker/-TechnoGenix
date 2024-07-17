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
import { GiWallet } from "react-icons/gi";
import { IoWallet } from "react-icons/io5";
import { LuWaves } from "react-icons/lu";
import { BsSoundwave } from "react-icons/bs";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import bassIcon from "../../assets/bass_12671256-removebg-preview.png"
const data = [
  { name: "Facebook", value: 33 },
  { name: "Youtube", value: 55 },
  { name: "Direct Search", value: 12 },
];
const COLORS = ["#9a51e0", "#f40e0e", "#0264c2"];

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data2 = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Feb",
    uv: -1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Mar",
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Apr",
    uv: -2000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "May",
    uv: -250,
    pv: 3800,
    amt: 2500,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map((i) => i.uv));
  const dataMin = Math.min(...data.map((i) => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const Home = () => (
  <div>
    <Navbar />
    <div className="flex bg-[#121421]">
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
      <div className="w-full bg-[#121421] text-white p-4">
        <div className="grid grid-cols-12 gap-6 m-4">
          <div className="col-span-8 p-2 bg-[#242935] rounded-lg">
            <div className="flex justify-center gap-6 p-5">
              <div>
                <p>Dashboard</p>
                <p className="mb-6">Overview of latest Month</p>
                <h3 className="text-2xl font-bold">$6468.96</h3>
                <p className="mb-6">Current Month Earnings</p>
                <h3 className="text-2xl font-bold">82</h3>
                <p className="mb-6">Current Month Sales</p>
                <button className="px-6 py-4 bg-gradient-to-r from-[#ce5186] to-[#ed5e7a] rounded-full my-6">
                  Latest Month Summary
                </button>
              </div>

              <div width="100%" height="100%">
                <div className="flex justify-between gap-4">
                  <div className="flex gap-4 ml-20">
                    <a href="">DAILY</a>
                    <a href="">WEEKly</a>
                    <a href="">MONTHLY</a>
                    <a href="">YEARLY</a>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full w-2 h-2 bg-[#28b067]"></div>
                    <p>Online</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="rounded-full w-2 h-2 bg-[#fdb932]"></div>
                    <p>Store</p>
                  </div>
                </div>
                <AreaChart
                  width={500}
                  height={400}
                  data={data2}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset={off} stopColor="green" stopOpacity={1} />
                      <stop offset={off} stopColor="red" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#000"
                    fill="url(#splitColor)"
                  />
                </AreaChart>
              </div>
            </div>
            <div className="flex gap-6 justify-center">
              <div className="flex items-center gap-4 rounded-lg m-2 ">
                <GiWallet className="bg-[#ed4884] p-2 rounded-full size-[40px]" />
                <div>
                  <p className="text-[#4d525e]">Wallet Balance</p>
                  <p className="font-semibold">$3567.80</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg m-2 ">
                <GiWallet className="bg-[#8261bf] p-2 rounded-full size-[40px]" />
                <div>
                  <p className="text-[#4d525e]">Referral Earning</p>
                  <p className="font-semibold">$1589.53</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg m-2 ">
                <IoWallet className="bg-[#ed4884] p-2 rounded-full size-[40px]" />
                <div>
                  <p className="text-[#4d525e]">Estimate Sales</p>
                  <p className="font-semibold">$2651.50</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg m-2 ">
                <IoWallet className="bg-[#60cdf6] p-2 rounded-full size-[40px]" />
                <div>
                  <p className="text-[#4d525e]">Earning</p>
                  <p className="font-semibold">$53567.54</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 p-5 bg-[#242935] rounded-lg">
            <h1>Traffic</h1>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
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
        <div className="grid grid-cols-4 gap-4 w-full p-4">
          <div className="bg-[#d54d92]  p-4 rounded-lg">
            <p>Revinue Status</p>
            <div className="flex items-center justify-between gap-5 py-4">
              <LuWaves size={60} />
              <div>
                <h4 className="text-2xl font-bold">$ 432</h4>
                <p>Jan 01 - Jan 10</p>
              </div>
            </div>
          </div>
          <div className="bg-[#5127a7] p-4 rounded-lg">
            <p>Page view</p>
            <div className="flex items-center justify-between gap-5 py-4">
              <div>
                <h4 className="text-2xl font-bold">$ 432</h4>
              </div>
            </div>
          </div>
          <div className="bg-[#54ace7] p-4 rounded-lg">
            <div className="flex items-center justify-between gap-5 py-4">
              <div>
                <p>Bounce Rate</p>
                <h4 className="text-2xl font-bold py-2">$ 432</h4>
                <select className="text-black rounded-lg p-1">
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                  <option value="Weekly">Weekly</option>
                </select>
              </div>
              <div>
              <BsSoundwave size={100} />
              </div>
            </div>
          </div>
          <div className="bg-[#fca33d] p-4 rounded-lg">
            <p>Revinue Status</p>
            <div className="flex items-center justify-between gap-5 py-4">
              <img color="white" src={bassIcon} className="size-20 text-white" alt="" />
              <div>
                <h4 className="text-2xl font-bold">$ 432</h4>
                <p>Jan 01 - Jan 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
