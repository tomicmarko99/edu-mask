import React from "react";
import HeroPic from "../../public/hero-img.png";
import Globe1 from "../../public/metaverse-globe.png";
import Globe2 from "../../public/metaverse-globe2.png";
import GoogleDisk from "../../public/google-disk.png";
import OneDrive from "../../public/one-drive.png";
import GDQR from "../../public/g-disk-qr.png";
import ODQR from "../../public/o-drive-qr.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="w-full min-h-[130vh] md:min-h-[100vh] bg-[url('https://i.ibb.co/w4hJz90/background1.png')] bg-center bg-no-repeat bg-cover h-[500px] px-5 py-[100px] flex justify-center">
      <div className="max-w-[1280px] w-full grid md:grid-cols-2 items-center gap-5 md:gap-[100px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl text-[#333333] font-bold">
            Find the entire study literature
          </h1>
          <h2 className="text-xl text-[#444444]">
            Learning and education resources that you can download from Google
            Disk and OneDrive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <a
              href="https://drive.google.com/drive/folders/1Stj0SUe1LMurcOxYvHULGlC-aRBm1cOX"
              target="_blank"
              className="p-4 bg-[#fff] shadow-md rounded flex justify-between items-center"
            >
              <div>
                <img src={GoogleDisk} alt="" className="max-w-[50px]" />
              </div>
              <p className="text-md text-[#333333] font-bold">Google Disk</p>
              <div>
                <img src={GDQR} alt="" className="max-w-[80px]" />
              </div>
            </a>
            <a
              href="https://ftncacak-my.sharepoint.com/:f:/g/personal/586-2022_ftn_edu_rs/ElRSxiTxPGpPnYqv5D-pBVkBbUp4tuBTRoDz3ZmdZ_p8wA"
              target="_blank"
              className="p-4 bg-[#fff] shadow-md rounded flex justify-between items-center"
            >
              <div>
                <img src={OneDrive} alt="" className="max-w-[50px]" />
              </div>
              <p className="text-md text-[#333333] font-bold">One Drive</p>
              <div>
                <img src={ODQR} alt="" className="max-w-[80px]" />
              </div>
            </a>
          </div>
        </div>
        <div className="min-h-[400px] overflow-hidden p-5 relative top-0 left-0">
          <img
            src={Globe1}
            alt=""
            className="rotating2 absolute left-0 right-0 ml-auto mr-auto w-[80%]"
          />
          <img src={Globe2} alt="" className="rotating relative top-0 left-0" />
        </div>
      </div>
    </div>
  );
};

export default Home;
