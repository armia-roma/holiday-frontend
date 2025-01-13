"use client";
import api from "./../api-client";
import axios from "axios";
import "react-phone-number-input/style.css";
import "./LeadForm.css";
import PhoneInput, { Value } from "react-phone-number-input";
import { useState } from "react";
import Input from "./Input";
import Alert from "./Alert";
import { validateForm } from "./../utils/validation";
export interface TForm {
	name: string;
	email: string;
	phone_number: string;
	location: string;
	residential: string;
	bedrooms: string;
	message: string;
}
export interface TAlert {
	type: "success" | "error";
	message: string;
	value: boolean;
}
export default function LeadForm() {
	const [formData, setFormData] = useState<TForm>({
		name: "",
		email: "",
		phone_number: "",
		location: "",
		residential: "",
		bedrooms: "",
		message: "",
	});
	const [alert, setAlert] = useState<TAlert>({
		type: "error",
		message: "",
		value: false,
	});
	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!validateForm(formData, setAlert)) {
			// Show alert and prevent submission if validation fails
			setTimeout(() => {
				setAlert((prev) => ({
					...prev,
					value: false,
				}));
			}, 3000);
			return;
		}
		try {
			const response = await api.post("/lead", formData);
			setAlert((prev) => ({
				...prev,
				type: "success",
				message: response.data.message,
				value: true,
			}));
			setTimeout(() => {
				setAlert((prev) => ({
					...prev,
					value: false,
				}));
			}, 3000);
		} catch (error) {
			if (axios.isAxiosError(error))
				if (error.response) {
					setAlert((prev) => ({
						...prev,
						type: "error",
						message: error.response?.data.message,
						value: true,
					}));
					setTimeout(() => {
						setAlert((prev) => ({
							...prev,
							value: false,
						}));
					}, 3000);
				}
		}
	};
	return (
		<form onSubmit={handleSubmit} className="bg-white p-12">
			{alert.value && (
				<div className="mb-3">
					<Alert type={alert.type} message={alert.message}></Alert>
				</div>
			)}

			<h2 className="text-2xl mb-6">
				<span className="font-bold">Earn more</span> by converting your
				property into a holiday home. Request Evaluation
			</h2>
			<div className="flex flex-row gap-4">
				<Input
					placeholder="Enter your name"
					className="w-full"
					onChange={(value) => handleInputChange("name", value)}
				/>

				<Input
					placeholder="Enter your email"
					className="w-full"
					onChange={(value) => handleInputChange("email", value)}
				/>
				<div className="">
					<PhoneInput
						placeholder="Enter phone number"
						value={formData.phone_number}
						onChange={(newValue: Value) =>
							handleInputChange("phone_number", newValue)
						}
						defaultCountry="AE"
						className="py-6 px-3 rounded-md bg-gray-200 w-full"
					/>
				</div>
			</div>
			<div className="flex flex-row gap-4">
				<Input
					className="w-full"
					placeholder="Location"
					onChange={(value) => handleInputChange("location", value)}
				/>

				<Input
					placeholder="Residential"
					className="w-full"
					onChange={(value) =>
						handleInputChange("residential", value)
					}
				/>
				<Input
					placeholder="Number Of Bedrooms"
					onChange={(value) => handleInputChange("bedrooms", value)}
				/>
			</div>

			<div className="flex flex-row gap-4">
				<div className="w-3/4">
					<Input
						className="w-full"
						placeholder="Message"
						onChange={(value) =>
							handleInputChange("message", value)
						}
					/>
				</div>
				<div className="">
					<button className=" px-8 py-3 text-white bg-black rounded-md text-sm font-semibold w-full">
						Request Evaluation
					</button>
				</div>
			</div>
		</form>
	);
}
