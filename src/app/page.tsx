import ManageFor from "./sections/ManageFor";
import Partners from "./sections/Partners";

import LeadForm from "./components/LeadForm";

import PremierPropertyManagement from "./sections/PremierPropertyManagement";
import HomeSection from "./sections/HomeSection";
export default function Home() {
	return (
		<div>
			<HomeSection />
			<div
				id="contact"
				className="flex justify-center mx-auto rounded-lg"
			>
				<LeadForm></LeadForm>
			</div>

			<div className=" flex items-center justify-center mx-auto h-screen">
				<PremierPropertyManagement />
			</div>
			<div
				id="services"
				className="flex items-center justify-center mx-auto h-screen"
			>
				<ManageFor />
			</div>
			<div
				id="about"
				className="flex items-center justify-center mx-auto h-screen mt-9"
			>
				<Partners />
			</div>
		</div>
	);
}
