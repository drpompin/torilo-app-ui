import React from "react";
import Image from "next/image";
import BoldoLogo from "../public/images/FullLogoBlue.svg";

const Footer = () => {
	return (
		<>
			<div className="px-[10%] sm:px-[12%] pt-12 md:gap-5 lg:gap-[100px] flex flex-col md:flex-row justify-between">
				<div className="w-full md:w-1/3 md:pr-5">
					<Image src={BoldoLogo} alt="Logo image" height={42} width={156} />

					<p className="text-[#777777] mt-5 sm:mt-10 font-thin">
						Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.
					</p>
				</div>

				<div className="w-full md:w-2/3 grid grid-cols-2 mt-5 sm:mt-10 md:mt-0 sm:flex sm:flex-wrap sm:gap-20 md:gap-10 lg:gap-20">
					<div className="">
						<p className="font-bold text-xl">Landings</p>
						<p className="text-xl text-[#777777] font-normal mt-8">Home</p>
						<p className="text-xl text-[#777777] font-normal mt-8">Products</p>
						<p className="text-xl text-[#777777] font-normal mt-8">Services</p>
					</div>

					<div className="">
						<p className="font-bold text-xl">Company</p>
						<p className="text-xl text-[#777777] font-normal mt-8">Home</p>
						<p className="text-xl text-[#777777] font-normal mt-8">Careers</p>
						<p className="text-xl text-[#777777] font-normal mt-8">Services</p>
					</div>

					<div className="mt-5 sm:mt-0">
						<p className="font-bold text-xl">Resources</p>
						<p className="text-xl text-[#777777] font-normal mt-8">Blog</p>
						<p className="text-xl text-[#777777] font-normal mt-8">Products</p>
						<p className="text-xl text-[#777777] font-normal mt-8">Services</p>
					</div>
				</div>
			</div>

			<div className="px-[10%] sm:px-[12%] py-5">
				<p className="text-[#777777]">All rights reserved.</p>
			</div>
		</>
	);
};

export default Footer;
