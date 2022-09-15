import React, { useState } from "react";
import Image from "next/image";
import HamburgerIcon from "../public/images/menuIcon.svg";
import TransMonitor from "../public/images/TransMonitor.svg";
import SearchIcon from "../public/images/SearchIcon.svg";
import NotificationIcon from "../public/images/Notification.svg";
import Avatar from "../public/images/Avatar.svg";

const Header = () => {
	const [showNavLinks, setShowNavLinks] = useState(false);
	return (
		<div className="w-full h-[66px] lg:h-[78px]" style={{}}>
			{/* Large Screen Header */}
			<div
				className="w-full hidden md:block fixed py-4 px-6 lg:px-[42px] bg-[#ffffff]"
				style={{ zIndex: 9999, borderBottom: "2px solid rgba(79, 79, 79, 0.07)" }}
			>
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						<Image src={TransMonitor} alt="Logo image" height={29} width={153} />

						<div className="flex items-center gap-4 ml-10 lg:ml-[101px]">
							<Image src={SearchIcon} alt="search img" height={12} width={12} />

							<input placeholder="Search..." type="text" className="outline-none" />
						</div>
					</div>

					<div className="flex items-center">
						<span className="text-[#647787] text-sm text-right mr-5 lg:mr-9 hover:text-[#1875F0] cursor-pointer hover:font-semi-bold">
							Support
						</span>
						<span className="text-[#647787] text-sm text-right mr-5 lg:mr-[55px] hover:text-[#1875F0] cursor-pointer hover:font-semi-bold">
							FAQ
						</span>
						<Image src={NotificationIcon} alt="search img" height={23} width={21} className="cursor-pointer" />

						<div className="flex items-center ml-5 lg:ml-[52px] gap-[9px]">
							<div className="flex flex-col justify-center">
								<span className="text-[#647787] text-sm text-right">Hello</span>
								<span className="text-[#647787] text-sm text-right">Oluwaleke Ojo</span>
							</div>

							<div>
								<Image src={Avatar} alt="Avatar img" className="rounded-full overflow-hidden" height={36} width={36} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Mobile Header */}
			<div
				className={`w-full block md:hidden fixed bg-[#ffffff] py-3 h-[66px] ${showNavLinks && "border-b-2 border-white"}`}
				style={{ zIndex: 9999, borderBottom: "2px solid rgba(79, 79, 79, 0.07)" }}
			>
				<div className="flex justify-between px-[5%]">
					<Image src={TransMonitor} alt="Logo image" height={40} width={100} />

					<span className="flex items-center cursor-pointer gap-4" onClick={() => setShowNavLinks(!showNavLinks)}>
						<Image src={HamburgerIcon} alt="Logo image" height={30} width={30} />
					</span>
				</div>

				{showNavLinks && (
					<div className="mt-4 bg-white px-[5%]" style={{ zIndex: 9999, borderBottom: "2px solid rgba(79, 79, 79, 0.07)" }}>
						<div className="flex items-center gap-4">
							<Image src={SearchIcon} alt="search img" height={12} width={12} />

							<input placeholder="Search..." type="text" className="outline-none" />
						</div>

						<div className="flex justify-between w-full my-10">
							<div className="flex flex-col items-start gap-10 w-1/2">
								<span className="text-[#647787] text-sm text-left w-full hover:bg-[#1875F0] hover:text-white">Support</span>
								<span className="text-[#647787] text-sm text-left w-full hover:bg-[#1875F0] hover:text-white">FAQ</span>
								<Image src={NotificationIcon} alt="search img" height={23} width={21} />
							</div>

							<div className="flex gap-5 items-start justify-end">
								<div className="flex flex-col justify-center items-start">
									<span className="text-[#647787] text-sm text-right">Hello</span>
									<span className="text-[#647787] text-sm text-right">Oluwaleke Ojo</span>
								</div>

								<div>
									<Image src={Avatar} alt="search img" className="rounded-full overflow-hidden" height={36} width={36} />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
