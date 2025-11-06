import React from "react";
import Image from "next/image";

function DownloadPrinterDrivers() {
  return (
    <div>
      <div className="h-screen w-full">
        <nav className="h-[10%] flex items-center px-15">
          <ul className="flex gap-14 font-semibold">
            <li>
              <a href="#">Officejet</a>
            </li>
            <li>
              <a href="#">Deskjet</a>
            </li>
            <li>
              <a href="#">Envy</a>
            </li>
            <li>
              <a href="#">Laserjet</a>
            </li>
          </ul>
        </nav>

        <div className="h-[80%] w-full relative">
          <Image
            src="/DownloadDriver/bg-img.jpg"
            alt=""
            fill
          />

          <div className="absolute z-10 top-50 left-20 h-4/12 w-2/5">
            <div className="w-full flex gap-4">
                <input type="text" className="w-4/5 border border-black/20 bg-white px-4 py-2 rounded-xl" placeholder='Enter your product name here. Example:"ENVY 4520"' />
                <a className="px-4 py-2 bg-black text-white rounded-xl" href="#">Next</a>
            </div>
            <div className="pt-3">
                <p className="text-white text-lg underline px-2">Where's the model number?</p>
            </div>
            <div>
                <p className="text-white text-lg underline px-2">My device is not listed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadPrinterDrivers;
