import Head from "next/head";
import Header from "../components/Header";
import { SideBar } from "../components/SideBar";
import { DashboardBody } from "../components/DashboardBody";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>TransMonitor Web</title>
				<meta name="description" content="TransMonitor next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<div className="w-full min-w-full flex overflow-x-scroll">
				<SideBar />

				<DashboardBody />
			</div>
		</div>
	);
}
