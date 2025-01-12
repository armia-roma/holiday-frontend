interface Props {
	type: "success" | "error";
	message: string;
}
const Alert = ({ type, message }: Props) => {
	const alertStyles: { success: string; error: string } = {
		success:
			"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded",
		error: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",
	};

	return (
		<div className={alertStyles[type]} role="alert">
			{message}
		</div>
	);
};

export default Alert;
