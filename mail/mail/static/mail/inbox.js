// Use buttons to toggle between views

const inbox = document.querySelector('#inbox');
const sent = document.querySelector('#sent');
const archived = document.querySelector('#archived');
const compose = document.querySelector('#compose');

const emailsV = document.querySelector('#emails-view');
const composeV = document.querySelector('#compose-view');
const composeR = document.querySelector('#compose-recipients');
const composeS = document.querySelector('#compose-subject');
const composeB = document.querySelector('#compose-body');




inbox.addEventListener('click', () => load_mailbox('inbox'));
sent.addEventListener('click', () => load_mailbox('sent'));
archived.addEventListener('click', () => load_mailbox('archive'));
compose.addEventListener('click', compose_email);

// By default, load the inbox
load_mailbox('inbox');


function compose_email() {

	// Show compose view and hide other views
	emailsV.style.display = 'none';
	composeV.style.display = 'block';

	// Clear out composition fields
	composeR.value = '';
	composeS.value = '';
	composeB.value = '';
	
}

function load_mailbox(mailbox) {


	// Show the mailbox and hide other views
	emailsV.style.display = 'block';
	composeV.style.display = 'none';

	// Show the mailbox name
	emailsV.innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;
}