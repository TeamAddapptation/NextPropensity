export function formatDate(dateString) {
	const date = new Date(dateString);
	const month = (date.getMonth() + 1).toString().padStart(2, "0"); // months are 0-indexed
	const day = date.getDate().toString().padStart(2, "0");
	const year = date.getFullYear();
	return `${month}/${day}/${year}`;
}
