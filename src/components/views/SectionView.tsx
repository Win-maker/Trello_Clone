import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AtmIcon from "@mui/icons-material/Atm";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import img from '../../assets/homeimg.png'
import { Button } from "@mui/material";
import Navbar from "../common/Navbar";
const SectionView = () => {
  return (
    <>
        <Navbar/>
    <div>
      <section className="w-full sm:flex justify-center items-center">
        <div className="w-full max-w-[800px]  bg-white flex flex-col gap-6 justify-center items-center">
          <h1 className="text-3xl font-semibold text-gray-600 font-poppins text-center pt-8 sm:pt-0 ">
            What brings you here today ?
          </h1>

          <div className="border-2 border-gray-300 rounded-md w-[400px] h-50 p-5 flex gap-2 cursor-pointer hover:bg-gray-300">
            <HomeRepairServiceIcon className="text-blue-600" fontSize="small" />
            <small className="text-black font-poppins">
              Organize ideas and work
            </small>
          </div>

          <div className="border-2 border-gray-300 rounded-md w-[400px] h-50 p-5 flex gap-2 cursor-pointer hover:bg-gray-300">
            <StackedLineChartIcon className="text-blue-600" fontSize="small" />
            <small className="text-black font-poppins">
              Track personal tasks and to-dos
            </small>
          </div>

          <div className="border-2 border-gray-300  rounded-md w-[400px] h-50 p-5 flex gap-2 cursor-pointer hover:bg-gray-300">
            <PeopleOutlineIcon className="text-blue-600" fontSize="small" />
            <small className="text-black font-poppins">
              Manage team projects
            </small>
          </div>

          <div className="border-2 border-gray-300 rounded-md w-[400px] h-50 p-5 flex gap-2 cursor-pointer hover:bg-gray-300">
            <AtmIcon className="text-blue-600" fontSize="small" />
            <small className="text-black font-poppins">
              Create and automate your team platforms
            </small>
          </div>

          <div className="flex gap-4 pb-4 sm:pb-0">
          <Button variant="contained" disabled className="font-poppins"> Previous</Button>
          <Button variant="text"  className="font-poppins">Skip</Button>
          </div>
        </div>

        <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 gap-3">
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-start items-center gap-2 py-5">
                <DashboardOutlinedIcon className="text-blue-600 " fontSize="medium" />
                <h1 className="text-black font-semibold text-3xl font-poppins">Trello</h1>
            </div>
            <div className="w-[500px] h-[400px] rounded-sm">
                <img src={img} alt=""  />
            </div>
        </div>
      </section>
    </div></>

  );
};

export default SectionView;
