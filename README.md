# EMail

Singe-page-app email that makes API calls to send and receive emails

### Written with:

- HTML
- CSS (Bootstrap 4.5.3)
- JavaScript
- Python 3.9
- Django 3.0.2
- SQLite 3

### Readme Navigation

1. [Mailbox](#1-mailbox)
    - [Inbox](#11-inbox)
    - [Sent](#12-sent)
    - [Archived](#13-archived)
2. [Compose an email](#2-compose-an-email)
3. [View Email](#3-view-email)
    - [Reply to email](#31-reply-to-email)
    - [Archive an email](#32-archive-an-email)
4. [Future improvements](#4-future-improvements)

[My contacts](#my-contacts)

## 1. Mailbox:

### 1.1 Inbox:

On first visit user will see this page.

All **Emails** that user received are displayed on this page.

**Emails** vary in color:

* *Grey* - read emails.
* *White with blue border* - unread emails.

![inbox](/readmedia/inbox.png)

### 1.2 Sent:

User can click on _**Sent**_ link in the navbar and that renders content of **sent** page

All emails **sent** by the user are displayed on this page.

![sent emails](/readmedia/sent.png)

### 1.3 Archived:

User can click on _**Archived**_ link in the navbar and that renders content of **archive** page

All emails that user have **archived** are displayed on this page.


![archived emails](/readmedia/archived.png)

## 2. Compose an email:

User can click on _**Compose**_ link in the navbar and that renders content of **compose** page

On **compose** page user presented with a form by filling out which he can send an email:

![compose an email](/readmedia/email-composing.gif)

## 3. View Email:

User can click on any **email** and that renders content of that **email**.

If user clicks on **unread email** that **email** becomes read and now has grey background.

![clicking on email](/readmedia/clicking-on-email.gif)

### 3.1 Reply to email:

On **email** page user can click on _**reply**_ button, doing so user will be presented with a **compose** form prefilled with the:
* **recipient field** set to whoever sent the original email.
* **subject line** With the **"Re: "**. If the subject line alreay begins with **"Re: "** it will not be added again.
* **body of the email** with a line: **"On Jan 1 2021, 12:00 AM name@example.com wrote: " 

![reply to email](/readmedia/reply-to-email.gif)


### 3.2 Archive an email:

image description

![email archivation](/readmedia/archive-an-email.gif)

## 4. Future improvements:

1. Switch from bootstrap to css
2. Make better ui
3. Feature 3

## My contacts

[Telegram](https://t.me/vincvader)

[VK](https://vk.com/vincvader)

[E-Mail](mailto:vincvader@mail.ru)
