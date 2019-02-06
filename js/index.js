let emailAddress = 'joe@bosman.io';

const email = document.querySelector('#email');
email.value = emailAddress;
email.textContent = emailAddress;

const tooltip = document.querySelector('.tooltip');

tooltip.addEventListener( 'mouseenter', function(){
	this.classList.remove('hide')
	this.classList.add('show')
})

tooltip.addEventListener( 'mouseleave', function(){
	this.classList.remove('show')
	this.classList.add('hide')
})

const disableEmailInput = () => email.disabled = true;
const enableEmailInput = () => email.disabled = false;

function copyEmail(){
	// When the user clicks on mobile it will immediatly get shown 
	// and wont go away. This will remove it for better ux
	tooltip.classList.remove('show');

	// The input for the email address starts off disabled
	// so it can't be edited
	enableEmailInput();
	email.select();

	let success = document.execCommand('copy');

	email.blur();
	
	email.value = 'COPIED TO CLIPBOARD';
	// Disable it again as soon as possible
	disableEmailInput();

	email.classList.add('copied');

	setTimeout(function(){
		enableEmailInput();
		email.value = emailAddress;
		email.classList.remove('copied');
		disableEmailInput();

	}, 1000 )
	
}