let submit = document.querySelector("#submit");
console.log(submit);

submit.addEventListener("click", displayConfirm);
function displayConfirm() {
	confirm(
		"Is this data correct? \n" +
			"Nama : " +
			document.getElementById("nama").value +
			"\n" +
			"Email: " +
			document.getElementById("email").value +
			"\n" +
			"Message: " +
			document.getElementById("pesan").value
	);
}
