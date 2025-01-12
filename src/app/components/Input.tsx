import { ChangeEvent } from "react";

interface Props {
	className?: string;
	placeholder?: string;
	onChange: (value: string) => void;
}
export default function Input({
	className = "",
	placeholder = "",
	onChange,
}: Props) {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value);
	};
	return (
		<input
			type="text"
			placeholder={placeholder}
			className={`bg-gray-200 p-3 mb-4 outline-none rounded-md ${className}`}
			onChange={handleChange}
		/>
	);
}
