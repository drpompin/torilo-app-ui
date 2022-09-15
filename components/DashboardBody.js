import React, { useState } from "react";
import Image from "next/image";
import SmallChartIcon from "../public/images/SmallChart.svg";
import GraphImg from "../public/images/BigGraph.svg";
import ColoredRulerIcon from "../public/images/ColoredRuler.svg";
import DateRectangle from "../public/images/DateRectangle.svg";
import RightButtonIcon from "../public/images/RightButton.svg";
import LeftButtonIcon from "../public/images/LeftButton.svg";
import BlueDownArrow from "../public/images/BlueDownArrow.svg";
import GreyArrowDown from "../public/images/GreyArrowDown.svg";
import SearchIcon from "../public/images/SearchIcon.svg";

const monthsArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const menuOptions = ["All", "Reconcilled", "Un-reconcilled", "Settled", "Unsettled"];
const tableData = [
	{
		item_type: "Apple Mac Book 15” 250 SSD 12GB",
		price: "$73430",
		transaction_no: "1234567890",
		time: "12:30",
		status: "Reconciled",
	},
	{
		item_type: "Apple Mac Book 15” 250 SSD 12GB",
		price: "$73430",
		transaction_no: "1234567890",
		time: "12:30",
		status: "Un-reconcilled",
	},
	{
		item_type: "Apple Mac Book 15” 250 SSD 12GB",
		price: "$73430",
		transaction_no: "1234567890",
		time: "12:30",
		status: "Reconciled",
	},
	{
		item_type: "Apple Mac Book 15” 250 SSD 12GB",
		price: "$73430",
		transaction_no: "1234567890",
		time: "12:30",
		status: "Reconciled",
	},
	{
		item_type: "Apple Mac Book 15” 250 SSD 12GB",
		price: "$73430",
		transaction_no: "1234567890",
		time: "12:30",
		status: "Pending",
	},
	{
		item_type: "Apple Mac Book 15” 250 SSD 12GB",
		price: "$73430",
		transaction_no: "1234567890",
		time: "12:30",
		status: "Un-reconcilled",
	},
	{
		item_type: "Apple Mac Book 15” 250 SSD 12GB",
		price: "$73430",
		transaction_no: "1234567890",
		time: "12:30",
		status: "Reconciled",
	},
	{
		item_type: "Apple Mac Book 15” 250 SSD 12GB",
		price: "$73430",
		transaction_no: "1234567890",
		time: "12:30",
		status: "Un-reconcilled",
	},
	{
		item_type: "Apple Mac Book 15” 250 SSD 12GB",
		price: "$73430",
		transaction_no: "1234567890",
		time: "12:30",
		status: "Pending",
	},
];

