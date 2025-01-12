import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";

const Montserrat = Montserrat_Alternates({
	subsets: ["latin"],
	weight: ["700"],
});
export default function ManageFor() {
	return (
		<div className="flex flex-col space-y-11">
			<div className="text-center">
				<h1
					className={` ${Montserrat.className} text-xl sm:text-5xl font-bold `}
				>
					We Manage For
				</h1>
				<p>
					Find out how much you can maximize your income with Key One
					Holiday Homes
				</p>
			</div>
			<div className="flex flex-row space-x-4">
				<Image
					src="/manageFor/manageFor1.png"
					alt="legend"
					width={642.74}
					height={300}
					priority
				></Image>
				<Image
					src="/manageFor/Rectangle.png"
					alt="legend"
					width={562.53}
					height={300}
					priority
				></Image>
			</div>
			<div className="flex flex-row space-x-4">
				<Image
					src="/manageFor/managefor3.png"
					alt="legend"
					width={589}
					height={300}
					priority
				></Image>
				<Image
					src="/manageFor/manageFor4.png"
					alt="legend"
					width={616}
					height={300}
					priority
				></Image>
			</div>
		</div>
	);
}
