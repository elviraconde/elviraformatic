$.validator.setDefaults({
	submitHandler : function() { alert("submitted!");
	}
});

$().ready(function() {
	// validate the comment form when it is submitted
	$("#commentForm").validate();

	// validate signup form on keyup and submit
	$("#signupForm").validate({
		rules : {
			firstname : "required",
			lastname : "required",
			username : {
				required : true,
				minlength : 2
			},
			password : {
				required : true,
				minlength : 5
			},
			confirm_password : {
				required : true,
				minlength : 5,
				equalTo : "#password"
			},
			email : {
				required : true,
				email : true
			},
			topic : {
				required : "#newsletter:checked",
				minlength : 2
			},
			agree : "required"
		},
		messages : {
			firstname : "Por favor ponga su nombre",
			lastname : "Por favor ponga su apellido",
			username : {
				required : "Por favor ponga su nombre de usuario",
				minlength : "Su nombre de usuario debe contener como minimo dos caracteres"
			},
			password : {
				required : "Por favor introduzca su contraseña",
				minlength : "Su contraseña debe contener como minimo 5 caracteres"
			},
			confirm_password : {
				required : "Por favor introduzca su contraseña",
				minlength : "Su contraseña debe conener como minimo 5 caracteres",
				equalTo : "Por favor repita la contraseña"
			},
			email : "Por favor introduzca su correo electronico",
			agree : "Por favor acepte nuestra politica"
		}
	});

	// propose username by combining first- and lastname
	$("#username").focus(function() {
		var firstname = $("#firstname").val();
		var lastname = $("#lastname").val();
		if(firstname && lastname && !this.value) {
			this.value = firstname + "." + lastname;
		}
	});
	//code to hide topic selection, disable for demo
	var newsletter = $("#newsletter");
	// newsletter topics are optional, hide at first
	var inital = newsletter.is(":checked");
	var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
	var topicInputs = topics.find("input").attr("disabled", !inital);
	// show when newsletter is checked
	newsletter.click(function() {
		topics[this.checked ? "removeClass" : "addClass"]("gray");
		topicInputs.attr("disabled", !this.checked);
	});
});
