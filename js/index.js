let emailAddress = 'joseph.a.bosman@gmail.com';

const email = document.querySelector('#email');
email.value = emailAddress;
email.textContent = emailAddress;

function copyEmail(){

	email.select();

	let success = document.execCommand('copy');

	email.blur();
	
	email.value = 'COPIED TO CLIPBOARD';
	email.classList.add('copied');

	setTimeout(function(){
		email.value = 'joseph.a.bosman@gmail.com';
		email.classList.remove('copied');
	}, 1000 )
	
}