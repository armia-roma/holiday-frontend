import Image from "next/image";
import NavBar from "../NavBar";
import { Inter_Tight } from "next/font/google";

const Inter = Inter_Tight({
	subsets: ["latin"],
	weight: "900",
});

export default function HomeSection() {
	return (
		<div className=" bg-[url('/background.png')] h-screen w-full bg-cover bg-center">
			<div id="home" className="container mx-auto ">
				<div>
					<NavBar />
				</div>
				<h1
					className={` text-5xl text-white ${Inter.className} w-[80%] h-[40vh] mt-40`}
				>
					<span className="block">List Your Property</span>
					<span className="block">With Key One</span>
					<span className="block">Holiday Homes</span>
				</h1>
				<div className="flex justify-between">
					<h1 className="text-white">
						<span className="block">
							Maximize your investment and let our dedicated team
							at Key One
						</span>
						<span className="block">
							Holiday Homes handle the details, ensuring a
							seamless renting
						</span>{" "}
						<span>experience for both you and your guests.</span>
					</h1>

					<Image
						src="/legend.png"
						alt="legend"
						width={200}
						height={100}
						priority
					/>
				</div>
			</div>
		</div>
	);
}
