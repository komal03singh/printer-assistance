import React from "react";

export default function DriverInstallation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#007CBF] px-4">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Setup Failed - HP Smart
        </h1>
        <p className="text-lg mb-2">
          HP Smart / Printer Driver installation has failed.
        </p>
        <p className="text-lg font-semibold mb-6">
          Error Code: <span className="text-yellow-300">HPSM922841X</span>
        </p>
        <p className="text-base mb-4">
          Contact HP Support to resolve this problem
        </p>
        <p className="text-sm text-gray-200 mb-8">
          Note: Do not attempt to retry the installation as it can damage the
          printer and void the product warranty.
        </p>

        <button className="bg-black/80 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:cursor-pointer">
          Contact Live Chat
        </button>
      </div>
    </div>
  );
}
