import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "500",
});
export default function NavBar() {
	return (
		<nav className="sticky top-0 flex space-x-20 mb-5 h-14 items-center pt-10">
			<a>
				<Image
					src="/Vector.png"
					alt="App Logo"
					width={150}
					height={50}
					priority
				/>
			</a>
			<ul className="flex space-x-16 p-3 px-16 bg-white/25 backdrop-blur-md rounded-md">
				<li>
					<a
						href="#home"
						className={`${poppins.className} text-white hover:outline hover:outline-2 hover:outline-white active:outline active:outline-2 active:outline-white p-2 rounded-md transition-all duration-200`}
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="#services"
						className={`${poppins.className} text-white hover:outline hover:outline-2 hover:outline-white active:outline active:outline-2 active:outline-white p-2 rounded-md transition-all duration-200`}
					>
						Our Services
					</a>
				</li>
				<li>
					<a
						href="#about"
						className={`${poppins.className} text-white hover:outline hover:outline-2 hover:outline-white active:outline active:outline-2 active:outline-white p-2 rounded-md transition-all duration-200`}
					>
						About Us
					</a>
				</li>
				<li>
					<a
						href="#contact"
						className={`${poppins.className} text-white hover:outline hover:outline-2 hover:outline-white active:outline active:outline-2 active:outline-white p-2 rounded-md transition-all duration-200`}
					>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
