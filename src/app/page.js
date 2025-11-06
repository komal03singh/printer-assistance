import Image from "next/image";
import Footer from "@/components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <div className="relative h-screen w-full">
        <a href="/DownloadPrinterDrivers">
          <Image src="/hero-img.jpg" alt="logo" fill className="object-cover" />
        </a>
      </div>

      <div className="w-full z-10 relative bg-white">
        <nav className="bg-[#007CBF] text-white h-15 flex items-center px-6">
          <ul className="flex gap-5">
						<li><a href="https://smartdeviceassistant.com/fix-an-offline-printer/">Printer Offline</a></li>
            <li><a href="https://smartdeviceassistant.com/how-to-setup-your-device/">Printer Setup</a></li>
            <li><a href="https://smartdeviceassistant.com/4-methods-of-scanning-documents/">Scanner Setup</a></li>
            <li><a href="https://smartdeviceassistant.com/privacypolicy/">Privacy Policy</a></li>
            <li><a href="https://smartdeviceassistant.com/disclaimer/">Disclaimer</a></li>
					</ul>
        </nav>

        <div className="mt-6 px-3">
          <h1 className="text-4xl font-semibold text-center">How to Connect a Printer to Your Computer From 123.hp.com</h1>
          <p className="mt-5 px-4 text-base">Connect a printer to your Windows or Mac computer; wired or wireless. You can share the printer on your home network once it’s connected, allowing other computers in your house to print from it even if they’re not physically connected.</p>

          <div className="flex w-full mt-10 gap-3">
            <div className="w-3/5 px-3">
              <h2 className="text-3xl font-semibold ">Method 1 : Wired connection (Windows)</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside text-lg mt-5">
              <li>Download the drivers of the printer from 123.hp.com. Follow the instructions on the software. Check to see if it’s close enough for the cable to reach your computer without being tangled.</li>
              <li>A power source must be connected to your printer. Plug the printer into your computer using a USB cord while your computer is powered on and unlocked. In certain circumstances, simply attaching your printer into your computer will immediately setup and properly install the printer, allowing you to use it right away.</li>
              <li>Click on the Start button. In the bottom-left corner side of the screen, you now need to click the Windows logo. Select Settings from the drop-down menu. It’s in the Start window’s lower-left corner. Select Devices from the drop-down menu. Near the top of the Settings box, you’ll find this option.</li>
              <li>Select Printers and Scanners from the drop-down menu. It’s a tab on the window’s left side. Add a printer or scanner by clicking Add a printer or scanner. This button appears at the top of the page. </li>
              <li> Click the Add device button next to your printer’s name. This is usually a combination of the printer’s manufacturer, the printer’s model name, and the printer’s model number. If your printer’s name isn’t displayed here, click the printer that I want isn’t listed link underneath the Add a printer or scanner button, and then follow the on-screen instructions.</li>
              <li>Follow the directions on the screen. You may need to tweak your settings before the printer is ready, depending on your printer; once you’re done, the printer will be ready to use. If prompted, place the CD that came with your printer into the disc slot on your computer.  If your printer didn’t come with a CD when you got it secondhand, you can typically download the same software from the manufacturer’s website.</li>
            </ol>
            </div>
            <div className="flex items-center w-2/5 px-3">
              <Image src="/Home/img1.png" width={600} height={300}></Image>
            </div>
          </div>

          <div className="flex flex-row-reverse w-full mt-10 gap-3">
            <div className="w-3/5 px-3">
              <h2 className="text-3xl font-semibold ">METHOD 2: WIRED CONNECTION (Mac)​</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside text-lg mt-5">
              <li>Keep your Mac up to date. Before you connect a printer to your Mac, check sure you have the latest drivers and updates installed from 123 hp printer setup.</li>
              <li>Place your printer in close proximity to your computer. Check to see if it’s close enough for the cable to reach your computer without being tangled.</li>
              <li>Start your printer. Press the power button on your printer; it should have an icon on or next to it. A power source must be connected to your printer.</li>
              <li>Use a USB cable to connect the printer to your computer. The USB cable should be plugged into a USB port on the housing of your computer.
                  If your Mac lacks a regular USB port, you’ll need to purchase a USB-C to USB converter.
                  When you do this, make sure your computer is turned on and logged in.</li>
              <li>Select Install and then follow the onscreen instructions. If your printer is compatible with your Mac, it will most likely install on your computer right immediately; however, you may need to finalize the installation by clicking the Download & Install option on a pop-up window. Your printer will be available to use on your Mac after this process is completed.</li>
            </ol>
            </div>
            <div className="flex items-center w-2/5 px-3">
              <Image src="/Home/img2.png" width={500} height={300}></Image>
            </div>
          </div>


          <div className="flex flex-row-reverse w-full mt-10">
            <div className="w-3/5 px-3">
              <h2 className="text-3xl font-semibold ">METHOD 3: WIRELESS CONNECTION (WINDOWS)</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside text-lg mt-5">
              <li>Examine your printer’s network connections. If your printer connects using Bluetooth rather than Wi-Fi, the method for setting up the printer will be slightly different. To receive an Internet signal, some Wi-Fi printers must be linked directly to a wireless router through Ethernet.</li>
              <li>Place your computer in an area where your wireless signal can be received. You can’t put your printer too far away from your wireless router since it needs to be able to connect with it.</li>
              <li>Switch on the printer. Press the power button on your printer; it should have an icon on or next to it. A power source must be connected to your printer. Connect the printer’s Ethernet cord to the router if necessary.</li>
              <li>For specific network configuration instructions, consult the documentation that comes with your printer. You can find your handbook on the manufacturer’s support site if you don’t have it. Some printers require a direct connection to your Windows or Mac computer to be used wirelessly, while others allow you to complete the wireless setup process fully on the printer.</li>
              <li>Connect the printer to the computer. To do so, follow these steps:
                <ul className="list-disc list-inside ">
                  <li>Wi-Fi – Locate the Wi-Fi setup page on your printer’s screen, then input your network’s password. This has to be the same network that your machine is on.</li>
                  <li>Bluetooth – Press the “Pair” button, which is commonly marked with a crooked Bluetooth “B” emblem.</li>
                </ul>
              </li>
              <li>Press the Start button. In the bottom-left corner side of the screen, click the Windows logo.</li>
              <li>Go to the Settings tab. It’s in the Start window’s lower-left corner.</li>
              <li>Select Devices from the drop-down menu. Near the top of the Settings box, you’ll find this option.</li>
              <li>Select either Printers & Scanners or Bluetooth & Other Devices from the drop-down menu. These tabs are located on the window’s left side. Click Printers & scanners if you’re connecting a Wi-Fi printer. Click Bluetooth & other devices to find a Bluetooth printer.</li>
              <li>Select Add a printer or scanner or Add a Bluetooth or other device from the drop-down menu. These options are at the top of the page and are dependent on whether you’re using a Wi-Fi or Bluetooth printer. When connecting a Wi-Fi printer, the printer’s name may appear on the page already. If this is the case, your printer is connected. To enable Bluetooth on your computer, you may need to first click the Bluetooth switch.</li>
              <li>Connect your printer to your computer. In the Add window, click your printer’s name; if you’re attaching a Bluetooth printer, you’ll also need to click Connect once you’ve selected your printer. As a result, the printer will be connected to your Windows computer. When connecting to Bluetooth, you may need to press the printer’s “Pair” button again.</li>
            </ol>
            </div>
            <div className="flex items-center w-2/5">
              <Image src="/Home/img1.png" width={600} height={300}></Image>
            </div>
          </div>

          <div className="flex w-full mt-10">
            <div className="w-3/5 px-3">
              <h2 className="text-3xl font-semibold ">Method 1 : Wired connection (Windows)</h2>
            <ol className="flex flex-col gap-3 list-decimal list-inside text-lg mt-5">
              <li>Download the drivers of the printer from 123.hp.com. Follow the instructions on the software. Check to see if it’s close enough for the cable to reach your computer without being tangled.</li>
              <li>A power source must be connected to your printer. Plug the printer into your computer using a USB cord while your computer is powered on and unlocked. In certain circumstances, simply attaching your printer into your computer will immediately setup and properly install the printer, allowing you to use it right away.</li>
              <li>Click on the Start button. In the bottom-left corner side of the screen, you now need to click the Windows logo. Select Settings from the drop-down menu. It’s in the Start window’s lower-left corner. Select Devices from the drop-down menu. Near the top of the Settings box, you’ll find this option.</li>
              <li>Select Printers and Scanners from the drop-down menu. It’s a tab on the window’s left side. Add a printer or scanner by clicking Add a printer or scanner. This button appears at the top of the page. </li>
              <li> Click the Add device button next to your printer’s name. This is usually a combination of the printer’s manufacturer, the printer’s model name, and the printer’s model number. If your printer’s name isn’t displayed here, click the printer that I want isn’t listed link underneath the Add a printer or scanner button, and then follow the on-screen instructions.</li>
              <li>Follow the directions on the screen. You may need to tweak your settings before the printer is ready, depending on your printer; once you’re done, the printer will be ready to use. If prompted, place the CD that came with your printer into the disc slot on your computer.  If your printer didn’t come with a CD when you got it secondhand, you can typically download the same software from the manufacturer’s website.</li>
            </ol>
            </div>
            <div className="flex items-center w-2/5">
              <Image src="/Home/img1.png" width={600} height={300}></Image>
            </div>
          </div>
        </div>

      </div>
        
      <Footer />
    </div>
  );
}
