const loginButton = document.querySelector('.register-button'); 
const formLogin = document.getElementById('form-register')

const users = [
    {
        name: "Luis", 
        password: 2121
    },
]


formLogin.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const formData = new FormData(formLogin); 
    
    for (const [nameUser, passwordUser] of formData.entries() ) {
        
            users.forEach(user => {
                // user.name == nameUser ? userAlreadyExists() : console.log("User does not exists"); 
                prompt(user.name); 
                prompt(nameUser); 
            }) 
        
        }

        
    })



const userAlreadyExists = () => {
    prompt("User already exists!!"); 
}
