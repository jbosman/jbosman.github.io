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

function copyEmail(){
	// When we click it will immediatly get shown on mobile
	tooltip.classList.remove('show');

	email.select();

	let success = document.execCommand('copy');

	email.blur();
	
	email.value = 'COPIED TO CLIPBOARD';
	email.classList.add('copied');

	setTimeout(function(){
		email.value = emailAddress;
		email.classList.remove('copied');

	}, 1000 )
	
}