import { TForm, TAlert } from "./../components/LeadForm";
export const validateForm = (
	formData: TForm,
	setAlert: ({}: TAlert) => void
) => {
	if (!formData.name) {
		setAlert({
			type: "error",
			message: "Please enter your name.",
			value: true,
		});
		return false;
	}

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailPattern.test(formData.email)) {
		setAlert({
			type: "error",
			message: "Please enter a valid email address.",
			value: true,
		});
		return false;
	}

	if (!formData.phone_number) {
		setAlert({
			type: "error",
			message: "Please enter a valid phone number.",
			value: true,
		});
		return false;
	}
	if (!formData.location) {
		setAlert({
			type: "error",
			message: "Please enter location.",
			value: true,
		});
		return false;
	}
	if (!formData.message) {
		setAlert({
			type: "error",
			message: "Please enter message.",
			value: true,
		});
		return false;
	}
	if (!formData.bedrooms) {
		setAlert({
			type: "error",
			message: "Please enter bedrooms.",
			value: true,
		});
		return false;
	}
	return true;
};
