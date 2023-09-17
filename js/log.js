const displayLogForm =(choice) => {


    return(

        `<form class='log-form-container'>
        

            <div class='log-inputs-container'>
                <div class='input-container'>

                    <label for='email'></label>
                    <input type='text' placeholder='Email' id="email" required aria-required='true'/>

                </div>


                <div class='input-container'>

                    <label for='password'></label>
                    <input type='password' placeholder='Password' id="password" required aria-required='true'/>

                </div>


                ${choice === 'signup' ? 
                    `<div class='input-container'>

                        <label for='confirmed-password'></label>
                        <input type='text' placeholder='Confirm the password' id="confirmed-password"/>

                    </div>`
                : ''}
            </div>

            <div class='log-form-buttons-container'>
                <button type='submit'> ${choice === 'signup' ? 'Sign up' : 'Log in'} </button> 
                <p>${choice === 'signup' ? 'Déjà inscrit ? <span id="login-button" aria-label="login button"><u>Connectez-vous</u><span>' : 'Nouveau ? <span  id="signup-button" aria-label="signup button"><u>Inscrivez-vous</u><span>'} </p>
            </div>
        
        </form>`
    )
}

const logSection = document.getElementById('log-section');

logSection.innerHTML = displayLogForm('login')

let loginButton = ""
let signupButton = document.getElementById('signup-button')

window.addEventListener('DOMContentLoaded', () => {



        const logChoice = (choice) => {

            logSection.innerHTML = null;
            logSection.innerHTML = displayLogForm(choice)

            if(choice === 'signup'){
                loginButton = document.getElementById('login-button');
                loginButton.addEventListener('click', () => logChoice('login'))
            }

            if(choice == 'login'){

                signupButton = document.getElementById('signup-button');
                signupButton.addEventListener('click', () => logChoice('signup'))
            }
          

        }

            

        signupButton.addEventListener('click',  logChoice('signup'))
        
})
    

    

     

        

   



    

  


 





