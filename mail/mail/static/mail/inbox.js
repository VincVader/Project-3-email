

const inbox = document.querySelector('#inbox');
const sent = document.querySelector('#sent');
const archived = document.querySelector('#archived');
const compose = document.querySelector('#compose');

const emailsView = document.querySelector('#emails-view');
const emailView = document.querySelector('#email-view');
const composeView = document.querySelector('#compose-view');
const composeRecipients = document.querySelector('#compose-recipients');
const composeSubject = document.querySelector('#compose-subject');
const composeBody = document.querySelector('#compose-body');
const composeForm = document.querySelector('#compose-form');



inbox.addEventListener('click', () => load_mailbox('inbox'));
sent.addEventListener('click', () => load_mailbox('sent'));
archived.addEventListener('click', () => load_mailbox('archive'));

compose.addEventListener('click', () => compose_email('', '', ''));

load_mailbox('inbox')

function load_mailbox(mailbox) {

	emailsView.style.display = 'block';
	emailView.style.display = 'none';
	composeView.style.display = 'none';
	
	emailsView.innerHTML = '';
	const h3 = document.createElement('h3');
	emailsView.append(h3);
	h3.innerHTML = `${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}`;

	const container = document.createElement('div');
	container.classList.add('container');
	fetch(`/emails/${mailbox}`)
		.then(response => response.json())
		.then(emails => {
			console.log(emails);
			emailsView.append(container);
			for (const item of emails) {
				const row = document.createElement('div');
				row.classList.add('row', 'mb-2');
				if (item.read) {
					row.classList.add('border', 'border-secondary', 'bg-grey');
				} else {
					row.classList.add('border', 'border-primary', );
				};
				container.appendChild(row);
				const pepeWho = document.createElement('div');
				pepeWho.classList.add('col-12', 'col-md-4');
				const pepeSubject = document.createElement('div');
				pepeSubject.classList.add('col-6', 'col-md-4');
				const pepeTime = document.createElement('div');
				pepeTime.classList.add('col-6', 'col-md-4');
				pepeWho.innerHTML = item['sender'];
				pepeSubject.innerHTML = item.subject;
				pepeTime.innerHTML = item.timestamp;
				row.appendChild(pepeWho);
				row.append(pepeSubject);
				row.append(pepeTime);

				row.addEventListener('click', () => {
					view_email(item.id)
				});

			};
			
		});


};

function view_email(id) {
	fetch(`/emails/${id}`)
		.then(response => response.json())
		.then(email => {
			emailsView.style.display = 'none';
			emailView.style.display = 'block';
			composeView.style.display = 'none';
			emailView.innerHTML = '';
			fetch(`/emails/${id}`, {
				method: 'PUT',
				body: JSON.stringify({
					read: true
				})
			});
			const sender = document.createElement('p');
			const recipients = document.createElement('p');
			const subject = document.createElement('p');
			const timestamp = document.createElement('p');
			const body = document.createElement('p');
			const reply = document.createElement('button');
			const archive = document.createElement('button');
			reply.classList.add('btn', 'btn-primary', 'ml-3');
			archive.classList.add('btn', 'btn-primary', 'ml-3');
			reply.innerHTML = 'Reply';

			reply.onclick = () => {
				let reSubject;
				if (email.subject.slice(0, 3) === 'Re:') {
					reSubject = `${email.subject}`
				} else {
					reSubject = `Re: ${email.subject}`
				};
				compose_email(
					email.sender,
					reSubject,
					`On ${email.timestamp} ${email.sender} wrote: ${email.body}`
				);
			};


			if (email.archived) {
				archive.innerHTML = 'Unarchive';
			} else {
				archive.innerHTML = 'Archive';
			};
			archive.onclick = () => {
				if (email.archived) {
					fetch(`/emails/${id}`, {
						method: 'PUT',
						body: JSON.stringify({
							archived: false
						})
					});
				} else {
					fetch(`/emails/${id}`, {
						method: 'PUT',
						body: JSON.stringify({
							archived: true
						})
					});
				};
				load_mailbox('inbox');
			};

			sender.innerHTML = `From: ${email.sender}`;
			recipients.innerHTML = `To: ${email.recipients}`;
			subject.innerHTML = `Subject: ${email.subject}`;
			timestamp.innerHTML = `Timestamp: ${email.timestamp}`;
			body.innerHTML = email.body;

			if (email.sender === email.user) {
				reply.style.display = 'none';
				archive.style.display = 'none';
			}

			emailView.append(sender, recipients, subject, timestamp, reply, archive, body);



		});
}

function compose_email(recipients, subject, body) {

	
	emailsView.style.display = 'none';
	emailView.style.display = 'none';
	composeView.style.display = 'block';
	
	composeRecipients.value = recipients;
	composeSubject.value = subject;
	composeBody.value = body;
}

composeForm.addEventListener('submit', () => {
	fetch('/emails', {
			method: 'POST',
			body: JSON.stringify({
				recipients: composeRecipients.value,
				subject: composeSubject.value,
				body: composeBody.value,
			})
		})
		.then(response => response.json())
		.then(result => {
			console.log(result);
		});
	load_mailbox('sent');

});