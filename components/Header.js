import React, { useState } from "react";
import Image from "next/image";
import HamburgerIcon from "../public/images/menuIcon.svg";
import BoldoLogo from "../public/images/FullLogo.svg";
import BLogo from "../public/images/Logo.svg";

const Header = () => {
	const [showNavLinks, setShowNavLinks] = useState(false);
	return (
		<div className="w-full h-[66px] md:h-[122px]">
			{/* Large Screen Header */}
			<div className="w-full hidden md:block fixed py-10 px-[8%] bg-[#0A2640]" style={{ zIndex: 9999 }}>
				<div className="flex justify-between">
					<Image src={BoldoLogo} alt="Logo image" height={42} width={162} />

					<div className="flex items-center">
						<span className="mx-5 text-white font-semibold cursor-pointer hover:text-[#65e4a3]">Product</span>
						<span className="mx-5 text-white font-semibold cursor-pointer hover:text-[#65e4a3]">Services</span>
						<span className="mx-5 text-white font-semibold cursor-pointer hover:text-[#65e4a3]">About</span>
						<span className="ml-5 text-[#0A2640] font-semibold px-10 py-2 rounded-3xl cursor-pointer hover:text-[white] hover:bg-[#65e4a3] bg-white">
							Log In
						</span>
					</div>
				</div>
			</div>

			{/* Mobile Header */}
			<div
				className={`w-full block md:hidden fixed bg-[#0A2640] px-[5%] py-3 ${showNavLinks && "border-b-2 border-white"}`}
				style={{ zIndex: 9999 }}
			>
				<div className="flex justify-between">
					<Image src={BLogo} alt="Logo image" height={42} width={42} />

					<span className="flex items-center cursor-pointer" onClick={() => setShowNavLinks(!showNavLinks)}>
						<Image src={HamburgerIcon} alt="Logo image" height={42} width={42} />
					</span>
				</div>

				{showNavLinks && (
					<div className="mt-5">
						<div className="hover:bg-[white] hover:text-[#0A2640] hover:pl-2 my-2 py-2 text-white font-semibold">Product</div>
						<div className="hover:bg-[white] hover:text-[#0A2640] hover:pl-2 my-2 py-2 text-white font-semibold">Services</div>
						<div className="hover:bg-[white] hover:text-[#0A2640] hover:pl-2 my-2 py-2 text-white font-semibold">About</div>
						<div className="hover:bg-[white] hover:text-[#0A2640] hover:pl-2 my-2 py-2 text-white font-semibold">Log In</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
