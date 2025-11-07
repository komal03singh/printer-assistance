import React from 'react'

function Footer() {
  return (
    <div className='mt-10'>
      <div className='bg-[#DFDFDF] p-4'>
        <h3 className='font-semibold text-4xl text-center'>Disclaimer</h3>
        <p className='text-light mt-2 p-2 text-base '>Users are advised to read the disclaimer carefully and thoroughly.Smart Device Assistant aims to provide you detailed information about Printer, Extender, Arlo and Alexa devices for your knowledge and help you fix any issue you are facing while using these devices. Smartdeviceassistant.com is not associated with any brand or is not a part of any Associate program or affiliate advertising program, and we don’t promote any product, brand, or software. Also, we don’t provide access to any outside links. If you’ve found any external link to our website, you can feel free to inform us, and we will remove it quickly. At Smartdeviceassistant, brand names and product logos are just for representation purpose. We are not responsible for any outside content or links.</p>
      </div>
      
      

        <footer className="bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-white font-semibold mb-3">About Us</h2>
          <p className="leading-6 text-gray-400">
            Smart Device Assistant provides setup and troubleshooting
            guides to help users easily connect and configure their devices.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-white font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-white font-semibold mb-3">Popular Guides</h2>
          <ul className="space-y-2">
            <li>
              <a href="/how-to-setup-your-device" className="hover:text-white transition">
                Setup Your Device
              </a>
            </li>
            <li>
              <a href="/connect-printer" className="hover:text-white transition">
                Connect Printer to Wi-Fi
              </a>
            </li>
            <li>
              <a href="/download-driver" className="hover:text-white transition">
                Download Drivers
              </a>
            </li>
            <li>
              <a href="/troubleshoot" className="hover:text-white transition">
                Troubleshooting Steps
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-white font-semibold mb-3">Contact</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Email: support@smartdeviceassistant.com</li>
            <li>Working Hours: Mon - Sat, 9AM - 6PM</li>
          </ul>
          <div className="mt-4 flex space-x-3">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-xs">
        © {new Date().getFullYear()} Smart Device Assistant. All rights reserved.
      </div>
    </footer>

    </div>
  )
}

export default Footer
