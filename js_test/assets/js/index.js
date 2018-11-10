const modal = document.getElementById("success-modal");
const span = document.getElementById("span-close");
const modalBtn = document.getElementById("modal-form-btn");

function contactFormSubmit() {

	const contactName = document.getElementById("contact-fname").value;
	const contactBday = document.getElementById("contact-bday").value;
	const contactNation = document.getElementById("contact-nationality").value;
	const selectOpt = document.getElementById("contact-nationality");

	validateFields(contactName, contactBday, selectOpt, contactNation);

}

function validateFields(contactName,contactBday,selectOpt, contactNation) {

	if (contactName == "") {
		document.getElementById("contact-fname").classList.add("invalid");
	} else{
		document.getElementById("contact-fname").classList.remove("invalid");
	}

	if (contactBday == "") {
		document.getElementById("contact-bday").classList.add("invalid");
	} else{
		document.getElementById("contact-bday").classList.remove("invalid");
	}

	if (selectOpt.selectedIndex == "") {
		document.getElementById("contact-nationality").classList.add("invalid");
	} else{
		document.getElementById("contact-nationality").classList.remove("invalid");
	}

	successForm(contactName, contactBday, selectOpt, contactNation);

}	

function successForm(contactName,contactBday,selectOpt, contactNation) {

	if (contactName && contactBday && selectOpt.selectedIndex !== 0) {
		document.getElementById("modal-fname").innerHTML = contactName;
		document.getElementById("modal-bday").innerHTML = contactBday;
		document.getElementById("modal-nationality").innerHTML = contactNation;

		modal.style.display = "block";

		window.setTimeout(() => {
    	modal.style.display = "none"
    	window.location.reload();

 	 	}, 4000)


	} else{
		document.getElementById("modal-fname").innerHTML = "";
		document.getElementById("modal-bday").innerHTML = "";
		document.getElementById("modal-nationality").innerHTML = "";
	}


}


	span.onclick = function() {
   
    	modal.style.display = "none";
    	window.location.reload();

	}

	modalBtn.onclick = function() {
   
    	modal.style.display = "none";
    	window.location.reload();

	}

	window.onclick = function(event) {

	    if (event.target == modal) {
	        modal.style.display = "none";
	    	window.location.reload();
	    }

	}

