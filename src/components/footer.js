import React from "react";
import { Link,useLocation } from "react-router-dom";
import { LogoInverted } from "../assets/icons";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {

  // Gather location information
  const location = useLocation()

  if(location.pathname.includes('/admin')) return(null)
  return (
    <div className="w-full mx-auto bg-gray-950">
      <div className="flex flex-wrap md:w-10/12 w-full px-3 md:px-0 mx-auto justify-around items-start pt-4">
        <div className="md:w-4/12 w-full text-white text-normal p-3">
          {/* <img className="w-24 mt-9" src={LogoInverted} /> */}
          <h4 className="font-bold mt-4 text-xl">PT Repayo Mandiri</h4>
          <address className="mt-3">
          Taman Royal Jalan Benteng Betawi No.1, Tanah Tinggi, Tangerang, RT.005/RW.015, Tanah Tinggi, Kec. Tangerang, Banten, 15119
          </address>
          <div className="flex justify-start gap-3 mt-6">
            <a
              className="mt-3 text-blue-950 w-10 h-10 p-2.5 bg-slate-300 rounded-full inline-block hover:text-white"
              target="_blank"
              href=""
            >
              <BsInstagram className="w-full h-full" />
            </a>
            <a
              className="mt-3 text-blue-950 w-10 h-10 p-2.5 bg-slate-300 rounded-full inline-block hover:text-white"
              target="_blank"
              href=""
            >
              <BiLogoGmail className="w-full h-full" />
            </a>
            <a
              className="mt-3 text-blue-950 w-10 h-10 p-2.5 bg-slate-300 rounded-full inline-block hover:text-white"
              target="_blank"
              href=""
            >
              <BsWhatsapp className="w-full h-full" />
            </a>
            <a
              className="mt-3 text-blue-950 w-10 h-10 p-2.5 bg-slate-300 rounded-full inline-block hover:text-white"
              target="_blank"
              href=""
            >
              <BiLogoLinkedin className="w-full h-full" />
            </a>
          </div>
        </div>
        <div className="md:flex-1 w-4/12 text-white flex flex-col p-2 mt-8 md:pl-10 pl-0">
          <h5 className="mt-1 font-bold text-xl">
             Navigation 
          </h5>
          <Link className="mt-3 text-gray-300 hover:text-white" to="/">
             Home
          </Link>
          <Link
            className="mt-3 text-gray-300 hover:text-white"
            to="/service"
          >
             Layanan Kami
          </Link>
          <Link
            className="mt-3 text-gray-300 hover:text-white"
            to="/portofolio"
          >
            Produk
          </Link>
          <Link className="mt-3 text-gray-300 hover:text-white" to="/about">
             Tentang Kami
          </Link>
        </div>
        <div className="md:flex-1 w-4/12 text-white flex flex-col p-2 mt-8">
          <h5 className="mt-1 font-bold text-xl">
            Produk
          </h5>
          <a
            className="mt-3 text-gray-300 hover:text-white"
            target="_blank"
            href=""
          >
            LV & MV Panel
          </a>
          <a
            className="mt-3 text-gray-300 hover:text-white"
            target="_blank"
            href=""
          >
            Electric Motor
          </a>
          <a
            className="mt-3 text-gray-300 hover:text-white"
            target="_blank"
            href=""
          >
            Transformator
          </a>
          <a
            className="mt-3 text-gray-300 hover:text-white"
            target="_blank"
            href=""
          >
            Component & Cable
          </a>
        </div>
        <div className="md:flex-1 w-4/12 text-white flex flex-col p-2 mt-8 md:pl-10 pl-0">
          <h5 className="mt-1 font-bold text-xl">
            Supplier
          </h5>
          <a
            className="mt-3 text-gray-300 hover:text-white"
            target="_blank"
            href=""
          >
            Schneider
          </a>
          <a
            className="mt-3 text-gray-300 hover:text-white"
            target="_blank"
            href=""
          >
            ABB
          </a>
          <a
            className="mt-3 text-gray-300 hover:text-white"
            target="_blank"
            href=""
          >
            Omron
          </a>
          <a
            className="mt-3 text-gray-300 hover:text-white"
            target="_blank"
            href=""
          >
            Hager
          </a>
        </div>
      </div>
      <p className="text-center mt-8 text-white text-sm">
        © PT Repayo Mandiri
      </p>
    </div>
  );
};

export default Footer;
