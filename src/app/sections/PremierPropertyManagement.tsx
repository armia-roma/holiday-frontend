import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";

const Montserrat = Montserrat_Alternates({
	subsets: ["latin"],
	weight: ["700"],
});
export default function PremierPropertyManagement() {
	return (
		<div className="flex flex-col md:flex-row items-center space-x-10">
			<div className="relative w-[526px] h-[416px]">
				<div className="absolute top-0 left-0">
					<Image
						src="/image.png"
						width={400}
						height={350}
						alt="hio"
						priority
						className="object-cover"
					></Image>
				</div>
				<div className="absolute bottom-0.5 right-0">
					<Image
						src="/hio.png"
						width={350}
						height={200}
						alt="hio"
						priority
						className="object-cover"
					></Image>
				</div>
			</div>
			<div className="flex flex-col w-[550px] h-[419px] space-y-2">
				<div className="text-wrap space-y-4">
					<h1
						className={` ${Montserrat.className} text-[56px] leading-[68.26px] font-bold `}
					>
						Premier Property Management for the Chosen Ones
					</h1>
					<p>
						Experience exceptional property management tailored
						exclusively for discerning property owners. We elevate
						your investment with unparalleled professionalism and
						personalized attention, ensuring your property reaches
						its fullest potential. Trust us to provide the finest
						care that only the select few can appreciate.
					</p>
				</div>
				<button className=" px-4 py-3 text-white bg-black rounded-md">
					Know More
				</button>
			</div>
		</div>
	);
}
