const emailInput = document.querySelector('#email');
const contactFooter = document.querySelector('#contact-footer');
const newMessageDiv = document.createElement('div');
const messageInput = document.querySelector('#message');
const formContainer = document.querySelector('.contact-form-container')


//adding classes
newMessageDiv.classList.add('sent-message-container');
newMessageDiv.setAttribute('dialog', true)



//declaring variables
let message = "";
let email = "";


//intializing an object
const messageToSend = {

    email:"",
    message:""
}


// sendEmail function
const sendEmail = () => {


    console.log('in sendEmail');
    newMessageDiv.innerHTML = messageContent(messageToSend)
    contactFooter.append(newMessageDiv)
    setTimeout(() => {

        contactFooter.removeChild(newMessageDiv)

    }, 3000)
    
}


// messageContet  function
const messageContent = (m) => {

    return(

        `
        <p><b>Le message suivant a été envoyé :</b></p>
        <br />
        <p>${m.email}</p>
        <p>${m.message}</p>

        `

    )
}

// listener on DOMContentLoaded event
window.addEventListener('DOMContentLoaded', () => {


    formContainer.addEventListener('submit', (e) => {

        console.log('in clallback submit')
        e.preventDefault();
        messageToSend.email = email
        messageToSend.message = message
        formContainer.reset()
        sendEmail()
    })


    messageInput.addEventListener('input', (e) => {

        console.log('message is changing ...', e.target.value);
        message = e.target.value

    }),


    emailInput.addEventListener('input', (e) => {

        console.log('email is changing ...', e.target.value);
        email = e.target.value

    });



})