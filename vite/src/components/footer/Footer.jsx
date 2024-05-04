


const Footer = () => {
    return (
      <div className="flex bottom-0 max-w-screen bg-opacity-25 bg-gray-500 text-black">
        <div className="container mx-auto justify-between items-center">
          <div className="text-sm md:text-base flex-row text-left flex sm:flex sm:items-center sm:justify-center md:justify-between mb-10">
            <div className="justify-left mx-20 -mb-4">
                <img src="/src/assets/img/logo/CypressEG.png" alt="Logo" className="mb-4 object-scale-down max-h-24"/>
            </div>
            <div className="flex-col mx-20 -mb-8 text-sm space-y-1">
                <p className="font-bold text-base mb-2">CONTACT US</p>
                <p className="mb-2">8 Harris Court Suite A8</p>
                <p className="mb-2">Monterey, CA 93940</p>
                <p className="mb-2">United States</p>
                <p className="mb-2"><b>Phone:</b> +1 831.218.1802</p>
                <p className="mb-2"><b>Email:</b> info@cypresseg.com</p>
            </div>
          </div>
          <div className="text-center text-xs md:text-sm bg-opacity-25 bg-gray-500 ">
            © {new Date().getFullYear()} <b>Cypress Engineering Group, LLC.</b> All Rights
            Reserved
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;