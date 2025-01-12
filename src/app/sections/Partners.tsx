import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";

const Montserrat = Montserrat_Alternates({
	subsets: ["latin"],
	weight: ["700"],
});
import { Inter_Tight } from "next/font/google";

const Inter = Inter_Tight({
	subsets: ["latin"],
	weight: "900",
});
export default function partners() {
	return (
		<div className="flex flex-col space-y-12  px-4 sm:px-6  ">
			<div className="text-center text-wrap space-y-4">
				<h1
					className={` ${Montserrat.className} text-xl sm:text-5xl font-bold `}
				>
					Our Partners
				</h1>
				<p className="text-lg sm:text-xl">
					Find out how much you can maximize your income with Key One
					Holiday Homes
				</p>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
				<Image
					src="/partners/airbnb.png"
					alt="legend"
					width={140}
					height={42}
					priority
				/>
				<Image
					src="/partners/bookingcom.png"
					alt="legend"
					width={241}
					height={39}
					priority
				/>
				<Image
					src="/partners/property.png"
					alt="legend"
					width={131}
					height={49}
					priority
				/>
				<Image
					src="/partners/Vrbo.png"
					alt="legend"
					width={128.47}
					height={39}
					priority
				/>
				<Image
					src="/partners/bayut.png"
					alt="legend"
					width={156.47}
					height={39}
					priority
				/>
				<Image
					src="/partners/expedia.png"
					alt="legend"
					width={160.47}
					height={30}
					priority
				/>
			</div>
			<div className="bg-black text-white rounded-lg">
				<div className="flex flex-row p-12 space-x-6">
					<div className="text-wrap w-[523px]">
						<h1
							className={` ${Inter.className} text-[30px]  font-bold `}
						>
							Ready to maximize <br />
							Your Earnings?
						</h1>
						<p>Ready to maximize Your Earnings?</p>
					</div>
					<div className="flex flex-1 justify-end items-center">
						<button className="bg-yellow-600 px-4 py-2 font-semibold rounded-md">
							<a href="#contact">Know more</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
