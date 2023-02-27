export function validateEmail(email) {
	return email.includes("@");
}

export function validateUsername(username) {
	return validateUsernameTooShort(username) && validateUsernameTooLong(username);
}

export function validateUsernameTooShort(username) {
	return username.length >= 3;
}

export function validateUsernameTooLong(username) {
	return username.length <= 12;
}

export function validatePassword(password) {
	return password.length >= 6;
}

export function validateConfirmPassword(password, confirmPassword) {
	return password == confirmPassword;
}

//Créer 4 fonctions qui retournent des chaines de caractère pour les erreurs.
//getEmailError(email) =>"Email incorrecte!" ou ""

export function getEmailError(email) {
	if (!validateEmail(email)) {
		return "Email incorrecte!";
	}
	return "";
}

export function getPasswordError(password) {
	if (!validatePassword(password)) {
		return "Mot de pass trop court! Min. 6 caractères.";
	}
	return "";
}

export function getConfirmPasswordError(password, confirmPassword) {
	if (!validateConfirmPassword(password, confirmPassword)) {
		return "Les mots de passes ne sont pas identiques!";
	}
	return "";
}

export function getUsernameError(username) {
	if (!validateUsernameTooShort(username)) {
		return "Username trop court! Min. 3 caractères";
	}
	if (!validateUsernameTooLong(username)) {
		return "Username trop long! Max. 10 caractères";
	}
	return "";
}
