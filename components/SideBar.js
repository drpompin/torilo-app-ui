import React, { useState } from "react";
import Image from "next/image";
import OverviewIcon from "../public/images/OverviewIcon.svg";
import AllPaymentIcon from "../public/images/PaymentIcon.svg";
import PaymentReconciledIcon from "../public/images/PaymentReconciledIcon.svg";
import PaymentUnreconciledIcon from "../public/images/PaymentUnreconciledIcon.svg";
import SettlementIcon from "../public/images/SettlementIcon.svg";
import AllOrdersIcon from "../public/images/AllOrdersIcon.svg";
import PendingOrdersIcon from "../public/images/PendingOrdersIcon.svg";
import ReconciledOrdersIcon from "../public/images/ReconciledOrdersIcon.svg";
import MerchantProfileIcon from "../public/images/ProfileIcon.svg";

const PaymentsMenu = [
	{
		name: "All Payments",
		choice: "allPayments",
		icon: AllPaymentIcon,
	},
	{
		name: "Reconciled Payments",
		choice: "reconciledPayments",
		icon: PaymentReconciledIcon,
	},
	{
		name: "Un - Reconciled payments",
		choice: "unreconciledPayments",
		icon: PaymentUnreconciledIcon,
	},
	{
		name: "Manual Settlement",
		choice: "manualSettlement",
		icon: SettlementIcon,
	},
];

const OrdersMenu = [
	{
		name: "All Orders",
		choice: "allOrders",
		icon: AllOrdersIcon,
	},
	{
		name: "Pending Orders",
		choice: "pendingOrders",
		icon: PendingOrdersIcon,
	},
	{
		name: "Reconciled Orders",
		choice: "reconciledOrders",
		icon: ReconciledOrdersIcon,
	},
];

export const SideBar = () => {
	const [activeLink, setActiveLink] = useState("main");

	return (
		<div
			className="w-2/5 md:min-w-[20%] md:w-1/5 py-8 min-h-screen max-h-screen bg-white fixed overflow-x-scroll pb-40 z-50"
			style={{ borderRight: "2px solid rgba(79, 79, 79, 0.07)" }}
		>
			<div className="flex justify-center mb-8">
				<div className="text-white text-xs lg:text-base font-bold rounded-3xl bg-[#27AE60] text-center px-8 py-2 cursor-pointer">
					GENERATE INVOICE
				</div>
			</div>

			<div className="mb-9">
				<p className="pl-[42px] mb-[14px]">Main</p>

				<div
					onClick={() => setActiveLink("main")}
					className={`${
						activeLink === "main" && "bg-[#e8f1fd] border-[#1875F0] border-l-4"
					} mb-4 md:pl-[42px] py-[10px] flex items-center cursor-pointer`}
				>
					<span className="hidden md:block">
						<Image src={OverviewIcon} alt="OverviewIcon" height={16} width={19} />
					</span>
					<p className="ml-[15px] hover:text-[#1875F0]">Overview</p>
				</div>
			</div>

			<div className="mb-9">
				<p className="pl-[42px] mb-[14px]">Payments</p>

				{PaymentsMenu.map((payment) => {
					return (
						<div
							onClick={() => setActiveLink(payment.choice)}
							className={`${
								activeLink === payment.choice && "bg-[#e8f1fd] border-[#1875F0] border-l-4"
							} flex mb-4 md:pl-[42px] py-[10px] items-center cursor-pointer`}
							key={payment.choice}
						>
							<span className="hidden md:block">
								<Image src={payment.icon} alt="OverviewIcon" height={16} width={17} />
							</span>
							<p className="ml-[15px] hover:text-[#1875F0]">{payment.name}</p>
						</div>
					);
				})}
			</div>

			<div className="mb-9">
				<p className="pl-[42px] mb-[14px]">Orders</p>

				{OrdersMenu.map((orders) => {
					return (
						<div
							onClick={() => setActiveLink(orders.choice)}
							className={`${
								activeLink === orders.choice && "bg-[#e8f1fd] border-[#1875F0] border-l-4"
							} flex mb-4 md:pl-[42px] py-[10px] items-center cursor-pointer`}
							key={orders.choice}
						>
							<span className="hidden md:block">
								<Image src={orders.icon} alt="OverviewIcon" height={16} width={17} />
							</span>
							<p className="ml-[15px] hover:text-[#1875F0]">{orders.name}</p>
						</div>
					);
				})}
			</div>

			<div
				onClick={() => setActiveLink("merchantProfile")}
				className={`${
					activeLink === "merchantProfile" && "bg-[#e8f1fd] border-[#1875F0] border-l-4"
				} mb-4 md:pl-[42px] py-[10px] flex items-center cursor-pointer`}
			>
				<span className="hidden md:block">
					<Image src={MerchantProfileIcon} alt="OverviewIcon" height={16} width={19} />
				</span>
				<p className="ml-[15px] hover:text-[#1875F0]">Merchant Profile</p>
			</div>
		</div>
	);
};