export const DashboardBody = () => {
	const [selectedmenu, setSelectedmenu] = useState("All");
	const [showMenuDropdown, setShowMenuDropdown] = useState(false);
	return (
		<div className="py-8 pl-8 pr-20 bg-[#f7f8fa] ml-[40%] min-w-[768px] md:ml-[20%] md:w-4/5 mb-20">
			{/* Chart */}
			<div className="flex justify-between gap-[37px]">
				<div className="flex gap-[9px]">
					<div className="flex justify-between p-5 bg-white rounded-sm">
						<div className="mr-2">
							<p className="text-xs">Daily Transaction Volume</p>
							<p className="text-lg">2,342</p>
						</div>

						<Image src={SmallChartIcon} alt="SmallChart Icon" width={62} height={37} />
					</div>

					<div className="flex justify-between p-5 bg-white rounded-sm">
						<div className="mr-2">
							<p className="text-xs">Daily Transaction Value</p>
							<p className="text-lg">₦4,000,000</p>
						</div>

						<Image src={SmallChartIcon} alt="SmallChart Icon" width={62} height={37} />
					</div>
				</div>

				<div className="flex gap-[9px]">
					<div className="flex justify-between p-5 bg-white rounded-sm">
						<div className="mr-2">
							<p className="text-xs">Daily Transaction Volume</p>
							<p className="text-lg">452,000</p>
						</div>

						<Image src={SmallChartIcon} alt="SmallChart Icon" width={62} height={37} />
					</div>

					<div className="flex justify-between p-5 bg-white rounded-sm">
						<div className="mr-2">
							<p className="text-xs">Daily Transaction Value</p>
							<p className="text-lg">₦4,000,000</p>
						</div>

						<Image src={SmallChartIcon} alt="SmallChart Icon" width={62} height={37} />
					</div>
				</div>
			</div>

			{/* Graph */}
			<div className="flex mt-7 gap-1 ">
				<div className="w-3/5 rounded-sm bg-white">
					<div className="flex justify-between px-8 py-[26px]">
						<p className="text-lg font-bold text-[#4F4F4F]">Today: 5, Aug 2018</p>

						<div className="flex gap-10 item-center">
							<Image src={DateRectangle} alt="Graph" width={138} height={31} className="cursor-pointer" />

							<div className="flex gap-[14px] items-center">
								<Image src={LeftButtonIcon} alt="Graph" width={30} height={23} className="cursor-pointer" />
								<Image src={RightButtonIcon} alt="Graph" width={30} height={23} className="cursor-pointer" />
							</div>
						</div>
					</div>

					<div className="flex justify-around w-full">
						{monthsArr.map((month) => {
							return (
								<div key={month} className="font-bold text-sm text-black">
									{month}
								</div>
							);
						})}
					</div>
					<Image src={GraphImg} alt="Graph" width={689} height={300} />
				</div>

				<div className="w-2/5">
					<div className="bg-white rounded-sm py-6 pl-6 pr-12">
						<p className="text-black text-sm">Orders</p>
						<Image src={ColoredRulerIcon} alt="Colored Ruler" width={304} height={4} />
						<p className="text-black text-sm mt-3 font-thin">
							Pending Orders: <span className="text-[#EBC315]">20</span>
						</p>
						<p className="text-black text-sm mt-3 font-thin">
							Reconcilled Orders: <span className="text-[#27AE60]">80</span>
						</p>
						<p className="text-black text-sm mt-3 font-thin">
							Total Orders: <span className="text-[#1860EC]">100</span>
						</p>
					</div>

					<div className="mt-1 bg-white rounded-sm py-6 pl-6 pr-12">
						<p className="text-black text-sm">Payments</p>
						<Image src={ColoredRulerIcon} alt="Colored Ruler" width={304} height={4} />
						<p className="text-black text-sm mt-3 font-thin">
							Un-reconcilled Payments: <span className="text-[#EBC315]">20</span>
						</p>
						<p className="text-black text-sm mt-3 font-thin">
							Reconcilled Payments: <span className="text-[#27AE60]">80</span>
						</p>
						<p className="text-black text-sm mt-3 font-thin">
							Total Payments: <span className="text-[#1860EC]">100</span>
						</p>
					</div>
				</div>
			</div>

			{/* Payments */}
			<div className="mt-11">
				<p className="text-black font-bold text-4xl mb-5">Payments</p>

				<div className="flex items-center">
					<div className="flex text-sm">
						<p className="text-black font-thin text-sm">Showing</p> <p className="text-[#1875F0] text-sm pl-5 pr-1">20</p>
						<Image src={BlueDownArrow} alt="BlueDownArrow Icon" width={7} height={4} />
						<p className="text-black font-thin text-sm pl-5">out of 500 payments</p>{" "}
					</div>

					<div className="w-[336px] border-b-2 border-[#787878] h-7 ml-14">
						<Image src={SearchIcon} alt="search img" height={12} width={12} />
						<input type="text" className="outline-none bg-[#f7f8fa] ml-2" placeholder="Search payments" />
					</div>

					<div className="flex items-center ml-32">
						<p className="text-[13px] pr-4 text-black">Show</p>

						<div className="relative">
							<div
								className="rounded-md cursor-pointer border border-[#CED0DA] py-2 px-4 flex justify-between items-center w-[150px]"
								onClick={() => setShowMenuDropdown(!showMenuDropdown)}
							>
								{selectedmenu}
								<Image src={BlueDownArrow} alt="BlueDownArrow Icon" width={7} height={4} />
							</div>

							<div className="bg-white rounded-md border absolute top-[40px] right-0 w-[150px] z-50">
								{showMenuDropdown &&
									menuOptions.map((menuItem) => {
										return (
											<div
												key={menuItem}
												onClick={() => {
													setSelectedmenu(menuItem);
													setShowMenuDropdown(!showMenuDropdown);
												}}
												className="hover:bg-[#F4F4F4] bg-white text-black text-[13px] cursor-pointer py-2 px-4 text-left"
											>
												{menuItem}
											</div>
										);
									})}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Table */}
			<div className="w-full mt-5">
				<div className="flex justify-between items-center h-[42px] bg-[#EAEEF0] px-[26px] rounded">
					<span className="w-4/12">Item Type</span>
					<span className="w-1/12 text-center">Price</span>
					<span className="w-2/12 text-center">Transaction No</span>
					<span className="w-1/12 text-center">Time</span>
					<span className="w-4/12 text-center">Status</span>
				</div>

				<div>
					{tableData.map((tableItem, index) => {
						return (
							<div
								key={index}
								className="flex justify-between items-center bg-white h-[76px] border-b border-[#CCCFD4] px-[26px] cursor-pointer hover:bg-[#F4F4F4]"
							>
								<div className="w-4/12 flex items-center justify-start">
									<div className="w-9 h-9 text-white text-xs rounded-full bg-[#7F8FA4] flex items-center justify-center font-bold mr-[26px]">
										VW
									</div>
									<span className="text-xs text-[#7F8FA4]">{tableItem.item_type}</span>
								</div>
								<div className="w-1/12 text-center text-[#7F8FA4] text-xs">{tableItem.price}</div>
								<div className="w-2/12 text-center text-[#7F8FA4] text-xs">{tableItem.transaction_no}</div>
								<div className="w-1/12 text-center text-[#7F8FA4] text-xs">{tableItem.time}</div>
								<div className="w-4/12 flex justify-center">
									<div
										className={`${
											tableItem.status === "Reconciled"
												? "text-[#27AE60]"
												: tableItem.status === "Pending"
												? "text-[#EBC315]"
												: "text-[#C4C4C4]"
										} px-4 py-2 rounded-full border-2 border-[#CCCFD4] flex items-center w-[180px] mr-8`}
									>
										<div
											className={`${
												tableItem.status === "Reconciled"
													? "bg-[#27AE60]"
													: tableItem.status === "Pending"
													? "bg-[#EBC315]"
													: "bg-[#C4C4C4]"
											} w-[9px] h-[9px] rounded-full mr-2 text-xs`}
										></div>
										{tableItem.status}
									</div>
									<Image src={GreyArrowDown} alt="GreyArrowDown Icon" width={27} height={26} />
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<div className="flex justify-between items-center mt-8">
				<p className="text-[#000000] text-[13px]">Showing 1 to 10 of 500 entries</p>

				<div className="flex items-center">
					<div className="px-3 py-1 border rounded bg-white text-black cursor-pointer">Previous</div>
					<div className="px-3 py-1 border rounded bg-[#1875F0] text-white cursor-pointer">1</div>
					<div className="px-3 py-1 border rounded bg-white text-black cursor-pointer">2</div>
					<div className="px-3 py-1 border rounded bg-white text-black cursor-pointer">Next</div>
				</div>
			</div>
		</div>
	);
};
