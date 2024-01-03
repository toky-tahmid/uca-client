import { TbPhoneCalling } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";


const Contact = () => {
  return (
    <>
    <h1 className="text-center text-3xl font-bold">Contact Us!</h1>
    <br />
    
    <div className="max-w-[1440px] mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-6 mx-auto px-2">
      <div className="card border border-zinc-300 drop-shadow-xl">
        <div className="card-body">
        <FaMapLocationDot className="text-2xl  text-red-600 mx-auto " />
          <h2 className="text-center text-2xl font-bold">ADDRESS</h2>
          <p className="font-medium text-center">21/A, 1st Floor (Back Side), Road 2, Block A, Jahirul Islam City, Aftab Nagar, Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="card border border-zinc-300 drop-shadow-xl">
        <div className="card-body">
        <TbPhoneCalling  className="text-2xl  text-red-600 mx-auto" />
          <h2 className="text-center text-2xl font-bold">PHONE NUMBER</h2>
          <p className="font-medium text-center">01603-491600, 01603-491601
          <br />
          01603-491602, 01603-491603
          </p>
        </div>
      </div>
      <div className="card border border-zinc-300 drop-shadow-xl">
        <div className="card-body">
        <MdAttachEmail  className="text-2xl  text-red-600 mx-auto" />
          <h2 className="text-center text-2xl font-bold">EMAIL ADDRESS</h2>
          <p className="font-medium text-center">example@gmail.com</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
